import { Box, Button, Divider, Grid, Typography, styled, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import { QRCode } from '@/components/layout/qrcode'

import { useWidth } from '@/shared/hooks'

import { LaptopBG } from '@/assets/icons/backgrounds'
import { HeaderQRCode } from '@/assets/icons/photos'

import { HeaderLaptop } from './HomeLaptop'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: `0 0 ${theme.spacing(15)} ${theme.spacing(12)}`,
  [theme.breakpoints.down('xl')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    padding: '24px 20px',
  },
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  position: 'relative',
  overflow: 'hidden',
  flexWrap: 'nowrap',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    padding: theme.spacing(4),
  },

  '& .home-header--title': {
    fontSize: 48,
    [theme.breakpoints.down('xl')]: {
      fontSize: 32,
    },
    [theme.breakpoints.down('lg')]: {
      fontSize: 21,
    },
  },
  '& .home-header--subtext': {
    fontSize: 14,
    lineHeight: '16px',
    [theme.breakpoints.down(1700)]: {
      fontSize: 12,
      letterSpacing: '0.8px',
    },
  },
}))

export const HomeHeader: FC<Props> = (props) => {
  const currentWidth = useWidth()
  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('md')
  )
  return (
    <Root container rowSpacing={4}>
      <Grid item xs={12} sm={7}>
        <Typography variant="h4" className="home-header--title" mb={3}>
          первый блог о реакте (на реакте), который написанный человеческим языком.
        </Typography>

        <Divider sx={{ width: 'calc(100% - 50px)' }} />

        <Grid
          container
          mt={{ xs: 0, sm: 4 }}
          columnSpacing={6}
          rowSpacing={4}
          sx={{ flexWrap: { xs: 'wrap', xl: 'nowrap' } }}
        >
          <Grid item xs={4} lg={3}>
            <Button variant="contained" href="/posts" size={tablet ? 'small' : 'large'}>
              читать.
            </Button>
          </Grid>
          {currentWidth !== 'xs' && currentWidth !== 'sm' && (
            <Grid item lg={1}>
              <QRCode link="#" children={HeaderQRCode} styles={{ maxWidth: 50, maxHeight: 50 }} />
            </Grid>
          )}
          {currentWidth !== 'xs' && currentWidth !== 'sm' && (
            <Grid item lg={4}>
              <Typography variant="body2" className="home-header--subtext">
                нету смысла сканировать этот qr-код. там ничего интересного не написано
              </Typography>
            </Grid>
          )}
          <Grid item xs={12} sm={8} lg={4} sx={{ order: { xs: -5, sm: 0 } }}>
            <Typography variant="body2" className="home-header--subtext">
              ну и да, возможно не первый, ведь я не знаю что у вас там, но давайте пропустим этот момент.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4} md={4} sx={{ position: 'relative', order: { xs: -5, sm: 0 } }}>
        {currentWidth === 'xs' ? <Image src={LaptopBG} alt="laptop_bg" /> : <HeaderLaptop />}
      </Grid>
    </Root>
  )
}
