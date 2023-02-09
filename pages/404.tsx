import { Box } from '@mui/material'
import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import { HeaderWrapper } from '@/components/layout/header/HeaderWrapper'

import { HeaderBG } from '@/assets/icons/backgrounds'

import Meta from '@/utils/meta/Meta'

const Error404: NextPage = () => (
  <Meta title="Page not found">
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
          title={
            <>
              404 - error.
              <br /> Not found
            </>
          }
          text="Some things went wrong. We can’t seem to find the page you’re looking for. Just go back."
        />
      </Box>
    </Layout>
  </Meta>
)

export default Error404
