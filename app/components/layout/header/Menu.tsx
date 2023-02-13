import { Grid, Typography, styled } from '@mui/material'
import { FC } from 'react'

import { MenuQR } from '@/assets/icons/photos/qr-codes'

import { SocialMedia } from '../SocialMedia'
import { Logo } from '../logo'
import { QRCode } from '../qrcode'

import { MenuWrapper } from './MenuWrapper'

type Props = {
  unstyled?: boolean
}

const Root = styled(Grid)(({ theme }) => ({
  width: 'max-content',
  background: theme.palette.background.paper,
  height: 'max-content',
  minHeight: '100vh',
  padding: theme.spacing(10),
  justifyContent: 'space-between',
  position: 'sticky',
  top: 0,
  '&.unstyled': {
    maxHeight: '100vh',
    position: 'relative',
  },
}))

export const Menu: FC<Props> = ({ unstyled = true }) => {
  return (
    <Root container wrap="nowrap" direction="column" className={unstyled ? 'unstyled' : undefined}>
      <Grid item>
        <Logo animated={false} />
      </Grid>
      <Grid item>
        <MenuWrapper />
      </Grid>
      <Grid item sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <Grid container columnSpacing={4} justifyContent="space-between" sx={{ width: '100%' }}>
          <Grid item xs={8}>
            <Typography variant="body2" mb={2}>
              сканируй, выигрывай призы.
            </Typography>
            <SocialMedia />
          </Grid>
          <Grid item>
            <QRCode link="#" children={MenuQR} />
          </Grid>
        </Grid>
      </Grid>
    </Root>
  )
}
