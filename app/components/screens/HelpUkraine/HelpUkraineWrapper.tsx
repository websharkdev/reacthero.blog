import { Divider, Grid, styled } from '@mui/material'
import { FC, useState } from 'react'
import { useLanguage } from 'shared/hooks/useLanguage'
import { LanguageProps } from 'shared/types/home'

import { HeaderWrapper } from '@/components/layout/header/HeaderWrapper'

import { HeaderBG } from '@/assets/icons/backgrounds'

import { helpUkraineEN, helpUkraineRU } from '../Home/data'

import { HelpUkraineAbout, HelpUkraineFinancially } from './components'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(4)}`,
}))

export const HelpUkraineWrapper: FC<Props> = (props) => {
  const [language, setLanguage] = useState<LanguageProps>('en')
  const [ukraine_data, setUkraine_data] = useState(helpUkraineEN)

  useLanguage({
    dataEN: helpUkraineEN,
    dataRU: helpUkraineRU,
    setData: setUkraine_data,
    language,
    setLanguage,
  })
  return (
    <Root container rowSpacing={10}>
      <Grid item xs={12}>
        {/* <Hw */}
        <Divider />
      </Grid>

      <Grid item xs={12}>
        <HelpUkraineAbout data={ukraine_data} />
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <HelpUkraineFinancially data={ukraine_data.financially} />
      </Grid>
    </Root>
  )
}
