import { createTheme } from '@mui/material/styles'

import breakpoints from './breakpoints'
import typography from './typography'

export const theme = createTheme({
  breakpoints,
  palette: {
    primary: {
      main: '#BBD1E7',
      light: '#C1CDD9',
      dark: '#5785B3',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C1CDD9',
      light: '#CDE0F3',
      dark: '#5785B3',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#DD4C1E',
      light: '#FFF5F5',
      dark: '#DD4C1E',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#FFB82E',
      light: '#FFFBF4',
      dark: '#FFB82E',
      contrastText: '#FFFFFF',
    },
    info: {
      main: 'rgba(31, 23, 18, 0.3)',
      light: 'rgb(229, 246, 253)',
      dark: '#DD4C1E',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#3EC100',
      dark: '#219653',
      light: '#F7FCF4',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#CBDEF0',
      paper: '#F6F6F6',
    },
    text: {
      primary: '#2D2D2D',
      disabled: '#9C9CA4',
      secondary: '#0C0E14',
    },
    common: {
      black: '#17223F',
      white: '#FFFFFF',
    },
  },
  typography,
  shape: {
    borderRadius: 4,
  },
})

theme.components = {
  MuiAlert: {
    styleOverrides: {
      outlinedError: {
        background: '#FFF5F5',
        border: `1px solid #DD4C1E`,
        '& svg path': {
          fill: '#DD4C1E',
        },
      },
      outlinedSuccess: {
        background: '#F7FCF4',
        border: `1px solid #3EC100`,
        '& svg path': {
          fill: '#3EC100',
        },
      },
      outlinedWarning: {
        background: '#FFFBF4',
        border: `1px solid #FFB82E`,
        '& svg path': {
          fill: '#FFB82E',
        },
      },
      outlinedInfo: {
        background: 'rgb(229, 246, 253)',
        border: `1px solid #03a9f4`,
        '& svg path': {
          fill: '#03a9f4',
        },
      },
    },
  },
  MuiButton: {
    variants: [
      {
        props: { color: 'primary', variant: 'contained' },
        style: {
          background: '#ffffff',
          color: theme.palette.text.primary,
          transition: 'all 120ms ease-in',
          borderRadius: 1,
          boxShadow: 'none',
          boxSizing: 'border-box',
          '&.unStyled': {
            background: 'transparent',
            color: theme.palette.text.primary,
            border: 'none',
            ':hover': {
              boxShadow: 'none',
              background: 'transparent',
              border: 'none',
            },
          },
          ':hover': {
            boxShadow: 'none',
            background: '#E6E7ED',
            border: '1px solid #222',
          },
        },
      },
      {
        props: { color: 'primary', variant: 'outlined' },
        style: {
          background: theme.palette.secondary.light,
          color: theme.palette.text.primary,
          opacity: 1,
          transition: 'all 120ms ease-in',
          borderRadius: 1,
          border: 'none',
          '&.unStyled': {
            background: 'transparent',
            color: theme.palette.text.primary,
            border: 'none',
            ':hover': {
              boxShadow: 'none',
              background: 'transparent',
              border: 'none',
            },
          },
          ':hover': {
            background: '#AFC8E1',
            border: `1px solid ${theme.palette.text.primary}`,
          },
        },
      },
      {
        props: { color: 'primary', variant: 'text' },
        style: {
          background: '#2D2D2D',
          color: theme.palette.secondary.contrastText,
          transition: 'all 120ms ease-in',
          borderRadius: 1,
          boxShadow: 'none',
          '&.unStyled': {
            background: 'transparent',
            color: theme.palette.text.primary,
            border: 'none',
            ':hover': {
              boxShadow: 'none',
              background: 'transparent',
              border: 'none',
            },
          },
          ':hover': {
            color: theme.palette.primary.light,
            border: `1px solid #000`,
            background: '#222',
          },
        },
      },
    ],
    styleOverrides: {
      sizeLarge: {
        height: 50,
        minWidth: 175,
        fontSize: '1em',
        fontWeight: 600,
        lineHeight: '19.5px',
        letterSpacing: '1px',
        padding: '6px 16px',
        textTransform: 'lowercase',
        boxShadow: 'none',
        fontFamily: `'Montserrat', sans-serif`,
      },
      sizeMedium: {
        height: 35,
        minWidth: 136,
        fontSize: '.8em',
        fontWeight: 600,
        lineHeight: '19.5px',
        letterSpacing: '1px',
        padding: '6px 16px',
        textTransform: 'lowercase',
        boxShadow: 'none',
        fontFamily: `'Montserrat', sans-serif`,

        '&.unStyled': {
          minWidth: 0,
          padding: 0,
        },
      },
      sizeSmall: {
        height: 30,
        fontSize: '.7em',
        fontWeight: 600,
        lineHeight: '19.5px',
        letterSpacing: '1px',
        padding: '6px 16px',
        textTransform: 'lowercase',
        boxShadow: 'none',
        fontFamily: `'Montserrat', sans-serif`,
      },
      textPrimary: {
        color: theme.palette.primary.main,
        textTransform: 'none',
        '&:hover': {
          color: theme.palette.primary.dark,
          background: 'none',
        },
      },
      textSecondary: {
        color: '#FFFFFF',
        textTransform: 'none',
        background: '#1F1712',
        transition: 'none',
        '&:hover': {
          background: 'linear-gradient(272.85deg, #1F1712 0.07%, #413025 100.07%)',
          boxShadow: 'inset 0px 4px 14px rgba(0, 0, 0, 0.1)',
        },
      },
      outlined: {
        color: '#1F1712',
        textTransform: 'none',
        background: 'rgba(31, 23, 18, 0.00)',
        '&:hover': {
          background: 'rgba(31, 23, 18, 0.06)',
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        '&:hover': {
          background: 'transparent',
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        background: '#9381FF',
        borderRadius: 1,
        color: theme.palette.primary.contrastText,
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: 0.5,
        cursor: 'pointer',
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      light: {
        background: theme.palette.primary.light,
      },
      root: {
        background: 'rgba(31, 23, 18, 0.12)',
        '&.customDivider': {
          width: '100%',
          maxWidth: 120,
          marginBottom: theme.spacing(3),
          height: 2,
          background: theme.palette.primary.dark,
          [theme.breakpoints.down('md')]: {
            maxWidth: 64,
          },
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundColor: '#F8F8F1',
      },
      elevation1: {
        boxShadow: '0px 16px 32px rgba(17, 17, 17, 0.04)',
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      list: {
        padding: 0,
        background: theme.palette.primary.light,
        border: `1px solid ${theme.palette.text.primary}`,
        borderRadius: 4,
        '& li': {
          fontSize: '.8em',
          fontWeight: '600 !important',
          lineHeight: '19.5px',
          letterSpacing: '1px',
        },
        '& .active': {
          borderRadius: 4,
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          '&:hover': {
            background: theme.palette.background.paper,
            color: theme.palette.text.primary,
          },
        },
      },
      paper: {
        boxShadow: 'none !important',
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.2,
        color: '#1F1712',
        '&.Mui-focused': {
          color: '#1F1712',
        },
        marginBottom: 8,
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: '1rem',
        fontWeight: 500,
        color: 'rgba(31, 23, 18, 0.64)',
        transform: 'translate(12px, 20px) scale(1)',
        '&.Mui-focused, &.MuiFormLabel-filled': {
          color: 'rgba(31, 23, 18, 0.64)',
          transform: 'translate(12px, 7px) scale(0.75)',
        },
      },
    },
  },
  MuiFilledInput: {
    variants: [
      {
        props: { color: 'primary' },
        style: {
          border: '1px solid #1F17123D',
          background: 'none',
          transition: theme.transitions.create(['all', 'transform'], { duration: 90 }),
          ':hover, &.Mui-focused': {
            border: '2px solid #EF761F',
            backgroundColor: 'rgba(239, 118, 31, 0.08)',
          },
        },
      },
      {
        props: { color: 'secondary' },
        style: {
          input: { paddingTop: '0', paddingBottom: '0' },
          ':hover': {
            border: 'none',
          },
        },
      },
    ],
    defaultProps: {
      disableUnderline: true,
    },
    styleOverrides: {
      root: {
        height: 56,
        borderRadius: 12,
        backgroundColor: 'rgba(31, 23, 18, 0.06)',
        transition: 'none',
        'input:-webkit-autofill': {
          transition: 'background-color 600000s 0s, color 600000s 0s',
        },
        '&:hover': {
          backgroundColor: 'rgba(239, 118, 31, 0.08)',
          boxShadow: '0px 4px 12px rgba(248, 139, 22, 0.06)',
        },
        '&.Mui-focused': {
          backgroundColor: 'rgba(239, 118, 31, 0.08)',
          boxShadow: '0px 4px 12px rgba(248, 139, 22, 0.06)',
        },
      },
    },
  },
  MuiOutlinedInput: {
    variants: [
      {
        props: { color: 'primary' },
        style: {
          border: '1px solid #C4C2BC',
          overflow: 'hidden',
          borderRadius: 12,
          ':hover': {},
        },
      },
    ],
    styleOverrides: {
      root: {
        color: 'rgba(31, 23, 18, 0.64)',
      },
      input: {
        color: 'rgba(31, 23, 18, 0.64)',
        fontWeight: 500,
        '&.MuiInputBase-inputAdornedStart': {
          marginLeft: 8,
        },
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: 'none',
    },
    styleOverrides: {
      root: {
        textDecoration: 'none',
        fontSize: '1em',
        fontFamily: `'Montserrat', sans-serif`,
        fontWeight: 600,
        lineHeight: '120%',
        cursor: 'pointer',
        position: 'relative',
        color: theme.palette.text.primary,
        transition: theme.transitions.create(['color', 'transform'], { duration: 200 }),
        '&.unstyled': {
          '&::before': {
            display: 'none',
          },
        },
        '&::before': {
          content: '""',
          height: 2,
          width: '100%',
          background: theme.palette.primary.light,
          position: 'absolute',
          bottom: -5,
          left: 0,
          zIndex: 3,
          transform: 'scaleX(0)',
          transformOrigin: '0 50%',
          transition: 'transform .4s',
          transitionTimingFunction: 'cubic-bezier(0.7, 0, 0.3, 1)',
        },
        '&:hover': {
          color: theme.palette.primary.light,
          '&::before': {
            transform: 'scaleX(1)',
          },
        },
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paperFullScreen: {
        alignItems: 'center',
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        fontSize: 38,
        fontWeight: 700,
        lineHeight: 1.2,
        padding: '32px 0',
        display: 'grid',
        gridGap: 24,
        textAlign: 'center',
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        [theme.breakpoints.down('sm')]: {
          padding: 0,
        },
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 1.2,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: '#1F1712',
        borderRadius: 3,
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      h1: {
        fontSize: 96,
        fontWeight: 600,
        letterSpacing: 1.5,
        lineHeight: '98px',
        [theme.breakpoints.down('lg')]: {
          fontSize: 64,
          lineHeight: '85px',
        },
        [theme.breakpoints.down('md')]: {
          fontSize: 48,
          lineHeight: '70px',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: 36,
          lineHeight: '70px',
        },
        [theme.breakpoints.down(490)]: {
          fontSize: 32,
          lineHeight: '70px',
        },
        [theme.breakpoints.down(360)]: {
          fontSize: 21,
          lineHeight: '38px',
        },
      },
      h3: {
        [theme.breakpoints.down('lg')]: {
          fontSize: '1em',
          letterSpacing: '0.8px',
        },
      },
      body2: {
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 1.4,
        letterSpacing: '1.5px',
        [theme.breakpoints.down('md')]: {
          fontSize: 14,
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: 12,
        },
      },
    },
  },
  MuiSelect: {
    variants: [
      {
        props: { variant: 'filled', color: 'primary', size: 'small' },
        style: {
          fontFamily: `'Montserrat', sans-serif`,
          fontWeight: 700,
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          height: 'auto',
          border: 'none',
          padding: '0',
          textAlign: 'left',
          path: {
            fill: theme.palette.primary.contrastText,
          },
          '&.Mui-focused, &:hover': {
            background: theme.palette.primary.main,
            boxShadow: 'none',
            border: 'none',
          },
          '.MuiSelect-select': {
            background: 'none',
            padding: '0 5px 2px 16px',
          },
        },
      },
      {
        props: { variant: 'outlined', color: 'info', size: 'small' },
        style: {
          fontFamily: `'Montserrat', sans-serif`,
          fontWeight: 500,
          height: 'auto',
          border: 'none',
          padding: '9px 5px 9px 16px',
          textAlign: 'left',
          path: {
            fill: 'rgba(31, 23, 18, 0.48)',
          },
          '.MuiSelect-select': {
            padding: 0,
          },
        },
      },
    ],
    styleOverrides: {
      icon: { top: 'auto', right: 14 },
      select: {
        border: 'none',
      },
    },
  },
}

export default theme
