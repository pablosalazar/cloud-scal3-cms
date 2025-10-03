FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ✅ Copy only package files first (cached if unchanged)
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && corepack prepare pnpm@latest --activate && pnpm i --frozen-lockfile

FROM node:22-alpine AS builder
WORKDIR /app

# ✅ Copy node_modules from cache (instant if deps didn't change)
COPY --from=deps /app/node_modules ./node_modules

# ✅ Copy source code last (changes frequently)
COPY . .

RUN mkdir -p ./public

ENV NODE_OPTIONS="--no-deprecation --max-old-space-size=8000"
ENV NEXT_TELEMETRY_DISABLED=1

RUN corepack enable pnpm && pnpm run build

FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NODE_OPTIONS="--no-deprecation"
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Fast copy (1-5 seconds)
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

RUN mkdir -p /app/data /app/media
RUN chown -R nextjs:nodejs /app/data /app/media

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD HOSTNAME="0.0.0.0" node server.js