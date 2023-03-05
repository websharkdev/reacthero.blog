import { Divider, Grid, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import styles from '@/screens/Home/home.module.sass'

import { getRecentPosts } from '@/shared/api/home.api'
import { BlockProps, PostItemProps } from '@/shared/types/home'

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
}))

interface HomeBlockProps extends BlockProps {
  component: string
}

export const Home: FC<Props> = (props) => {
  const [data, setData] = useState<PostItemProps[]>([])
  useEffect(() => {
    getRecentPosts().then((res: PostItemProps[]) => setData(res))
  }, [])

  return (
    <Root container rowSpacing={10} className={styles.Wrapper}>
      <Grid item xs={12} className="container-fluid">
        <HomeHeader />
      </Grid>

      {HomePageData.map((block: HomeBlockProps) => (
        <Grid item xs={12} key={block.index}>
          {block.component === 'IntroWrapper' && (
            <IntroWrapper index={`0${+block.index + 1}`} enName={block.enName} name={block.name} />
          )}
          {block.component === 'HomePosts' && (
            <HomePosts index={`0${+block.index + 1}`} enName={block.enName} name={block.name} data={data} />
          )}
          {block.component === 'BuyMeACoffeWrapper' && (
            <BuyMeACoffeWrapper index={`0${+block.index + 1}`} enName={block.enName} name={block.name} />
          )}
          {block.component === 'SocialMediaWrapper' && (
            <SocialMediaWrapper index={`0${+block.index + 1}`} enName={block.enName} name={block.name} />
          )}
        </Grid>
      ))}
    </Root>
  )
}
