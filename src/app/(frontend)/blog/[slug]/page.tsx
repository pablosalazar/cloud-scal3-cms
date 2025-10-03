// app/blog/[slug]/page.tsx
import { getPostBySlug, getAllPosts } from '@/data/posts'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Hero } from '@/components/common/Hero'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static paths at build time
export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage.url] : [],
    },
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Hero
        bgImg="/bg-hero-1.png"
        brandName="AWS Marketplace Product Advisory"
        title={post.title}
      />
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Back button */}

        {/* Cover Image */}
        {/* {post.coverImage && (
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.coverImage.url}
            alt={post.coverImage.alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      )} */}

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between gap-4 text-muted-foreground mb-6">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>

            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none dark:prose-invert
          prose-headings:font-bold prose-headings:text-white
          prose-h1:text-5xl prose-h1:mt-16 prose-h1:mb-8 prose-h1:text-[#97F4BA]
          prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-[#97F4BA] prose-h2:border-b prose-h2:border-gray-700 prose-h2:pb-3
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-white
          prose-p:text-gray-300 prose-p:leading-8 prose-p:mb-6
          prose-a:text-[#97F4BA] prose-a:no-underline hover:prose-a:underline hover:prose-a:text-[#73FFA8]
          prose-strong:text-white prose-strong:font-semibold
          prose-ul:my-6 prose-li:my-3 prose-li:text-gray-300
          prose-ol:my-6 prose-ol:text-gray-300
          prose-blockquote:border-l-4 prose-blockquote:border-[#97F4BA] prose-blockquote:bg-gray-800 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
          prose-code:bg-gray-800 prose-code:text-[#97F4BA] prose-code:px-2 prose-code:py-1 prose-code:rounded
          prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700
          prose-img:rounded-lg prose-img:shadow-lg
          prose-hr:border-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  )
}
