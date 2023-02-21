import { Grid, styled } from '@mui/material'
import { FC } from 'react'

import { SectionHeader } from '@/components/layout/SectionHeader'

import { CoffeContent } from './components/CoffeContent'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(8),
  position: 'relative',
  alignItems: 'top',
  height: 1200,
  '& .sm-image--star': {
    position: 'absolute',
    right: '-100px',
    zIndex: 3,
    top: '-100px',
  },
}))

export const BuyMeACoffeWrapper: FC<Props> = (props) => {
  return (
    <Root container rowSpacing={6}>
      <Grid item xs={12}>
        <SectionHeader index="04" enName="buy me a coffe" name="купить кофейку" />
      </Grid>
      <Grid item xs={10}>
        <CoffeContent />
      </Grid>
    </Root>
  )
}
