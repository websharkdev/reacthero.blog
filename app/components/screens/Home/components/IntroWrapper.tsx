import { Box, Grid, styled, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'
// Import Swiper styles
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SectionHeader } from '@/components/layout/SectionHeader'

import { BlockProps, CardsProps } from '@/shared/types/home'

import { HeaderBG } from '@/assets/icons/backgrounds'
import { Star } from '@/assets/icons/photos'

import { IntroCards } from '../data'

import { IntroCard } from './IntroCard'

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(8),
  [theme.breakpoints.down('xl')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    padding: '24px 20px',
  },
  position: 'relative',
  '& .intro-wrapper-cards': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
    height: '100%',
    minHeight: 800,
    [theme.breakpoints.down('md')]: {
      minHeight: 500,
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: 400,
    },
  },
  '& .intro-image--star': {
    position: 'absolute',
    right: '-100px',
    zIndex: 3,
    top: '-100px',
  },
}))

export const IntroWrapper: FC<BlockProps> = ({ index, enName, name }) => {
  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('sm')
  )

  return (
    <Root container>
      <Grid item xs={12}>
        <SectionHeader index={index} enName={enName} name={name} />
      </Grid>

      <Grid item xs={12} md={10} xl={8} className="intro-wrapper-cards">
        {tablet ? (
          <Swiper>
            {IntroCards.slice(1).map((card: CardsProps) => (
              <SwiperSlide key={card.id}>
                <IntroCard data={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Grid container alignItems="center">
            {IntroCards.map((card: CardsProps) => (
              <Grid item xs={0 === +card.id ? 12 : 6} md={6} flex={1} key={card.id}>
                <IntroCard data={card} />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>

      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translate(-25%, -25%)',
          width: '100%',
          zIndex: -1,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Box className="intro-image--star">
          <Image src={Star} alt={'intro-image--star'} />
        </Box>
        <Image src={HeaderBG} alt={'intro-image--bg'} width="1340" height="629" />
      </Box>
    </Root>
  )
}
