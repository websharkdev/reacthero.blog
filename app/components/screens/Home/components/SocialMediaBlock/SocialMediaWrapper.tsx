import { Box, Grid, styled } from '@mui/material'
import Image from 'next/dist/client/image'
import React, { FC, useEffect, useState } from 'react'

import { SectionHeader } from '@/components/layout/SectionHeader'

import { SocialMediaBG } from '@/assets/icons/backgrounds'
import { Star } from '@/assets/icons/photos'

import { SocialMediaCards } from '../../data'

import { SocialMediaCard } from './components'
import { SocialMediaPhone } from './components/SocialMediaPhone'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(8),
  position: 'relative',
  alignItems: 'flex-end',
  height: 1200,
  '& .sm-image--star': {
    position: 'absolute',
    right: '-100px',
    zIndex: 3,
    top: '-100px',
  },
}))

export const SocialMediaWrapper: FC<Props> = (props) => {
  return (
    <Root container rowSpacing={6}>
      <Grid item xs={12}>
        <SectionHeader index="03" enName="social media" name="социал медиа" />
      </Grid>
      <Grid item xs={5}>
        <SocialMediaPhone />
      </Grid>
      <Grid item xs={7}>
        <Grid container sx={{ height: 'calc(225px * 2)' }} justifyContent="flex-end" wrap="wrap" direction="column">
          {SocialMediaCards.map((card) => (
            <Grid item key={card.id} width="50%">
              <SocialMediaCard data={card} />
            </Grid>
          ))}
        </Grid>
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
