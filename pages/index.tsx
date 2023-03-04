import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'

import { Home } from '@/screens/Home'

import Meta from '@/utils/meta/Meta'

const HomePage: NextPage = () => (
  <Meta title="Home" description="Welcome to the Bortnytskyi Oleksii blog. It's home page">
    <Layout>
      <Home />
    </Layout>
  </Meta>
)

export default HomePage
