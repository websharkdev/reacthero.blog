import { Box, Grid, Link as MuiLink, Typography, styled } from '@mui/material'
import { FC } from 'react'
import { UkraineAidCardProps } from 'shared/types/home'

type Props = {
  data: UkraineAidCardProps
}

const Root = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(4),
  background: '#f6f6f6',
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  '& .aid-link-container': {
    position: 'relative',
  },
  '& .aid-image-container': {
    position: 'relative',
    '& .aid-image': {
      width: '100%',
      height: 'max-contentn',
      maxHeight: 200,
      overflow: 'hidden',
      borderRadius: theme.shape.borderRadius,
    },
  },
}))

export const HelpUkraineAidCard: FC<Props> = ({ data }) => {
  const { title, text, image, link } = data
  return (
    <Root container className="aid-wrapper" rowSpacing={4}>
      <Grid item xs={12} className="aid-title-container">
        <Typography variant="h3" className="aid-title">
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} className="aid-text-container">
        <Typography variant="body2" className="aid-text">
          {text}
        </Typography>
      </Grid>
      <Grid item xs={12} className="aid-image-container">
        <Box className="aid-image">
          <img src={image} alt={title} width="100%" height="max-content" />
        </Box>
      </Grid>
      <Grid item xs={12} className="aid-link-container">
        <MuiLink href={link.link} className="parallax-link--children-item">
          {link.title}
        </MuiLink>
      </Grid>
    </Root>
  )
}
