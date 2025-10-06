import type { Config } from 'tailwindcss'

const config: Config = {
  // ... your existing config
  plugins: [
    require('@tailwindcss/typography'),
    // ... other plugins
  ],
}

export default config
