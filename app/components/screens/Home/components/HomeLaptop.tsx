import { Grid, Typography, styled } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import ReactTyped from 'react-typed'

import { HeaderPhoto } from '@/assets/icons/photos'

import { CodeBlock } from './CodeBlock'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  position: 'relative',
  //   right: '-10%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  '& .display': {
    position: 'absolute',
    left: '20%',
    top: '50%',
    zIndex: -1,
    transform: 'translateY(-50%)',
    padding: `${theme.spacing(4)}`,
    background: '#141414',
    border: `3px solid #3A4245`,
    minWidth: 900,
    borderRadius: '35px 35px 0 0',
    '& .code': {
      padding: 20,
      background: '#21202E',
      flexWrap: 'nowrap',
      width: '100%',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '1520px',
      height: '900px',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
    },
  },
}))

export const HeaderLaptop: FC<Props> = (props) => {
  const linesCounter = 26
  const actions = [
    {
      id: 0,
      color: '#FF5F5A',
    },
    {
      id: 1,
      color: '#FFBE2E',
    },
    {
      id: 2,
      color: '#2ACA44',
    },
  ]
  return (
    <Root container className="laptop">
      <Grid item xs={12} minHeight={600}>
        <Box className="display">
          <Box className="code">
            <Box className="actions" sx={{ display: 'flex', gap: 1, mb: 2.5 }}>
              {actions.map((item: any) => (
                <Box
                  key={item.id}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    background: item.color,
                  }}
                />
              ))}
            </Box>

            <Grid container sx={{ display: 'flex', flexWrap: 'nowrap' }}>
              <Grid
                item
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mr: 3 }}
              >
                {[...Array(linesCounter)].map((e, i) => (
                  <Typography variant="body2" sx={{ color: '#3B3855', fontSize: 12 }} key={i}>
                    {i + 1}
                  </Typography>
                ))}
              </Grid>
              <Typography component={'pre'} variant="body2" fontSize={12}>
                <CodeBlock
                  text={`import { Grid, Typography, styled } from '@mui/material'
 type Props = {}
             
 const Root = styled(Grid)(({ theme }) => ({
   width: '100%',
   height: '100%',
   minHeight: '100vh',
   display: 'flex',
   justifyContent: 'center',
   padding: theme.spacing(4),
}))

 export const PreloaderWrapper = (props: Props) => {
 const [`}
                />{' '}
                <ReactTyped
                  strings={[`data,`, `language,`, `preloader,`]}
                  typeSpeed={250}
                  backSpeed={50}
                  loop
                  style={{
                    color: '#5790F9',
                  }}
                />
                {'  '}
                <ReactTyped
                  strings={[`setData`, `setLanguage`, `setPreloader`]}
                  typeSpeed={250}
                  backSpeed={50}
                  loop
                  style={{
                    color: '#5790F9',
                  }}
                />
                <CodeBlock
                  text={`] = useState({})
  
   return (
    <Root container>
      <Grid item className=`}
                />
                &quot;
                <ReactTyped
                  strings={[`preloader-container`, `preloader-wrapper--container`, `preloader-text`]}
                  typeSpeed={150}
                  backSpeed={50}
                  loop
                  style={{
                    color: '#9F74FA',
                  }}
                />
                &quot;
                <CodeBlock
                  text={`xs={12}>
        <Typography variant="h3" className=`}
                />
                &quot;
                <ReactTyped
                  strings={[`preloader-typography`, `preloader-text`, `preloader-heading`]}
                  typeSpeed={250}
                  backSpeed={50}
                  loop
                  style={{
                    color: '#9F74FA',
                  }}
                />
                &quot;
                <CodeBlock
                  text={` mr={4}>
          reacthero.
          <br />
          blog.
        </Typography>
      </Grid>
    </Root>
  )}`}
                />
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <svg width="1200" height="35" viewBox="0 0 1200 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 1.36271C0 0.712175 0.527195 0.184814 1.17752 0.184814H590.822C591.473 0.184814 592 0.712175 592 1.36271V18.4421H0V1.36271Z"
            fill="url(#paint0_linear_755_879)"
          />
          <path
            d="M1183.71 1.36271C1183.71 0.712175 1183.18 0.184814 1182.53 0.184814H592.883C592.233 0.184814 591.706 0.712175 591.706 1.36271V18.4421H1183.71V1.36271Z"
            fill="url(#paint1_linear_755_879)"
          />
          <path
            d="M521.054 13.1416H662.946C670.425 13.1416 676.487 7.34065 676.487 0.184814H507.513C507.513 7.34065 513.575 13.1416 521.054 13.1416Z"
            fill="#ABAEB0"
          />
          <path
            d="M520.465 13.1416H662.357C669.836 13.1416 675.898 7.34065 675.898 0.184814H506.924C506.924 7.34065 512.987 13.1416 520.465 13.1416Z"
            fill="url(#paint2_linear_755_879)"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M591.117 18.4421H0C0 18.4421 25.9055 34.9326 110.982 34.9326H591.117H592.294H1073.02C1158.09 34.9326 1184 18.4421 1184 18.4421H592.294H591.117Z"
            fill="url(#paint3_linear_755_879)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_755_879"
              x1="-1.01873e-06"
              y1="9.60713"
              x2="592"
              y2="9.6071"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#717576" />
              <stop offset="0.016907" stopColor="#9C9FA1" />
              <stop offset="0.0353058" stopColor="#9C9FA1" />
              <stop offset="0.0571855" stopColor="#797E82" />
              <stop offset="0.0979612" stopColor="#797E82" />
              <stop offset="0.151169" stopColor="#B2B5B7" />
              <stop offset="0.756906" stopColor="#CACDCF" />
              <stop offset="1" stopColor="#CACDCF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_755_879"
              x1="1183.71"
              y1="9.60713"
              x2="591.706"
              y2="9.6071"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#717576" />
              <stop offset="0.016907" stopColor="#9C9FA1" />
              <stop offset="0.0353058" stopColor="#9C9FA1" />
              <stop offset="0.0571855" stopColor="#797E82" />
              <stop offset="0.0979612" stopColor="#797E82" />
              <stop offset="0.151169" stopColor="#B2B5B7" />
              <stop offset="0.756906" stopColor="#CACDCF" />
              <stop offset="1" stopColor="#CACDCF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_755_879"
              x1="506.924"
              y1="6.66322"
              x2="675.898"
              y2="6.66322"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopOpacity="0.5" />
              <stop offset="0.139373" stopColor="#818487" stopOpacity="0" />
              <stop offset="0.860627" stopColor="#818487" stopOpacity="0" />
              <stop offset="1" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_755_879"
              x1="592"
              y1="18.4421"
              x2="592"
              y2="34.9326"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#838688" />
              <stop offset="1" stopColor="#17191B" />
            </linearGradient>
          </defs>
        </svg>
      </Grid>
    </Root>
  )
}
