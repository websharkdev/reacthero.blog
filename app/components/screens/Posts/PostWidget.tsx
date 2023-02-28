import { Grid, styled, useMediaQuery } from '@mui/material'
import { FC, useEffect, useState } from 'react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { getPostDetails, getPosts, getRecentPosts, getSimilarPosts } from '@/shared/api/home.api'

import { PostItem } from './components'

type Props = {
  slug: string
  categories: string[]
}

const Root = styled(Grid)(({ theme }) => ({}))

export const PostWidget: FC<Props> = ({ slug, categories }) => {
  const [relatedPost, setRelatedPost] = useState([])
  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('lg')
  )

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPost(result)
      })
    } else {
      getRecentPosts().then((result) => setRelatedPost(result))
    }
  }, [])

  return (
    <>
      {tablet ? (
        <Swiper className="mySwiper">
          {relatedPost.map((post: any) => (
            <SwiperSlide key={post.id}>
              <PostItem data={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Root container rowSpacing={12} columnSpacing={{ md: 12, xs: 0 }}>
          {relatedPost.map((post: any) => (
            <Grid item xs={12} md={6} key={post.id}>
              <PostItem data={post} />
            </Grid>
          ))}
        </Root>
      )}
    </>
  )
}

// Fetch data at build time
export async function getStaticProps({ params }: any) {
  const data = await getPostDetails(params.slug)
  return {
    props: {
      post: data,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()
  return {
    paths: posts.map(({ node: { slug } }: any) => ({ params: { slug } })),
    fallback: true,
  }
}
