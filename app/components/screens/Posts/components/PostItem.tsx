import { Box, Button, Chip, Divider, Grid, IconButton, Typography, styled, useMediaQuery } from '@mui/material'
import moment from 'moment'
import Image from 'next/image'
import { FC, useState } from 'react'

import { LikeActiveIcon, LikeOnActiveIcon } from '@/assets/icons/ui'

import { PostCopyLink } from './PostLinks'

type Props = {
  data: any
  simplified?: boolean
}

const Root = styled(Grid)(({ theme }) => ({
  width: '100%',
  background: '#fff',
  padding: theme.spacing(4),
  height: 'max-content',
  position: 'relative',
  zIndex: 10,
  '& .post-item--image': {
    width: '100%',
    // [theme.breakpoints.down('md')]: {
    //   padding: 20,
    // },
  },
}))

export const PostItem: FC<Props> = ({ data, simplified }) => {
  const [like, setLike] = useState<boolean>(false)

  const handleLike = () => {
    setLike(!like)
  }
  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('md')
  )
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        className="post-image--container"
        sx={{
          position: 'relative',
          right: { xs: 0, md: simplified ? 0 : '-50px' },
          top: { xs: 0, md: simplified ? 0 : '-30px' },
          padding: { xs: 2, md: simplified ? 2 : 0 },
          background: 'transparent',
          '&::before': {
            content: '""',
            width: '100%',
            display: { xs: 'none', md: !simplified ? 'flex' : 'none' },
            height: '90%',
            background: '#fff',
            position: 'absolute',
            left: -50,
            bottom: -50,
            zIndex: 2,
          },
        }}
      >
        <img
          src={data.featuredImage.url}
          alt={data.slug}
          className="post-item--image"
          style={{
            width: '100%',
            position: 'relative',
            zIndex: 11,
          }}
        />
        {tablet && data.hashtag && data.hashtag.length > 0 && (
          <Box
            sx={{
              position: 'absolute',
              right: 25,
              bottom: 25,
              zIndex: 15,
            }}
          >
            <Chip sx={{ width: 'max-content' }} size="small" label={`#${data.hashtag[data.hashtag.length - 1]?.tag}`} />
          </Box>
        )}
      </Box>
      <Root container rowSpacing={4}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: { xs: 'auto', md: '0 !important' },
            flexDirection: { sm: 'column', md: 'row' },
          }}
        >
          <Typography variant="h6">{data.title}</Typography>
          {!tablet && data.hashtag && data.hashtag.length > 0 && (
            <Chip sx={{ width: 'max-content' }} label={`#${data.hashtag[data.hashtag.length - 1]?.tag}`} />
          )}
        </Grid>
        <Grid item xs={12} children={<Divider />} />
        <Grid item xs={12}>
          <Typography variant="body2" sx={{ minHeight: 156 }}>
            {data.excerpt.length > 175 ? `${data.excerpt.slice(0, 175)}...` : data.excerpt}
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', columnGap: 1 }}>
            <Typography variant="body2" fontSize={12}>
              {moment(data.createdAt).fromNow()}
            </Typography>
            <Typography variant="body2" fontSize={12}>
              • {Math.ceil(JSON.stringify(data.content.raw).trim().split(/\s+/).length / 155)} min. read
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Button variant="text" size={tablet ? 'small' : 'medium'} href={`/post/${data.slug}`}>
            риад море.
          </Button>

          <Box
            sx={{
              display: 'flex',
              columnGap: 2,
              alignItems: 'center',
            }}
          >
            <PostCopyLink path={`/post/${data.slug}`} />
            <IconButton onClick={handleLike}>
              {like ? (
                <Image src={LikeActiveIcon} alt="active-like" height={24} width={30} />
              ) : (
                <Image src={LikeOnActiveIcon} alt="onactive-like" height={24} width={30} />
              )}
            </IconButton>
          </Box>
        </Grid>
      </Root>
    </Box>
  )
}
