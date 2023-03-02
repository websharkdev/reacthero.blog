import { Box, Grid, Typography, styled } from '@mui/material'
import moment from 'moment'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import { SMPhoneImage } from '@/assets/icons/photos'

import { PhoneNotioficationsData } from '../../../data'

import { PhoneNotification } from './PhoneNotification'
import { ActualTime } from './Time'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  width: 386,
  height: 700,
  margin: '0 auto',
  position: 'relative',
  transform: 'rotate(-15deg)',
  [theme.breakpoints.down('xl')]: {
    transform: 'rotate(0)',
  },
  '& .notch-time': {
    position: 'absolute',
    left: 55,
    top: 28,
  },
  '& .screen-time': {
    position: 'absolute',
    left: '50%',
    top: 125,
    transform: 'translate(-50%, 0)',
  },
  '& .screen-notifications': {
    position: 'absolute',
    left: '50%',
    width: 'calc(100% - 45px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    top: 300,
    transform: 'translate(-50%, 0)',
  },
}))

export const SocialMediaPhone: FC<Props> = (props) => {
  const [dateState, setDateState] = useState(moment())
  useEffect(() => {
    setDateState(moment())
  }, [])

  return (
    <Root container>
      <Grid item className="notch-time">
        <Typography variant="body1" sx={{ color: '#fff', fontSize: 12, fontWeight: 600 }}>
          <ActualTime />
        </Typography>
      </Grid>
      <Grid item className="screen-time">
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Typography sx={{ color: '#fff', fontWeight: 400, fontSize: 74 }}>
            <ActualTime />
          </Typography>
          <Typography sx={{ color: '#fff', fontWeight: 400, fontSize: 20 }}>
            {moment(dateState).format('dddd, MMM DD')}
          </Typography>
        </Box>
      </Grid>

      <Grid item className="screen-notifications">
        <Grid container wrap="nowrap" direction="column" rowSpacing={4}>
          {PhoneNotioficationsData.map((notification: any) => (
            <Grid
              item
              xs={12}
              key={notification.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <PhoneNotification data={notification} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Box sx={{ position: 'absolute', zIndex: -1 }}>
        <Image src={SMPhoneImage} alt="SMPhone-image" width={386} height={783} />
      </Box>
      {/* <Grid item>
        <Typography>{moment(dateState).format('H:m')}</Typography>
        <Typography>{moment(dateState).format('H:m')}</Typography>
      </Grid> */}
    </Root>
  )
}
