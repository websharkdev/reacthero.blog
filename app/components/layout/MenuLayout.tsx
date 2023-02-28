import { Box, IconButton, Snackbar, Typography, styled } from '@mui/material'
import { motion, useScroll } from 'framer-motion'
import { FC, ReactElement, createContext, useState } from 'react'

import { HelpUkraine } from '@/components/layout/HelpUkraine'
import { Footer } from '@/components/layout/footer'
import { Header, Menu } from '@/components/layout/header'

import styles from './layout.module.sass'

interface ContextWrapper {
  clipboard: boolean
  setClipboard: (clipboard: boolean) => void
}

const SnackbarRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  background: '#494856',
  marginLeft: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  border: '1px solid #000',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  '& .content': {
    borderRadius: theme.shape.borderRadius,
    background: '#C1E27D',
    fontWeight: 700,
    fontSize: 14,
    padding: `${theme.spacing(0.5)} ${theme.spacing(1.5)}`,
  },
}))
// @ts-ignore
export const UserContextWrapper = createContext<ContextWrapper>({})

const MenuLayout: FC<{ children: ReactElement }> = ({ children }) => {
  const [clipboard, setClipboard] = useState<boolean>(false)
  const { scrollYProgress } = useScroll()

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setClipboard(false)
  }

  return (
    <UserContextWrapper.Provider
      value={{
        clipboard,
        setClipboard,
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
      <Snackbar open={clipboard} autoHideDuration={4000} onClose={handleClose}>
        <SnackbarRoot columnGap={1.5}>
          <Typography className="content">Added to clipboard</Typography>
          <IconButton size="small" aria-label="close" onClick={handleClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" fill="#292836" />
              <path
                d="M8.15028 7.05025C7.84654 6.74651 7.35407 6.74651 7.05033 7.05025C6.74659 7.35399 6.74659 7.84646 7.05033 8.1502L10.9001 12L7.05033 15.8498C6.74659 16.1535 6.74659 16.646 7.05033 16.9497C7.35407 17.2535 7.84654 17.2535 8.15028 16.9497L12.0001 13.0999L15.8499 16.9497C16.1536 17.2535 16.6461 17.2535 16.9498 16.9497C17.2536 16.646 17.2536 16.1535 16.9498 15.8498L13.1 12L16.9498 8.1502C17.2536 7.84646 17.2536 7.35399 16.9498 7.05025C16.6461 6.74651 16.1536 6.74651 15.8499 7.05025L12.0001 10.9001L8.15028 7.05025Z"
                fill="#F2F2F2"
              />
            </svg>
          </IconButton>
        </SnackbarRoot>
      </Snackbar>
    </UserContextWrapper.Provider>
  )
}

export default MenuLayout
