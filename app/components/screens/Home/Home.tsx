import { Grid, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import styles from '@/screens/Home/home.module.sass'

import { getRecentPosts } from '@/shared/api/home.api'

import { BuyMeACoffeWrapper, HomeHeader, HomePosts, IntroWrapper, SocialMediaWrapper } from './components'

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
      <Grid item xs={12} className="container-fluid" sx={{ pt: '0 !important' }}>
        <HomeHeader />
      </Grid>
      <Grid item xs={12} className="container">
        <IntroWrapper />
      </Grid>
      <Grid item xs={12} className="container-fluid">
        <HomePosts data={data} />
      </Grid>
      <Grid item xs={12} className="container">
        <SocialMediaWrapper />
      </Grid>
      <Grid item xs={12} className="container">
        <BuyMeACoffeWrapper />
      </Grid>
    </Root>
  )
}
