import { Box, Grid, Typography, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

type Props = {
  index: string
  name: string
  enName: string
}

const Root = styled(Grid)(({ theme }) => ({}))

export const SectionHeader: FC<Props> = ({ index, name, enName }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'nowrap', columnGap: 2 }}>
      <Typography variant="h1" sx={{ fontSize: 75, lineHeight: '60px' }} component="div">
        {index}
      </Typography>
      <Root container wrap="nowrap" direction="column">
        <Grid item>
          <Typography variant="h4">{name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">{enName}</Typography>
        </Grid>
      </Root>
    </Box>
  )
}
