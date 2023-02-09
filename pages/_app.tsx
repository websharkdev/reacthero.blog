import type { AppProps } from 'next/app'
import { useState } from 'react'

import { UsePreloader } from '@/shared/hooks'

import '@/assets/styles/general.css'

import MaineProvider from '@/providers/MaineProvider'

import styles from '@/styles/globals.sass'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <MaineProvider>
      <UsePreloader setState={setLoaded} state={loaded}>
        <Component {...pageProps} className={styles.Root} />
      </UsePreloader>
    </MaineProvider>
  )
}

export default MyApp
