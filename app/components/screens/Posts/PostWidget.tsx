import { Grid, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import { getRecentPosts, getSimilarPosts } from '@/shared/api/home.api'

import { PostItem } from './components'

type Props = {
  slug: string
  categories: string[]
}

const Root = styled(Grid)(({ theme }) => ({}))

export const PostWidget: FC<Props> = ({ slug, categories }) => {
  const [relatedPost, setRelatedPost] = useState([])

  useEffect(() => {
    // setRelatedPost(res)

    console.log(slug, categories)

    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPost(result)
      })
    } else {
      getRecentPosts().then((res: any) => setRelatedPost(res))
    }
  }, [])

  return (
    <Root container>
      {relatedPost.map((post: any) => (
        <Grid item xs={4} key={post.id}>
          <PostItem data={post} />
        </Grid>
      ))}
    </Root>
  )
}
