import { motion, useScroll } from 'framer-motion'
import { FC, ReactElement, createContext, useState } from 'react'
import { LanguageProps } from 'shared/types/home'

import { HelpUkraine } from '@/components/layout/HelpUkraine'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

import { home_data } from '../screens/Home/data'

import styles from './layout.module.sass'

interface LanguageContext {
  language: LanguageProps
  setLanguage: (language: LanguageProps) => void
  home_data: any
}
// @ts-ignore
export const UserLanguageContext = createContext<LanguageContext>({})

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageProps>('en')
  const { scrollYProgress } = useScroll()

  return (
    <UserLanguageContext.Provider
      value={{
        language,
        setLanguage,
        home_data,
      }}
    >
      <motion.div className={styles.ProgressBar} style={{ scaleX: scrollYProgress }} />
      <div className={styles.layout}>
        <Header />
        <div className={styles.page}>{children}</div>
        <div className={styles.footer}>
          <HelpUkraine />
          <Footer />
        </div>
      </div>
    </UserLanguageContext.Provider>
  )
}

export default Layout
