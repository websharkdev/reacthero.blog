import { Box, Grid, Typography, styled } from '@mui/material'
import moment from 'moment'
import { FC } from 'react'

import { PhoneNotificationProps } from '@/shared/types/home'

type Props = {
  data: PhoneNotificationProps
}

const Root = styled(Grid)(({ theme }) => ({
  width: 'calc(100% - 20px)',
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  position: 'relative',
  '&::before': {
    content: '""',
    width: '100%',
    borderRadius: 5,
    height: '100%',
    background: 'rgba(196, 196, 196, 0.2)',
    backdropFilter: 'blur(20px)',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
  },
}))

export const PhoneNotification: FC<Props> = ({ data }) => {
  const { title, text, ago } = data
  const locale = moment.locale()

  const rtf = new Intl.RelativeTimeFormat(locale, {
    numeric: 'always',
    style: 'short',
    localeMatcher: 'best fit',
  })

  return (
    <Root container>
      <Grid item xs={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', columnGap: 5 }}>
          <Typography sx={{ fontSize: 12 }}>reacthero</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 600 }}>{rtf.format(-ago, 'minutes')}</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} my={0.6}>
        <Typography variant="h6" sx={{ fontSize: 14 }}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="div" sx={{ fontSize: 12 }}>
          {text.length > 100 ? `${text.slice(0, 100)}...` : text}
        </Typography>
      </Grid>
    </Root>
  )
}
