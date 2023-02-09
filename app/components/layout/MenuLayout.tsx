import { Grid } from '@mui/material'
import { motion, useScroll } from 'framer-motion'
import { FC, ReactElement, createContext, useState } from 'react'
import { LanguageProps } from 'shared/types/home'

import { HelpUkraine } from '@/components/layout/HelpUkraine'
import { Footer } from '@/components/layout/footer'
import { Header, Menu } from '@/components/layout/header'

import { home_data } from '../screens/Home/data'

import styles from './layout.module.sass'

interface LanguageContext {
  language: LanguageProps
  setLanguage: (language: LanguageProps) => void
  home_data: any
}
// @ts-ignore
export const UserLanguageContext = createContext<LanguageContext>({})

const MenuLayout: FC<{ children: ReactElement }> = ({ children }) => {
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
        <div className={styles.layout_menu}>
          <div className={styles.page}>
            <Header simplified />
            {children}
          </div>
          <div className={styles.menu}>
            <Menu unstyled={false} />
          </div>
        </div>
        <div className={styles.footer}>
          <HelpUkraine />
          <Footer />
        </div>
      </div>
    </UserLanguageContext.Provider>
  )
}

export default MenuLayout
