import { Divider, Grid, styled } from '@mui/material'
import { FC } from 'react'

import { helpUkraineEN } from '../Home/data'

import { HelpUkraineAbout, HelpUkraineFinancially } from './components'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(4)}`,
}))

export const HelpUkraineWrapper: FC<Props> = (props) => {
  return (
    <Root container rowSpacing={10}>
      <Grid item xs={12}>
        {/* <Hw */}
        <Divider />
      </Grid>

      <Grid item xs={12}>
        <HelpUkraineAbout data={helpUkraineEN} />
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <HelpUkraineFinancially data={helpUkraineEN.financially} />
      </Grid>
    </Root>
  )
}
