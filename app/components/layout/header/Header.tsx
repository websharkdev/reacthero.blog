import { Drawer, Grid, IconButton, styled } from '@mui/material'
import Image from 'next/image'
import { FC, useState } from 'react'
import 'shared/api/home.api'

import { BurgerClosedIcon } from '@/assets/icons/ui'

import Logo from '../logo/Logo'

import { Menu } from './Menu'

type Props = { animated?: boolean; simplified?: boolean }

const Root = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  zIndex: 30,

  width: '100%',
  margin: '0 auto',
  padding: `${theme.spacing(4)} ${theme.spacing(10)}`,
  [theme.breakpoints.down('xl')]: {
    padding: theme.spacing(4),
  },
  background: theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    padding: '24px 20px',
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

export const Header: FC<Props> = ({ animated, simplified = false }) => {
  const [headerMenu, setHeaderMenu] = useState(false)

  return (
    <Root container className="wrapper">
      <Grid item>
        <Logo animated={animated} />
      </Grid>
      {!simplified && (
        <Grid item>
          <IconButton className="wrapper--menu-button" onClick={() => setHeaderMenu(!headerMenu)}>
            <Image src={BurgerClosedIcon} alt="burger-menu-icon" />
          </IconButton>
        </Grid>
      )}

      <Drawer open={headerMenu} anchor="right" onClose={() => setHeaderMenu(!headerMenu)}>
        <Menu unstyled />
      </Drawer>
    </Root>
  )
}
