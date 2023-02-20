import { Box, Grid, styled } from '@mui/material'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'

import { SectionHeader } from '@/components/layout/SectionHeader'

import { HeaderBG } from '@/assets/icons/backgrounds'
import { Star } from '@/assets/icons/photos'

import { IntroCards } from '../data'

import { IntroCard } from './IntroCard'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(8),
  position: 'relative',
  '& .intro-wrapper-cards': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
    height: '100%',
    minHeight: 800,
  },
  '& .intro-image--star': {
    position: 'absolute',
    right: '-100px',
    zIndex: 3,
    top: '-100px',
  },
}))

export const IntroWrapper: FC<Props> = (props) => {
  return (
    <Root container>
      <Grid item xs={12}>
        <SectionHeader index="01" name="Знакомство" enName="intro" />
      </Grid>

      <Grid item xs={7} className="intro-wrapper-cards">
        <Grid container wrap="wrap" direction="column" justifyContent="flex-end" sx={{ height: 'calc(225px * 2)' }}>
          {IntroCards.map((card: any) => (
            <Grid item key={card.id} sx={{ boxShadow: card.featured ? '0px 0px 15px #E3E3E3' : '', width: '50%' }}>
              <IntroCard data={card} />
            </Grid>
          ))}
        </Grid>
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
