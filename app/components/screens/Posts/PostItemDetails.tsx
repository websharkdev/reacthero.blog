import { Box, Grid, Link as MuiLink, Typography, styled } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import { getCategories } from '@/shared/api/home.api'
import { MenuItem, PostItemDetailsProps } from '@/shared/types/home'

import { PostContent, PostWidget } from './index'

type Props = {
  data: PostItemDetailsProps
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
  '& .post_item-details--image': {
    width: '100%',
  },
}))

export const PostItemDetails: FC<Props> = ({ data }) => {
  const url = useRouter()
  const [categoryData, setCategoryData] = useState<MenuItem[]>([])
  useEffect(() => {
    getCategories().then((res) => setCategoryData(res))
  }, [])

  return (
    <Root container>
      <Grid item xs={12}>
        <img
          src={data.featuredImage.url}
          alt={`${data.title.split(' ').join('_')}--image`}
          className="post_item-details--image"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2">{data.title}</Typography>
      </Grid>
      <Grid item xs={12}>
        {data.content.raw.children.map((content: any, index: number) => (
          <PostContent data={content} key={`${data.id}_${index}`} />
        ))}
      </Grid>
      {/* @ts-ignore */}
      <PostWidget categories={categoryData} slug={url.query.slug} />
    </Root>
  )
}
