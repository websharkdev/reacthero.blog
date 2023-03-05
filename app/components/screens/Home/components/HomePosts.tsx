import { Box, Button, Grid, styled, useMediaQuery } from '@mui/material'
import { FC, useEffect, useState } from 'react'
// Import Swiper styles
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SectionHeader } from '@/components/layout/SectionHeader'
import { PostItem } from '@/components/screens/Posts'

import { useWidth } from '@/shared/hooks'
import { BlockProps, PostItemProps } from '@/shared/types/home'

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(8),
  overflow: 'hidden',

  [theme.breakpoints.down('xl')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    padding: '24px 20px',
  },
}))

interface Props extends BlockProps {
  data: PostItemProps[]
}

export const HomePosts: FC<Props> = ({ data, index, enName, name }) => {
  const currentWidth = useWidth()

  const [slidesToShow, setSlidesToShow] = useState(0)
  const [slidesSpacing, setSlidesSpacing] = useState(0)
  useEffect(() => {
    switch (currentWidth) {
      case 'xl':
        setSlidesToShow(3)
        setSlidesSpacing(90)
        break
      case 'lg':
        setSlidesToShow(2)
        setSlidesSpacing(90)
        break
      case 'md':
        setSlidesToShow(2)
        setSlidesSpacing(70)
        break
      case 'sm':
        setSlidesToShow(2)
        setSlidesSpacing(40)
        break

      default:
        setSlidesToShow(1)
        setSlidesSpacing(40)
        break
    }
  }, [currentWidth])

  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('lg')
  )

  return (
    <Root container columnSpacing={12} alignItems="center" rowSpacing={10}>
      <Grid item xs={12}>
        <SectionHeader index={index} enName={enName} name={name} />
      </Grid>

      <Grid item xs={12}>
        <Swiper style={{ overflow: 'visible' }} slidesPerView={slidesToShow} spaceBetween={slidesSpacing}>
          {data.length > 0 &&
            data.map((post: PostItemProps) => (
              <SwiperSlide key={post.createdAt}>
                <PostItem data={post} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Grid>
      <Grid item xs={12}>
        <Button href="/posts">все посты</Button>
      </Grid>
    </Root>
  )
}
