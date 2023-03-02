import { Box, Grid, Link as MuiLink, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import { getCategories } from '@/shared/api/home.api'
import { CategoryRelatedItemProps, MenuItemProps } from '@/shared/types/home'

import { MenuWrapperList } from './MenuWrapperList'

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
  const [menu, setMenu] = useState<MenuItemProps[]>([])
  const [uniq, setUniq] = useState<string[]>([])
  useEffect(() => {
    getCategories().then((res: MenuItemProps[]) => {
      setMenu(res)

      const uniq_category: CategoryRelatedItemProps[] = []

      res.map((item: MenuItemProps) => {
        // @ts-ignore
        item.categoryRelateds.map((category) => uniq_category.push(category.title))
      })

      // @ts-ignore
      setUniq([...new Set(uniq_category)])
    })
  }, [])
  return (
    <Root rowGap={4} className={`${variant}-menu--wrapper`}>
      <Grid item xs={6}>
        <MuiLink href="/">домашняя.</MuiLink>
      </Grid>
      <Grid item xs={6}>
        <MuiLink href="/posts">посты.</MuiLink>
      </Grid>
      <Grid
        item
        xs={variant === 'footer' ? 6 : 12}
        sx={{ order: variant === 'footer' ? 100 : 0, display: 'flex', columnGap: 3 }}
      >
        <Box className="menu-wrapper--categories-divider" />
        <Grid container rowGap={1} wrap="nowrap" direction="column">
          {uniq.map((prop: string, index: number) => (
            <Grid item key={index}>
              <MenuWrapperList title={prop} menu={menu} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <MuiLink href="/#buymeacoffe">кофейку.</MuiLink>
      </Grid>
      <Grid item xs={6}>
        <MuiLink href="/helpUkraine">помочь Украине</MuiLink>
      </Grid>
    </Root>
  )
}
