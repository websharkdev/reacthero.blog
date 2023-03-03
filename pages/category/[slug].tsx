import type { NextPage } from 'next'

import MenuLayout from '@/components/layout/MenuLayout'
import { PostsWrapper } from '@/components/screens/Posts'

import Meta from '@/utils/meta/Meta'

const PostPage: NextPage = () => (
  <Meta title="Posts Page">
    <MenuLayout>
      <PostsWrapper />
    </MenuLayout>
  </Meta>
)

export default PostPage
