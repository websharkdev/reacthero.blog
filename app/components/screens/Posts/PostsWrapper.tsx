import { Grid, styled } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { getCategoryPost, getPostByHashtag, getPostDetails, getPosts } from '@/shared/api/home.api'
import { MenuItem } from '@/shared/types/home'

import { PostWidget } from './PostWidget'
import { PostItem } from './components'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(12),
}))

export const PostsWrapper: FC<Props> = () => {
  const router = useRouter()

  const [categoryData, setCategoryData] = useState<string[]>([])
  const [tag, setTag] = useState<string>('')
  useEffect(() => {
    if (router.isFallback === false && router.query.slug) {
      getCategoryPost(router.query.slug.toString()).then((res) => {
        setCategoryData(res)
      })

      if (tag !== '') {
      }
    }
  }, [])

  return (
    <Root container spacing={12}>
      {categoryData.length > 0 &&
        categoryData.map((post: any) => (
          <Grid item xs={12} md={6} key={post.node.createdAt}>
            <PostItem data={post.node} setTag={setTag} tag={tag} />
          </Grid>
        ))}
    </Root>
  )
}
