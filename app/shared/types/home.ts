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

export type LinkProps = {
  id: string
  href: string
  name: string
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
  'body1' = 16,
}

export type PostDetailsRawChildrenTextProps = {
  text: string
  bold?: boolean
  underline?: boolean
  italic?: boolean
  code?: boolean
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
  height: number
  mimeType: string
  src: string
  title: string
  type: rawTypeProps
  width: number
}

export type PostDetailsRawChildrenProps = {
  type: rawTypeProps
  children: PostDetailsRawChildrenTextProps[] | PostDetailsRawChildrenTextProps
  className?: string
  height?: number
  url?: string
  width?: number
  handle?: string
  mimeType?: string
  src?: string
  title?: string
}

export type PostDetailsRawProps = {
  children: PostDetailsRawChildrenProps[] | PostDetailsRawChildrenImageProps[] | PostDetailsRawChildrenLinkProps[]
}

export type PostHashtagProps = {
  id: string
  tag: string
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
  hashtag: PostHashtagProps[]
}

export type PostItemProps = Omit<PostItemDetailsProps, 'categories' | 'author'>

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

export type PhoneNotificationProps = {
  id: string
  ago: string | number
  title: string
  text: string
}

export type CardsLinksProps = Omit<SocialMediaProps, 'icon'>

export type CardsProps = {
  id: string
  title: string
  text?: string
  links?: CardsLinksProps[]
  featured: boolean
}

type Icon = {
  fileName: string
  url: string
}

export type SocialMediaProps = {
  icon: Icon
  id: string
  link: string
  title: string
}

export type PhotoContainerProps = {
  mainPhoto?: ImageProps
  photoBG?: ImageProps
  position?: 'default' | 'unStyled' | 'block' | 'background'
  size?: ImageSProps
  shift?: ImageSProps
  className?: string
}

export type HelpAidProps = {
  id: number
  image: string
  link: LinkProps
  read_more: LinkProps[]
  text: string
  title: string
}

export type HelpUkraineProps = {
  aids: HelpAidProps[]
  section: string
  text: string
}
