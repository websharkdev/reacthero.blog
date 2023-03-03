import type { NextPage } from 'next'

import MenuLayout from '@/components/layout/MenuLayout'
import { PostsWrapper } from '@/components/screens/Posts'

import { getAllPosts, getCategories, getCategoryPost, getPostDetails, getPosts } from '@/shared/api/home.api'

import Meta from '@/utils/meta/Meta'

const PostPage: NextPage = ({ post }: any) => (
  <Meta title="Posts Page">
    <MenuLayout>
      <PostsWrapper post={post} />
    </MenuLayout>
  </Meta>
)

export default PostPage

// Fetch data at build time
// export async function getStaticProps({ params }: any) {
//   const data = await getCategoryPost(params.slug)
//   return {
//     props: {
//       post: data.posts,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const posts = await getPosts()
//   return {
//     paths: posts.map(({ node: { slug } }: any) => ({ params: { slug } })),
//     fallback: true,
//   }
// }
