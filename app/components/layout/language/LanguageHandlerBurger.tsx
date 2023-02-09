import { Button, Grid, styled } from '@mui/material'
import { memo, useContext } from 'react'

import { home_data } from '@/components/screens/Home/data'

import { UserLanguageContext } from '../Layout'

type Props = {
  setHideMenu: (e: null | HTMLElement) => void
}

const LanguageHandlerBurger = memo(({ setHideMenu }: Props) => {
  const languageProps = useContext(UserLanguageContext)

  const { languages } = home_data

  return (
    <Grid container width={'100%'}>
      {languages.map((item, index) => (
        <Grid item sx={{ display: 'flex', justifyContent: 'center' }} key={index} xs={12 / languages.length}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            disableRipple
            onClick={() => {
              languageProps.setLanguage(item)
              window.localStorage.setItem('language_folio', item)
              setHideMenu(null)
            }}
            className={`unStyled language_menu--item ${item === languageProps.language ? 'active' : ''}`}
          >
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  )
})

export default LanguageHandlerBurger
