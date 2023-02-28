import { Box, Divider, Grid, Link, Typography, styled } from '@mui/material'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'

import { QRCode } from '@/components/layout/qrcode'

import { buymeacoffeImage } from '@/assets/icons/photos'
import { BuyMeACoffeQR } from '@/assets/icons/photos/qr-codes'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  background: '#292836',
  minHeight: 600,
  '& .coffe-container': {
    position: 'absolute',
    right: 65,
    bottom: 150,
    width: 400,
    height: '100%',
    transform: 'rotate(-30deg)',
    [theme.breakpoints.up('lg')]: {
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      top: '50%',
      width: 707,
      height: 800,
      transform: 'translate(-50%, -50%)',
    },
    [theme.breakpoints.down('sm')]: {
      width: 200,
      bottom: 60,
    },
  },
  '& .coffe-content--text': {
    width: 'calc(50% - 64px)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}))

export const CoffeContent: FC<Props> = (props) => {
  return (
    <Root container>
      <Grid item xs={12} lg={8}>
        <Grid
          container
          wrap="nowrap"
          sx={{ background: '#C1E27D', px: { md: 6.5, xs: 4 }, py: 8 }}
          direction="column"
          justifyContent="space-between"
          height="100%"
        >
          <Grid item>
            <Box sx={{ display: 'flex', columnGap: 2 }}>
              <QRCode link="https://www.buymeacoffee.com/webshark" children={BuyMeACoffeQR} />
              <Typography variant="body2" sx={{ width: 200, display: { xs: 'none', md: 'flex' } }}>
                доставай свой телефон, сканируй эту штуку.
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Typography variant="h1" component="div">
              этт самое...
            </Typography>
            <Box
              sx={{
                mt: 5,
                display: 'flex',
                flexWrap: 'wrap',
                rowGap: 4,
                columnGap: 12,
                width: { lg: '80%', xs: '100%' },
              }}
            >
              <Typography className="coffe-content--text" variant="body2">
                автор станет самым добрым, когда его угостят кофейком…
              </Typography>
              <Typography className="coffe-content--text" variant="body2">
                да в принципе и не только кофейком
              </Typography>
              <Divider sx={{ width: '100%' }} />
              <Link
                href="https://www.buymeacoffee.com/webshark"
                sx={{
                  fontWeight: 700,
                  '&:hover': { color: '#242424' },
                  '&::before': {
                    background: '#242424',
                  },
                }}
                className="coffe-content--text"
              >
                ссылочка чтобы отправить шекелей на кофе
              </Link>

              <Typography className="coffe-content--text" variant="body2">
                и кстати qr код тоже туда же перекинет.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={4} sx={{ position: 'relative', order: { xs: -5, lg: 0 } }}>
        <Box className="coffe-container">
          <Image src={buymeacoffeImage} alt="buy-me-a-coffe-image" />
        </Box>
      </Grid>
    </Root>
  )
}
