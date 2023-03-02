import { Divider, Grid, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import styles from '@/screens/Home/home.module.sass'

import { getRecentPosts } from '@/shared/api/home.api'

import { BuyMeACoffeWrapper, HomeHeader, HomePosts, IntroWrapper, SocialMediaWrapper } from './components'
import { HomePageData } from './data'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  flexDirection: 'column',
  minHeight: '75vh',
  position: 'relative',
  overflow: 'hidden',
  paddingBottom: theme.spacing(12),
  '& .container-fluid': {
    width: '100%',
  },
  '& .container': {
    width: 'calc(100% - 68px)',
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 32px)',
    },
  },
}))

export const Home: FC<Props> = (props) => {
  const [data, setData] = useState({})
  useEffect(() => {
    getRecentPosts().then((res: any) => setData(res))
  }, [])

  return (
    <Root container rowSpacing={10} className={styles.Wrapper}>
      <Grid item xs={12} className="container-fluid">
        <HomeHeader />
      </Grid>

      {HomePageData.map(({ id, title, enName, component }: any) => (
        <Grid item xs={12} className="container" key={id}>
          {component === 'IntroWrapper' && <IntroWrapper index={`0${id + 1}`} enName={enName} name={title} />}
          {component === 'HomePosts' && <HomePosts index={`0${id + 1}`} enName={enName} name={title} data={data} />}
          {component === 'BuyMeACoffeWrapper' && (
            <BuyMeACoffeWrapper index={`0${id + 1}`} enName={enName} name={title} />
          )}
          {component === 'SocialMediaWrapper' && (
            <SocialMediaWrapper index={`0${id + 1}`} enName={enName} name={title} />
          )}
        </Grid>
      ))}
    </Root>
  )
}
