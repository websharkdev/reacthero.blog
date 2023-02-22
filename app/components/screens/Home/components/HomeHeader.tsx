import { Button, Divider, Grid, Typography, styled } from '@mui/material'
import { FC } from 'react'

import { QRCode } from '@/components/layout/qrcode'

import { useWidth } from '@/shared/hooks'

import { HeaderQRCode } from '@/assets/icons/photos'

import { HeaderLaptop } from './HomeLaptop'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: `0 0 ${theme.spacing(15)} ${theme.spacing(12)}`,
  alignItems: 'flex-end',
  minHeight: 'max-content',
  position: 'relative',
  overflow: 'hidden',
  flexWrap: 'nowrap',
  '& .home-header--title': {
    fontSize: 48,
    [theme.breakpoints.down('xl')]: {
      fontSize: 32,
    },
  },
  '& .home-header--subtext': {
    fontSize: 14,
    lineHeight: '16px',
  },
}))

export const HomeHeader: FC<Props> = (props) => {
  const currentWidth = useWidth()

  return (
    <Root container columnSpacing={12}>
      <Grid item xs={7} sx={{ height: 'max-content' }}>
        <Typography variant="h4" className="home-header--title" mb={3}>
          первый блог о реакте (на реакте), который написанный человеческим языком.
        </Typography>
        <Divider sx={{ width: 'calc(100% - 50px)' }} />
        <Grid container mt={4} columnSpacing={6} wrap="nowrap">
          <Grid item>
            <Button variant="contained" size="large">
              читать.
            </Button>
          </Grid>
          {currentWidth === 'xl' && (
            <Grid item>
              <QRCode link="#" children={HeaderQRCode} styles={{ maxWidth: 50, maxHeight: 50 }} />
            </Grid>
          )}
          {currentWidth === 'xl' && (
            <Grid item>
              <Typography variant="body2" className="home-header--subtext">
                нету смысла сканировать этот qr-код. там ничего интересного не написано
              </Typography>
            </Grid>
          )}
          <Grid item>
            <Typography variant="body2" className="home-header--subtext">
              ну и да, возможно не первый, ведь я не знаю что у вас там, но давайте пропустим этот момент.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <HeaderLaptop />
      </Grid>
    </Root>
  )
}
