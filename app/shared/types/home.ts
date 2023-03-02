import { ImageProps } from 'next/dist/client/image'

export interface Image {
  src: string
  alt: string
  size?: 'xl' | 'lg' | 'md' | 'xs'
}

export interface ImageHelpUkraineProps {
  id: number
  src: string
  alt: string
}

export interface HomeSwiperItem {
  id: number
  image: Image
}

export type LanguageProps = 'en' | 'es' | 'uk' | 'ru'

export type CategoryRelatedItemProps = {
  title: string
  id: string
}
export type MenuItemProps = {
  id: string
  name: string
  slug: string
  categoryRelateds: CategoryRelatedItemProps[]
}

export type ButtonProps = {
  name: string
  link: string
}

export type gpqImage = {
  url: string
}
export type AuthorProps = {
  bio: string
  name: string
  photo: gpqImage
}

export enum rawTypeProps {
  'paragraph' = 0,
  'image' = 1,
  'link' = 2,
  'block-quote' = 3,
  'class' = 4,
  'table' = 5,
  'numbered-list' = 6,
  'bulleted-list' = 7,
  'heading-one' = 8,
  'heading-two' = 9,
  'heading-tree' = 10,
  'heading-four' = 11,
  'heading-five' = 12,
  'heading-six' = 13,
  'code-block' = 14,
  'iframe' = 15,
}

export type PostDetailsRawChildrenTextProps = {
  text: string
  bold?: boolean
  underline?: boolean
  italic?: boolean
  code?: boolean
}

export type BlockQuoteProps = {
  children: PostDetailsRawChildrenTextProps[]
}

export type PostDetailsRawChildrenLinkProps = {
  href: string
  openInNewTab?: boolean
  title: string
  type: rawTypeProps
  children: PostDetailsRawChildrenTextProps[]
}

export type PostDetailsRawChildrenImageProps = {
  children: PostDetailsRawChildrenTextProps[]
  handle: string
  height: 768
  mimeType: string
  src: string
  title: string
  type: rawTypeProps
  width: number
}

export type PostDetailsRawChildrenProps = {
  type: rawTypeProps
  children: PostDetailsRawChildrenTextProps[]
}

export type PostDetailsRawProps = {
  children:
    | PostDetailsRawChildrenProps[]
    | PostDetailsRawChildrenImageProps[]
    | PostDetailsRawChildrenLinkProps[]
    | BlockQuoteProps[]
}

export type PostItemDetailsProps = {
  author: AuthorProps
  categories: MenuItemProps[]
  content: {
    raw: PostDetailsRawProps
  }
  createdAt: string
  excerpt: string
  featuredImage: gpqImage
  id: string
  slug: string
  title: string
}

type ImageSProps = {
  xs?: number[]
  sm?: number[]
  md?: number[]
  lg?: number[]
  xl?: number[]
}

export type BlockProps = {
  index: string
  enName: string
  name: string
}

export type PhotoContainerProps = {
  mainPhoto?: ImageProps
  photoBG?: ImageProps
  position?: 'default' | 'unStyled' | 'block' | 'background'
  size?: ImageSProps
  shift?: ImageSProps
  className?: string
}
