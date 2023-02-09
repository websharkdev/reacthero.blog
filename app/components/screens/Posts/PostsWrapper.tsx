import { Grid, styled } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { getCategories, getPosts, getSimilarPosts } from '@/shared/api/home.api'
import { MenuItem } from '@/shared/types/home'

import { PostWidget } from './PostWidget'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({}))

export const PostsWrapper: FC<Props> = () => {
  const url = useRouter()
  const [categoryData, setCategoryData] = useState<string[]>([])
  useEffect(() => {
    getCategories().then((res) => setCategoryData(res))
  }, [])

  console.log(categoryData)

  return (
    <Root container>
      {/* @ts-ignore */}
      <PostWidget categories={categoryData} slug={url.query.slug} />
      <Grid item>PostsWrapper</Grid>
    </Root>
  )
}
