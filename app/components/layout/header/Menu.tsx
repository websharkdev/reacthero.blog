import { Box, Divider, Grid, IconButton, Typography, styled, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import { MenuQR } from '@/assets/icons/photos/qr-codes'
import { BurgerOpenedIcon } from '@/assets/icons/ui'

import { SocialMedia } from '../SocialMedia'
import { Logo } from '../logo'
import { QRCode } from '../qrcode'

import { MenuWrapper } from './MenuWrapper'

type Props = {
  unstyled?: boolean
  setHeaderMenu?: (headerMenu: boolean) => void
  headerMenu?: boolean
}

const Root = styled(Grid)(({ theme }) => ({
  width: 'max-content',
  background: theme.palette.background.paper,
  height: 'max-content',
  minHeight: '100vh',
  padding: `${theme.spacing(4)} ${theme.spacing(8)}`,
  [theme.breakpoints.down('md')]: {
    padding: `${theme.spacing(4)} 30px`,
    width: '100%',
  },
  justifyContent: 'space-between',
  position: 'sticky',
  top: 0,
  right: 0,
  '&.unstyled': {
    maxHeight: '100vh',
    position: 'relative',
  },
  '& .wrapper--menu-button': {
    width: 55,
    height: 55,
    [theme.breakpoints.down('xl')]: {
      width: 36,
      height: 36,
    },
    background: '#fff',
    borderRadius: 0,
  },
}))

export const Menu: FC<Props> = ({ unstyled = true, setHeaderMenu, headerMenu }) => {
  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('md')
  )
  return (
    <Root container wrap="nowrap" direction="column" rowSpacing={5} className={unstyled ? 'unstyled' : undefined}>
      <Grid item>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'nowrap' }}>
          <Logo animated={false} />
          {tablet ? (
            <IconButton className="wrapper--menu-button" onClick={() => setHeaderMenu && setHeaderMenu(!headerMenu)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.364 7.05015C18.7545 6.65962 18.7545 6.02646 18.364 5.63593C17.9734 5.24541 17.3403 5.24541 16.9497 5.63593L12 10.5857L7.05025 5.63593C6.65973 5.24541 6.02656 5.24541 5.63604 5.63593C5.24551 6.02646 5.24551 6.65962 5.63604 7.05015L10.5858 11.9999L5.63604 16.9496C5.24551 17.3402 5.24551 17.9733 5.63604 18.3639C6.02656 18.7544 6.65973 18.7544 7.05025 18.3639L12 13.4141L16.9497 18.3639C17.3403 18.7544 17.9734 18.7544 18.364 18.3639C18.7545 17.9733 18.7545 17.3402 18.364 16.9496L13.4142 11.9999L18.364 7.05015Z"
                  fill="#1F1712"
                />
              </svg>
            </IconButton>
          ) : null}
        </Box>
      </Grid>
      <Grid item>
        <MenuWrapper />
      </Grid>
      <Grid item>
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
