import { Grid, styled } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { getCategoryPost } from '@/shared/api/home.api'

import { PostItem } from './components'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(12),
}))

export const PostsWrapper: FC<Props> = () => {
  const router = useRouter()

  const [categoryData, setCategoryData] = useState<string[]>([])
  useEffect(() => {
    if (router.isFallback === false && router.query.slug) {
      getCategoryPost(router.query.slug.toString()).then((res) => {
        setCategoryData(res)
      })
    }
  }, [])

  return (
    <Root container spacing={12}>
      {categoryData.length > 0 &&
        categoryData.map((post: any) => (
          <Grid item xs={12} md={6} key={post.node.createdAt}>
            <PostItem data={post.node} />
          </Grid>
        ))}
    </Root>
  )
}
