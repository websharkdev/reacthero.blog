import { Grid, styled } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { getCategoryPost } from '@/shared/api/home.api'
import { MenuItem } from '@/shared/types/home'

import { PostWidget } from './PostWidget'
import { PostItem } from './components'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(12),
}))

export const PostsWrapper: FC<Props> = () => {
  const router = useRouter()
  const url: string = router.query.slug ? router.query.slug.toString() : 'react'

  const [categoryData, setCategoryData] = useState<string[]>([])
  useEffect(() => {
    getCategoryPost(url).then((res) => {
      setCategoryData(res)
    })
  }, [])

  return (
    <Root container spacing={12}>
      {categoryData.length > 0 &&
        categoryData.map((post: any) => (
          <Grid item xs={12} md={4} key={post.node.createdAt}>
            <PostItem data={post.node} />
          </Grid>
        ))}
    </Root>
  )
}
