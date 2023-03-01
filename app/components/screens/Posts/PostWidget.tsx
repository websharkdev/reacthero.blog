import { Box, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { getPostDetails, getPosts, getRecentPosts, getSimilarPosts } from '@/shared/api/home.api'
import { useWidth } from '@/shared/hooks'

import { PostItem } from './components'

type Props = {
  slug: string
  categories: string[]
}

const Root = styled(Swiper)(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    width: 50,
    height: '100%',
    position: 'absolute',
    right: -10,
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'linear-gradient(270deg, #6B6B6B -65%, rgba(217, 217, 217, 0) 100%)',
    zIndex: 10,
  },
  '& .post-widget--slide-item': {
    maxWidth: '40%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
    },
  },
}))

export const PostWidget: FC<Props> = ({ slug, categories }) => {
  const [relatedPost, setRelatedPost] = useState([])

  const [slidesToShow, setSlidesToShow] = useState<number | 'auto'>(0)
  const currentWidth = useWidth()
  const loaded = slug !== undefined

  const handleRequest = () => {
    if (slug && categories) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPost(result)
      })
    } else {
      getRecentPosts().then((result) => setRelatedPost(result))
    }
  }

  useEffect(() => {
    switch (currentWidth) {
      case 'xl':
        setSlidesToShow('auto')
        break
      case 'lg':
        setSlidesToShow('auto')
        break
      case 'md':
        setSlidesToShow(2)
        break
      case 'sm':
        setSlidesToShow(1)
        break
      case 'xs':
        setSlidesToShow(1)
        break

      default:
        setSlidesToShow(1)
        break
    }
    if (loaded) handleRequest()
  }, [loaded])

  return (
    <Root spaceBetween={50} slidesPerView={slidesToShow} className="post-widget--slider">
      {relatedPost.map((post: any) => (
        <SwiperSlide key={post.id} className="post-widget--slide-item">
          <PostItem data={post} simplified={categories && slug ? true : false} />
        </SwiperSlide>
      ))}
    </Root>
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
