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
}))

export const CoffeContent: FC<Props> = (props) => {
  return (
    <Root container>
      <Grid item xs={8}>
        <Grid
          container
          wrap="nowrap"
          sx={{ background: '#C1E27D', px: 6.5, py: 8 }}
          direction="column"
          justifyContent="space-between"
          height="100%"
        >
          <Grid item>
            <Box sx={{ display: 'flex', columnGap: 2 }}>
              <QRCode link="https://www.buymeacoffee.com/webshark" children={BuyMeACoffeQR} />
              <Typography variant="body2" fontSize={14} sx={{ width: 200 }}>
                доставай свой телефон, сканируй эту штуку.
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <Typography variant="h2">этт самое...</Typography>
            <Box sx={{ mt: 5, display: 'flex', flexWrap: 'wrap', rowGap: 4, columnGap: 12, width: '80%' }}>
              <Typography width="calc(50% - 64px)" variant="body2">
                автор станет самым добрым, когда его угостят кофейком…
              </Typography>
              <Typography width="calc(50% - 64px)" variant="body2">
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
                width="calc(50% - 64px)"
              >
                ссылочка чтобы отправить шекелей на кофе
              </Link>

              <Typography width="calc(50% - 64px)" variant="body2">
                и кстати qr код тоже туда же перекинет.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 707,
            height: 800,
          }}
        >
          <Image src={buymeacoffeImage} alt="buy-me-a-coffe-image" width={707} height={800} />
        </Box>
      </Grid>
    </Root>
  )
}
