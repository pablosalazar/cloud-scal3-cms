import React from 'react'
import Image from 'next/image'
import { LexicalContent, LexicalNode, LexicalChild } from '@/types/lexical'

export function renderRichText(content: LexicalContent | null | undefined): React.ReactNode {
  if (!content?.root?.children) return null

  return <div>{content.root.children.map((node, index) => renderNode(node, index))}</div>
}

function renderNode(node: LexicalNode, key: number): React.ReactNode {
  // Handle paragraphs
  if (node.type === 'paragraph') {
    return (
      <p key={key} className="mb-4">
        {node.children?.map((child, childIndex) => renderChild(child, childIndex))}
      </p>
    )
  }

  // Handle headings
  if (node.type === 'heading') {
    const tag = node.tag || 'h2'
    const children = node.children?.map((child, childIndex) => renderChild(child, childIndex))

    switch (tag) {
      case 'h1':
        return (
          <h1 key={key} className="text-4xl font-bold mb-4 mt-8">
            {children}
          </h1>
        )
      case 'h2':
        return (
          <h2 key={key} className="text-3xl font-bold mb-4 mt-8">
            {children}
          </h2>
        )
      case 'h3':
        return (
          <h3 key={key} className="text-2xl font-bold mb-4 mt-6">
            {children}
          </h3>
        )
      case 'h4':
        return (
          <h4 key={key} className="text-xl font-bold mb-4 mt-6">
            {children}
          </h4>
        )
      case 'h5':
        return (
          <h5 key={key} className="text-lg font-bold mb-4 mt-4">
            {children}
          </h5>
        )
      case 'h6':
        return (
          <h6 key={key} className="text-base font-bold mb-4 mt-4">
            {children}
          </h6>
        )
      default:
        return (
          <h2 key={key} className="text-3xl font-bold mb-4 mt-8">
            {children}
          </h2>
        )
    }
  }

  // Handle horizontal rules
  if (node.type === 'horizontalrule') {
    return <hr key={key} className="my-8 border-t border-gray-300" />
  }

  // Handle lists
  if (node.type === 'list') {
    const ListTag = node.listType === 'number' ? 'ol' : 'ul'
    const listClass =
      node.listType === 'number'
        ? 'mb-4 ml-6 list-decimal space-y-2'
        : 'mb-4 ml-6 list-disc space-y-2'

    return (
      <ListTag key={key} className={listClass}>
        {node.children?.map((listItem, itemIndex) => (
          <li key={itemIndex}>
            {listItem.children?.map((child, childIndex) => renderChild(child, childIndex))}
          </li>
        ))}
      </ListTag>
    )
  }

  // Handle uploads (images)
  if (node.type === 'upload' && node.value) {
    return (
      <div key={key} className="my-8">
        <Image
          src={node.value.url}
          alt={node.value.alt || ''}
          width={node.value.width || 800}
          height={node.value.height || 600}
          className="rounded-lg w-full h-auto"
        />
      </div>
    )
  }

  // Handle links at node level
  if (node.type === 'link' && node.fields) {
    const url = node.fields.url || '#'
    const newTab = node.fields.newTab || false

    return (
      <a
        key={key}
        href={url}
        target={newTab ? '_blank' : '_self'}
        rel={newTab ? 'noopener noreferrer' : undefined}
        className="text-primary hover:underline font-medium"
      >
        {node.children?.map((child, childIndex) => renderChild(child, childIndex))}
      </a>
    )
  }

  return null
}

function renderChild(child: LexicalChild, key: number): React.ReactNode {
  // Handle text nodes
  if (child.type === 'text') {
    const text = child.text || ''

    // Handle different formats
    // format: 0 = normal, 1 = bold, 2 = italic, 8 = code/link text
    if (child.format === 1) {
      return <strong key={key}>{text}</strong>
    }
    if (child.format === 2) {
      return <em key={key}>{text}</em>
    }
    if (child.format === 3) {
      return (
        <strong key={key}>
          <em>{text}</em>
        </strong>
      )
    }
    if (child.format === 8) {
      return (
        <span key={key} className="font-medium">
          {text}
        </span>
      )
    }
    if (child.format === 16) {
      return (
        <code key={key} className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">
          {text}
        </code>
      )
    }

    return <span key={key}>{text}</span>
  }

  // Handle line breaks
  if (child.type === 'linebreak') {
    return <br key={key} />
  }

  // Handle nested links
  if (child.type === 'link' && child.fields) {
    const url = child.fields.url || '#'
    const newTab = child.fields.newTab || false

    return (
      <a
        key={key}
        href={url}
        target={newTab ? '_blank' : '_self'}
        rel={newTab ? 'noopener noreferrer' : undefined}
        className="text-primary hover:underline font-medium"
      >
        {child.children?.map((c, i) => renderChild(c, i))}
      </a>
    )
  }

  return null
}
