import { Box, Grid, Link as MuiLink, Typography, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import { getCategories } from '@/shared/api/home.api'
import { MenuItem } from '@/shared/types/home'

import { MenuQR } from '@/assets/icons/photos/qr-codes'

import { SocialMedia } from '../SocialMedia'
import { Logo } from '../logo'
import { QRCode } from '../qrcode'

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
  '& .menu-wrapper--categories-divider': {
    width: 2,
    height: '100%',
    minHeight: 35,
    background: '#ccc',
  },
  '& .menu-wrapper': {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    '& a': {
      width: 'max-content',
    },
    '& .menu-wrapper--categories': {
      width: 'max-content',
      display: 'flex',
      columnGap: theme.spacing(4),
      alignItems: 'center',
    },
  },
}))

export const Menu: FC<Props> = ({ unstyled = true }) => {
  const [menu, setMenu] = useState<MenuItem[]>([])

  useEffect(() => {
    getCategories().then((res: MenuItem[]) => setMenu(res))
  }, [])
  return (
    <Root container wrap="nowrap" direction="column" className={unstyled ? 'unstyled' : undefined}>
      <Grid item>
        <Logo animated={false} />
      </Grid>
      <Grid item>
        <Box className="menu-wrapper" rowGap={4}>
          <MuiLink href="/">домашняя.</MuiLink>
          <MuiLink href="/">посты.</MuiLink>
          <Box className="menu-wrapper--categories">
            <Box className="menu-wrapper--categories-divider" />
            {menu.map((item: MenuItem) => (
              <MuiLink href={item.slug} key={item.id}>
                {item.name}
              </MuiLink>
            ))}
          </Box>
          <MuiLink href="/">кофейку.</MuiLink>
          <MuiLink href="/">помочь Украине</MuiLink>
        </Box>
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
