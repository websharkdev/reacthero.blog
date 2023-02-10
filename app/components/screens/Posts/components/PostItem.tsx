import { Box, Button, Chip, Grid, IconButton, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import { LikeActiveIcon, LikeOnActiveIcon } from '@/assets/icons/ui'

type Props = {
  data: any
}

const Root = styled(Grid)(({ theme }) => ({
  width: '100%',
  background: '#fff',
  padding: theme.spacing(4),
  position: 'relative',
}))

export const PostItem: FC<Props> = ({ data }) => {
  const [like, setLike] = useState<boolean>(false)

  const handleLike = () => {
    console.log(data.id)

    setLike(!like)
  }
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        className="post-image--container"
        sx={{
          position: 'relative',
          right: '-50px',
          top: '-30px',
          '&::before': {
            content: '""',
            width: '100%',
            height: '90%',
            background: '#fff',
            position: 'absolute',
            left: -50,
            bottom: -50,
            zIndex: -1,
          },
        }}
      >
        <img src={data.featuredImage.url} alt={data.slug} width="100%" />
      </Box>
      <Root container rowSpacing={4}>
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0 !important' }}
        >
          <Typography variant="h6">{data.title}</Typography>
          <Chip label={data.state} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ minHeight: 86 }}>
            {data.excerpt.length > 175 ? `${data.excerpt.slice(0, 175)}...` : data.excerpt}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button variant="text" href={`post/${data.slug}`}>
            риад море.
          </Button>
          <IconButton
            onClick={handleLike}
            sx={{
              ':hover svg path': {
                fill: '#ff0000',
              },
            }}
          >
            {like ? (
              <Image src={LikeActiveIcon} alt="active-like" width={24} height={24} />
            ) : (
              <Image src={LikeOnActiveIcon} alt="onactive-like" width={24} height={24} />
            )}
          </IconButton>
        </Grid>
      </Root>
    </Box>
  )
}
