import { Grid, styled } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { getAllPosts } from '@/shared/api/home.api'

import { PostItem } from './components'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(12),
}))

export const PostsWrapper: FC<Props> = () => {
  const router = useRouter()
  const [data, setData] = useState([])

  useEffect(() => {
    if (router.isFallback === false) {
      getAllPosts().then((res) => res && setData(res.posts))
    }
    console.log(data)
  }, [])

  return (
    <Root container spacing={10}>
      {data.length > 0 &&
        data.map((post: any) => (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <PostItem data={post} />
          </Grid>
        ))}
    </Root>
  )
}
