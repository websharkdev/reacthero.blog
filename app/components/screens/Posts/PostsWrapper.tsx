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
  const url = useRouter()
  const [categoryData, setCategoryData] = useState<string[]>([])
  useEffect(() => {
    getCategoryPost(url!.query!.slug!.toString()).then((res) => {
      setCategoryData(res)
      console.log(res)
    })
  }, [])

  console.log(url.query.slug, categoryData)

  return (
    <Root container spacing={12}>
      {/* @ts-ignore */}
      {/* <PostWidget categories={categoryData.map((category) => category.slug)} slug={url.query.slug} /> */}
      {/* {categoryData} */}
      {categoryData.length > 0 &&
        categoryData.map((post: any) => (
          <Grid item xs={12} md={4} key={post.node.createdAt}>
            <PostItem data={post.node} />
          </Grid>
        ))}
    </Root>
  )
}
