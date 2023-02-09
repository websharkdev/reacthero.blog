import { Box, styled } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { ParallaxLink } from 'shared/hooks'

import { HelpUkraine_data } from './data'

const Root = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',
  padding: `${theme.spacing(1.5)} ${theme.spacing(3.5)}`,
  [theme.breakpoints.down('md')]: {
    padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
  },
  background: '#242424',
  height: 'max-content',
  '& a': {
    color: theme.palette.primary.contrastText,
  },
}))

export const HelpUkraine = () => {
  const [innerRef, inView] = useInView()
  return (
    <Root ref={innerRef}>
      <ParallaxLink data={HelpUkraine_data} baseVelocity={-0.05} fontSize={18} inView={inView} />
    </Root>
  )
}
