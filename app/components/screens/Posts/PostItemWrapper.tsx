import { Box, Divider, Grid, Rating, Typography, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import { PostItemDetailsProps } from '@/shared/types/home'

import { PostAutor, PostLinks } from './components'
import { PostContent, PostWidget } from './index'

type Props = {
  post: PostItemDetailsProps
}

const Root = styled(Grid)(({ theme }) => ({
  width: 'calc(100% - 178px)',
  padding: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
    width: 'calc(100% - 32px)',
  },
  margin: '0 auto',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '#D5E4F2',
  height: 'max-content',
  marginBottom: theme.spacing(12),
  '& .post_item-details--image': {
    width: '100%',
  },
}))

export const PostItemWrapper: FC<Props> = ({ post }) => {
  const [currentCategory, setCurrentCategory] = useState<string[]>([])
  const [value, setValue] = useState<number | null>(4.5)
  useEffect(() => {
    const arr: string[] = []
    post.categories.map((category) => {
      arr.push(category.slug)
    })

    arr.length > 0 ? setCurrentCategory(arr) : null
  }, [])

  return (
    <Root container rowSpacing={4}>
      <Grid item xs={12} sx={{ pt: '0 !important' }}>
        <img
          src={post.featuredImage.url}
          alt={`${post.title.split(' ').join('_')}--image`}
          className="post_item-details--image"
        />
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h2" sx={{ mb: 4 }}>
            {post.title}
          </Typography>
          <Box
            sx={{
              mb: 4,
              gap: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Typography variant="body2">
              ~{Math.ceil(JSON.stringify(post.content.raw).trim().split(/\s+/).length / 155)} min. read
            </Typography>
            <PostLinks />
          </Box>
        </Box>

        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Grid container rowSpacing={2} sx={{ height: 'max-content' }}>
          {post.content.raw.children.map((content: any, index: number) => (
            <Grid item xs={12} key={`${post.id}_${index}`}>
              <PostContent data={content} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container rowSpacing={6} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} children={<Divider />} />
          <Grid item xs="auto" children={<PostAutor data={post} />} />
          <Grid item xs="auto">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
              getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={0.5}
            />

            <PostLinks />
          </Grid>
          <Grid item xs={12} children={<Divider />} />
        </Grid>
      </Grid>

      <Grid item xs={12} mt={6} className="post-widget--wrapper">
        <Box sx={{ width: '100% !important', overflow: 'hidden', maxWidth: { md: 'auto', xs: 'calc(100vw - 32px)' } }}>
          <PostWidget categories={currentCategory} slug={currentCategory[0]} />
        </Box>
      </Grid>
    </Root>
  )
}
