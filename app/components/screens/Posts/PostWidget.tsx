import { Grid, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import { getPostDetails, getPosts, getRecentPosts, getSimilarPosts } from '@/shared/api/home.api'

import { PostItem } from './components'

type Props = {
  slug: string
  categories: string[]
}

const Root = styled(Grid)(({ theme }) => ({}))

export const PostWidget: FC<Props> = ({ slug, categories }) => {
  const [relatedPost, setRelatedPost] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPost(result)
      })
    } else {
      getRecentPosts().then((res: any) => setRelatedPost(res))
    }
  }, [])

  return (
    <Root container spacing={12}>
      {relatedPost.map((post: any) => (
        <Grid item xs={6} key={post.id}>
          <PostItem data={post} />
        </Grid>
      ))}
    </Root>
  )
}

// Fetch data at build time
export async function getStaticProps({ params }: any) {
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
    paths: posts.map(({ node: { slug } }: any) => ({ params: { slug } })),
    fallback: true,
  }
}
