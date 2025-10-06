export interface LexicalContent {
  root: LexicalRootNode
}

export interface LexicalRootNode {
  type: 'root'
  children: LexicalNode[]
  direction: string | null
  format: string
  indent: number
  version: number
}

export interface LexicalNode {
  type: 'paragraph' | 'heading' | 'horizontalrule' | 'list' | 'upload' | 'link' | 'listitem'
  children?: LexicalChild[]
  direction?: string | null
  format?: string
  indent?: number
  version?: number
  textFormat?: number
  textStyle?: string
  tag?: string
  listType?: 'bullet' | 'number'
  start?: number
  value?: UploadValue
  relationTo?: string
  id?: string
  fields?: LinkFields
}

export interface LexicalChild {
  type: 'text' | 'linebreak' | 'link'
  text?: string
  detail?: number
  format?: number
  mode?: string
  style?: string
  version?: number
  children?: LexicalChild[]
  direction?: string | null
  indent?: number
  fields?: LinkFields
  id?: string
}

export interface UploadValue {
  id: number
  alt: string
  url: string
  filename: string
  mimeType: string
  filesize: number
  width: number
  height: number
  thumbnailURL: string | null
  updatedAt: string
  createdAt: string
  focalX?: number
  focalY?: number
}

export interface LinkFields {
  linkType: 'custom' | 'internal'
  url?: string
  newTab?: boolean
  doc?: any
}
