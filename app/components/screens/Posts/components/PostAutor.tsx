import { Grid, Typography, styled } from '@mui/material'
import moment from 'moment'
import { FC } from 'react'

import { PostItemDetailsProps } from '@/shared/types/home'

type Props = { data: PostItemDetailsProps }

const Root = styled(Grid)(({ theme }) => ({}))

export const PostAutor: FC<Props> = ({ data }) => {
  return (
    <Root container columnGap={2}>
      <Grid item>
        <img
          src={data.author.photo.url}
          alt={`author-${data.author.name}-image`}
          style={{ width: 64, borderRadius: '50%' }}
        />
      </Grid>
      <Grid item>
        <Typography variant="h6" mb={1}>
          {data.author.name}
        </Typography>
        <Typography variant="body2" fontSize={12}>
          {moment(data.createdAt).fromNow()}
          <span> • </span>
          {Math.ceil(JSON.stringify(data.content.raw).trim().split(/\s+/).length / 155)} min. read
        </Typography>
      </Grid>
    </Root>
  )
}
