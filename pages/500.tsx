import { Box } from '@mui/material'
import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import { HeaderWrapper } from '@/components/layout/header/HeaderWrapper'

import { HeaderBG } from '@/assets/icons/backgrounds'

import Meta from '@/utils/meta/Meta'

const Error500: NextPage = () => (
  <Meta title="Server-side error">
    <Layout>
      <Box sx={{ width: '100%', position: 'relative', px: 6 }}>
        <HeaderWrapper
          subtitle="creative developer"
          photoBG={HeaderBG}
          position="background"
          shift="unstyled"
          size={{
            xs: [256, 256],
            sm: [440, 440],
            md: [500, 500],
          }}
          width={950}
          title="500 - Server-side error occurred"
          text="Some things went wrong. Server-side error occurred. Try again litle bit later."
        />
      </Box>
    </Layout>
  </Meta>
)

export default Error500
