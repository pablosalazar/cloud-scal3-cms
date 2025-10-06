import { LexicalContent } from '@/types/lexical'

export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  content: LexicalContent
  publishedAt: string
  tags: string[]
  coverImage?: {
    url: string
    alt: string
  }
  status: 'draft' | 'published'
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'
    const response = await fetch(
      `${baseUrl}/api/posts?where[status][equals]=published&sort=-publishedAt&depth=1`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      },
    )

    if (!response.ok) {
      const body = await response.text().catch(() => '')
      console.error('Failed to fetch posts:', response.status, body)
      throw new Error('Failed to fetch posts')
    }

    const data = await response.json()

    // Transform the data to match your component's structure
    return data.docs.map((post: any) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      publishedAt: post.publishedAt,
      tags: post.tags?.map((t: any) => t.tag) || [],
      coverImage: post.coverImage
        ? {
            url: typeof post.coverImage === 'string' ? post.coverImage : post.coverImage.url,
            alt: post.coverImage.alt || post.title,
          }
        : undefined,
      status: post.status,
    }))
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

export async function getLatestPosts(limit = 4): Promise<Post[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'
    const response = await fetch(
      `${baseUrl}/api/posts?where[status][equals]=published&sort=-publishedAt&depth=1&limit=${limit}`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      },
    )

    if (!response.ok) {
      const body = await response.text().catch(() => '')
      console.error('Failed to fetch latest posts:', response.status, body)
      throw new Error('Failed to fetch latest posts')
    }

    const data = await response.json()

    return data.docs.map((post: any) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      publishedAt: post.publishedAt,
      tags: post.tags?.map((t: any) => t.tag) || [],
      coverImage: post.coverImage
        ? {
            url: typeof post.coverImage === 'string' ? post.coverImage : post.coverImage.url,
            alt: post.coverImage?.alt || post.title,
          }
        : undefined,
      status: post.status,
    }))
  } catch (error) {
    console.error('Error fetching latest posts:', error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/posts?where[slug][equals]=${slug}&where[status][equals]=published&depth=1`,
      {
        next: { revalidate: 60 },
      },
    )

    if (!response.ok) {
      return null
    }

    const data = await response.json()

    if (data.docs.length === 0) {
      return null
    }

    const post = data.docs[0]

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      publishedAt: post.publishedAt,
      tags: post.tags?.map((t: any) => t.tag) || [],
      coverImage: post.coverImage
        ? {
            url: typeof post.coverImage === 'string' ? post.coverImage : post.coverImage.url,
            alt: post.coverImage.alt || post.title,
          }
        : undefined,
      status: post.status,
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}
