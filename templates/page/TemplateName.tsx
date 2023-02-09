import { Grid, styled } from '@mui/material'
import { FC, useEffect, useState } from 'react'

import styles from './templateName.module.sass'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({}))

export const TemplateName: FC<Props> = (props) => {
  return (
    <Root container className={styles.TemplateName}>
      <Grid item>TemplateName</Grid>
    </Root>
  )
}
