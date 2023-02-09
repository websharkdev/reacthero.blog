import { Box, Button, Divider, Grid, Link, Typography, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { useLanguage } from 'shared/hooks/useLanguage'
import { LanguageProps } from 'shared/types/home'

import styles from '@/screens/Home/home.module.sass'

import { getRecentPosts } from '@/shared/api/home.api'

import { HomeHeader, HomePosts } from './components'

// import { user_data } from './data'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  flexDirection: 'column',
  minHeight: '75vh',
  position: 'relative',
  '& .container-fluid': {
    width: '100%',
  },
  '& .container': {
    width: 'calc(100% - 68px)',
  },
}))

export const Home: FC<Props> = (props) => {
  // const [language, setLanguage] = useState<LanguageProps>('en')
  const [data, setData] = useState({})
  // useLanguage({
  //   dataEN: user_data,
  //   dataRU: user_data,
  //   setData,
  //   language,
  //   setLanguage,
  // })

  useEffect(() => {
    getRecentPosts().then((res: any) => setData(res))
  }, [])

  return (
    <Root container rowSpacing={10} className={styles.Wrapper}>
      <Grid item xs={12} className="container-fluid">
        <HomeHeader />
      </Grid>
      <Grid item xs={12} className="container-fluid">
        <HomePosts data={data} />
      </Grid>
    </Root>
  )
}
