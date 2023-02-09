import { Palette } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined = {
  fontFamily: `"Montserrat", sans-serif`,

  h1: {
    fontWeight: 600,
    fontSize: 60,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontWeight: 600,
    fontSize: 50,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
  h3: {
    fontWeight: 600,
    fontSize: '2em',
    letterSpacing: 1.5,
    lineHeight: '1.5em',
  },
  h4: {
    fontWeight: 600,
    fontSize: 28,
    lineHeight: 1.2,
  },
  h5: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 1.4,
  },
  h6: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 1.4,
  },
  body2: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 1.4,
    letterSpacing: '1.5px',
  },
}

export default typography
