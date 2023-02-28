import { Box, Button, Grid, styled, useMediaQuery } from '@mui/material'
import { FC, useEffect, useState } from 'react'
// Import Swiper styles
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SectionHeader } from '@/components/layout/SectionHeader'
import { PostItem } from '@/components/screens/Posts'

import { useWidth } from '@/shared/hooks'

type Props = {
  data: any
}

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(12),
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(8),
  },
  [theme.breakpoints.down('md')]: {
    padding: 0,
  },
}))

export const HomePosts: FC<Props> = ({ data }) => {
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
        setSlidesSpacing(0)
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
        <SectionHeader index="02" name="Последнее" enName="lastes" />
      </Grid>

      <Grid item xs={12}>
        <Swiper style={{ overflow: 'visible' }} slidesPerView={slidesToShow} spaceBetween={slidesSpacing}>
          {data.length > 0 &&
            data.map((post: any) => (
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
