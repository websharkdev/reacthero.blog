import { Box, Button, Divider, Grid, Typography, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import { SectionHeader } from '@/components/layout/SectionHeader'
import { PostItem } from '@/components/screens/Posts'

type Props = {
  data: any
}

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(12),
}))

export const HomePosts: FC<Props> = ({ data }) => {
  return (
    <Root container columnSpacing={12} alignItems="center" rowSpacing={10}>
      <Grid item xs={12}>
        <SectionHeader index="02" name="Последнее" enName="lastes" />
      </Grid>
      {data.length > 0 &&
        data.map((post: any) => (
          <Grid item xs={12} md={4} key={post.createdAt}>
            <PostItem data={post} />
          </Grid>
        ))}
      <Grid item xs={12}>
        <Button href="/posts">все посты</Button>
      </Grid>
    </Root>
  )
}
