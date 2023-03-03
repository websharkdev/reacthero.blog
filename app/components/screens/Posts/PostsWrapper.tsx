import { Grid, styled } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { getAllPosts, getCategoryPost } from '@/shared/api/home.api'
import { PostItemProps } from '@/shared/types/home'

import { PostItem } from './components'

type Props = {
  post?: PostItemProps
}

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(12),
}))

export const PostsWrapper: FC<Props> = (props) => {
  const router = useRouter()
  const [data, setData] = useState<PostItemProps[]>([])

  useEffect(() => {
    if (router.isReady) {
      router.query.slug
        ? getCategoryPost(router.query.slug.toString()).then((res) => setData(res))
        : getAllPosts().then((res) => setData(res.posts))
    }
  }, [router.query.slug])

  return (
    <Root container spacing={10}>
      {data?.map((post: PostItemProps) => (
        <Grid item xs={12} md={6} lg={6} key={post.id}>
          <PostItem data={post} />
        </Grid>
      ))}
    </Root>
  )
}

// Fetch data at build time
// @ts-ignore
export const getStaticProps = async ({ params }) => {
  const data = await getCategoryPost(params.slug)
  return {
    props: {
      post: data,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()
  return {
    // @ts-ignore
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  }
}
