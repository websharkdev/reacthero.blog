import { Box, Grid, styled, useMediaQuery } from '@mui/material'
import Image from 'next/dist/client/image'
import { FC } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SectionHeader } from '@/components/layout/SectionHeader'

import { BlockProps, CardsProps } from '@/shared/types/home'

import { SocialMediaBG } from '@/assets/icons/backgrounds'
import { Star } from '@/assets/icons/photos'

import { SocialMediaCards } from '../../data'

import { SocialMediaCard, SocialMediaPhone } from './components'

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(8),
  position: 'relative',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  height: 'max-content',
  [theme.breakpoints.down('md')]: {
    padding: 0,
    alignItems: 'flex-start',
    height: 600,
  },
  '& .sm-image--star': {
    position: 'absolute',
    right: '-100px',
    zIndex: 3,
    top: '-100px',
  },
}))

export const SocialMediaWrapper: FC<BlockProps> = ({ index, enName, name }) => {
  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('md')
  )
  const phone = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('sm')
  )
  return (
    <Root container rowSpacing={tablet ? 4 : 6} columnSpacing={6}>
      <Grid item xs={12}>
        <SectionHeader index={index} enName={enName} name={name} />
      </Grid>
      <Grid item md={4} sx={{ pl: '0 !important' }}>
        {!tablet && <SocialMediaPhone />}
      </Grid>
      <Grid item xs={12} md={6} lg={8} flex={1}>
        {phone ? (
          <Swiper>
            {SocialMediaCards.slice(1).map((card: CardsProps) => (
              <SwiperSlide key={card.id}>
                <SocialMediaCard data={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Grid container>
            {SocialMediaCards.map((card: CardsProps) => (
              <Grid item key={card.id} xs={0 === +card.id ? 12 : 6} md={12} lg={6} flex={1} sx={{ overflow: 'hidden' }}>
                <SocialMediaCard data={card} />
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
          transform: 'translate(-25%, -30%)',
          width: '100%',
          zIndex: -1,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Box className="sm-image--star">
          <Image src={Star} alt="sm-image--star" />
        </Box>
        <Image src={SocialMediaBG} alt="social-media--bg" width={1225} height={748} />
      </Box>
    </Root>
  )
}
