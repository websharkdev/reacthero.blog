import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import { PostsWrapper } from '@/components/screens/Posts'

import Meta from '@/utils/meta/Meta'

const PostPage: NextPage = () => (
  <Meta title="Posts Page">
    <Layout>
      <PostsWrapper />
    </Layout>
  </Meta>
)

export default PostPage
