import { Box, Grid, Link as MuiLink, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import { getCategories } from '@/shared/api/home.api'
import { MenuItem } from '@/shared/types/home'

type Props = {
  variant?: 'footer' | 'header'
}

const Root = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  '&.footer-menu--wrapper': {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  '& a': {
    width: 'max-content',
    height: 'max-content',
  },
  '& .menu-wrapper--categories': {
    width: 'max-content',
    display: 'flex',
    columnGap: theme.spacing(4),
    alignItems: 'center',
  },

  '& .menu-wrapper--categories-divider': {
    width: 2,
    height: 'auto',
    minHeight: 35,
    background: '#ccc',
  },
}))

export const MenuWrapper: FC<Props> = ({ variant = 'header' }) => {
  const [menu, setMenu] = useState<MenuItem[]>([])

  useEffect(() => {
    getCategories().then((res: MenuItem[]) => setMenu(res))
  }, [])
  return (
    <Root rowGap={4} className={`${variant}-menu--wrapper`}>
      <Grid item xs={6}>
        <MuiLink href="/">домашняя.</MuiLink>
      </Grid>
      <Grid item xs={6}>
        <MuiLink href="/">посты.</MuiLink>
      </Grid>
      <Grid item xs={6} sx={{ order: variant === 'footer' ? 100 : 0, display: 'flex', columnGap: 3 }}>
        <Box className="menu-wrapper--categories-divider" />
        <Grid container rowGap={4}>
          {menu.map((item: MenuItem) => (
            <Grid item xs={10} key={item.id}>
              <MuiLink href={item.slug}>{item.name}</MuiLink>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <MuiLink href="/">кофейку.</MuiLink>
      </Grid>
      <Grid item xs={6}>
        <MuiLink href="/">помочь Украине</MuiLink>
      </Grid>
    </Root>
  )
}
