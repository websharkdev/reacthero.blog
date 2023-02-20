import { Grid, Typography, styled } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { getCategories } from '@/shared/api/home.api'
import { MenuItem, PostItemDetailsProps } from '@/shared/types/home'

import { PostContent, PostWidget } from './index'

type Props = {
  post: PostItemDetailsProps
}

const Root = styled(Grid)(({ theme }) => ({
  width: 'calc(100% - 178px)',
  margin: '0 auto',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#D5E4F2',
  padding: theme.spacing(8),
  height: 'max-content',
  marginBottom: theme.spacing(12),
  '& .post_item-details--image': {
    width: '100%',
  },
}))

export const PostItemWrapper: FC<Props> = ({ post }) => {
  const url = useRouter()
  const [categoryData, setCategoryData] = useState<MenuItem[]>([])
  const [currentCategory, setCurrentCategory] = useState<string[]>([])
  useEffect(() => {
    getCategories().then((res) => setCategoryData(res))
    post.categories.forEach((category) => setCurrentCategory([...currentCategory, category.slug]))
  }, [])
  return (
    <Root container rowSpacing={4}>
      <Grid item xs={12}>
        <img
          src={post.featuredImage.url}
          alt={`${post.title.split(' ').join('_')}--image`}
          className="post_item-details--image"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">{post.title}</Typography>
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
      {/* {post.categories.map((category) => {
        console.log(category.slug)
        
      })} */}

      {/* <PostWidget categories={currentCategory} slug={url.query.slug} /> */}
    </Root>
  )
}
