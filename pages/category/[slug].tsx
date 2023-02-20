import type { NextPage } from 'next'

import MenuLayout from '@/components/layout/MenuLayout'
import { PostsWrapper } from '@/components/screens/Posts'

import { getCategories, getCategoryPost } from '@/shared/api/home.api'

import Meta from '@/utils/meta/Meta'

const PostPage: NextPage = () => (
  <Meta title="Posts Page">
    <MenuLayout>
      <PostsWrapper />
    </MenuLayout>
  </Meta>
)

export default PostPage
// Fetch data at build time
export async function getStaticProps({ params }: any) {
  const posts = await getCategoryPost(params.slug)

  return {
    props: { posts },
  }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(({ slug }: any) => ({ params: { slug } })),
    fallback: true,
  }
}
