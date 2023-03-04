import { Box, Grid, Link as MuiLink, Tooltip, styled } from '@mui/material'
import { memo, useEffect, useState } from 'react'

import { getSocialMedia } from '@/shared/api/home.api'
import { SocialMediaProps } from '@/shared/types/home'

const Root = styled(Box)(({ theme }) => ({
  height: 'max-content',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  '& .social-media--divider': {
    width: '100%',
    height: 2,
    background: theme.palette.primary.dark,
    [theme.breakpoints.down('md')]: {
      maxWidth: 64,
    },
    '&.light': {
      background: theme.palette.primary.light,
    },
  },
}))

export const SocialMedia = memo(() => {
  const [data, setData] = useState<SocialMediaProps[]>([])

  useEffect(() => {
    getSocialMedia().then((res: SocialMediaProps[]) => {
      setData(res)
    })
  }, [])

  return (
    <Root rowGap={4}>
      <Box className="social-media--divider" />

      <Grid container spacing={2}>
        {data.map((socialMediaItem: SocialMediaProps) => (
          <Grid item key={socialMediaItem.id}>
            <Tooltip title={socialMediaItem.title}>
              <MuiLink
                href={socialMediaItem.link}
                className="social-media--item unstyled"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialMediaItem.icon.url} alt={socialMediaItem.icon.fileName} />
              </MuiLink>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Root>
  )
})
