// eslint-disable-next-line import/no-extraneous-dependencies
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { FC, ReactElement } from 'react'

import theme from '@/providers/customThemeProvider/theme'

const cache = createCache({
  key: 'custom',
  prepend: true,
})

const CustomThemeProvider: FC<{ children: ReactElement }> = ({ children }) => (
  <CacheProvider value={cache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </CacheProvider>
)

export default CustomThemeProvider
