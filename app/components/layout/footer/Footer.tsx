import { Box, Grid, Link as MuiLink, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import { buyMeACoffeQR } from '@/assets/icons/ui'

import { SocialMedia } from '../SocialMedia'
import { MenuWrapper } from '../header/MenuWrapper'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  flexWrap: 'nowrap',
  minHeight: 490,
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
  },
  '& .footer-leftSide': {
    display: 'flex',
    alignItems: 'flex-end',
    background: '#C1E27D',
    padding: `${theme.spacing(11)} ${theme.spacing(5)} ${theme.spacing(4)} ${theme.spacing(5)}`,
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(11)} ${theme.spacing(2.5)} ${theme.spacing(4)} ${theme.spacing(2.5)}`,
    },
    '& .footer-leftSide--divider': {
      marginTop: 20,
      height: 2,
      width: 39,
      background: '#B8B8FF',
    },
    '& .footer-leftSide--createdWithLove': {
      width: '100%',
      '& span': {
        color: '#f00',
      },
    },
  },
  '& .footer-rightSide': {
    background: '#240046',
    display: 'flex',
    alignItems: 'flex-end',
    padding: `${theme.spacing(11)} ${theme.spacing(5)} ${theme.spacing(4)} ${theme.spacing(5)}`,
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing(11)} ${theme.spacing(2.5)} ${theme.spacing(4)} ${theme.spacing(2.5)}`,
    },
    '& .footer-rightSide--divider': {
      marginBottom: 20,
      height: 2,
      width: 39,
      background: '#B8B8FF',
    },
    '& .footer-rightSide--link': {
      color: '#DEE2E6',
      textDecoration: 'none',
      fontWeight: 600,
    },
    '& .footer-rightSide--socialBox': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '120px',
    },
    '& .footer-rightSide--qrcodeBox': {
      padding: 12,
      background: '#fff',
      width: 'max-content',
      display: 'flex',
      marginTop: 20,
    },
  },
}))

export const Footer: FC<Props> = () => {
  return (
    <Root container>
      <Grid item xs={12} md={8} className="footer-leftSide">
        <Grid container rowSpacing={{ xs: 8, md: 6 }} columnSpacing={{ xs: 0, md: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3">menu.</Typography>
            <Box className="footer-leftSide--divider" mb={4} />
            <MenuWrapper variant="footer" />
          </Grid>
          <Grid item xs={12} md={5}>
            <Box width={{ md: 220, xs: 220 }}>
              <Typography variant="h3">Bortnytskyi Oleksii</Typography>
              <Box className="footer-leftSide--divider" />
              <Typography variant="body2" fontWeight={600} mt={3}>
                designer, developer, creator, and just a cool pepper.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="footer-leftSide--createdWithLove">
              created in {new Date().getFullYear()} .//. with <span>❤</span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} className="footer-rightSide">
        <Grid container rowSpacing={4}>
          <SocialMedia />
          <Grid item xs={12}>
            <Box className="footer-rightSide--qrcodeBox">
              <MuiLink className="unstyled" href="https://www.buymeacoffee.com/webshark">
                <Image width="95px" height="95px" src={buyMeACoffeQR} alt="buyMeACoffeQR Icon" />
              </MuiLink>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Root>
  )
}
