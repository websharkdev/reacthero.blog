import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'

import { BuyMeACoffeWrapper } from '@/screens/Home/components'

import Meta from '@/utils/meta/Meta'

const BuyMeACoffePage: NextPage = () => (
  <Meta title="Buy me a coffe" description="Welcome to the Bortnytskyi Oleksii blog. It's buy me a coffe page">
    <Layout>
      <BuyMeACoffeWrapper index="01" enName="Buy Me A Coffe" name="кофейку" />
    </Layout>
  </Meta>
)

export default BuyMeACoffePage
