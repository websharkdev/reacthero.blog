import { Grid, styled } from '@mui/material'
import { FC } from 'react'

import { SectionHeader } from '@/components/layout/SectionHeader'

import { BlockProps } from '@/shared/types/home'

import { CoffeContent } from './components/CoffeContent'

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(8),
  position: 'relative',
  alignItems: 'flex-start',
  height: 1200,

  [theme.breakpoints.down('xl')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.down('sm')]: {
    padding: '24px 20px',
  },
  '& .sm-image--star': {
    position: 'absolute',
    right: '-100px',
    zIndex: 3,
    top: '-100px',
  },
}))

export const BuyMeACoffeWrapper: FC<BlockProps> = ({ index, enName, name }) => {
  return (
    <Root container rowSpacing={6}>
      <Grid item xs={12}>
        <SectionHeader index={index} enName={enName} name={name} />
      </Grid>
      <Grid item xs={12} lg={10}>
        <CoffeContent />
      </Grid>
    </Root>
  )
}
