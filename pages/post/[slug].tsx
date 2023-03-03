import type { NextPage } from 'next'

import MenuLayout from '@/components/layout/MenuLayout'
import { PostItemWrapper } from '@/components/screens/Posts'

import { getPostDetails, getPosts } from '@/shared/api/home.api'
import { PostItemDetailsProps } from '@/shared/types/home'

import Meta from '@/utils/meta/Meta'

type Props = {
  post: PostItemDetailsProps
}

const PostPage: NextPage<Props> = ({ post }) => (
  <Meta title={`${post.title}`}>
    <MenuLayout>
      <PostItemWrapper post={post} />
    </MenuLayout>
  </Meta>
)

export default PostPage

// Fetch data at build time
// @ts-ignore
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)
  return {
    props: {
      post: data,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    // @ts-ignore
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
