import { Box, Button, Menu, MenuItem, styled } from '@mui/material'
import { memo, useContext, useState } from 'react'

import { home_data } from '@/components/screens/Home/data'

import { UserLanguageContext } from '../Layout'

const Root = styled(Menu)(({ theme }) => ({
  '& li.language_menu--item-active': {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.dark,
    fontWeight: 600,
  },
  '& li.language_menu--item': {
    color: theme.palette.text.primary,
    fontWeight: 400,
  },
}))

const LanguageHandler = memo(() => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const languageProps = useContext(UserLanguageContext)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const { languages } = home_data

  return (
    <Box width={'100%'}>
      <Button
        sx={{ minWidth: 'max-content' }}
        disableRipple
        variant="contained"
        className="unStyled"
        onClick={handleClick}
      >
        {languageProps.language ? languageProps.language : 'en'}
      </Button>
      <Root
        id="language_menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {languages.map((item, id) => (
          <MenuItem
            onClick={() => {
              languageProps.setLanguage(item)
              window.localStorage.setItem('language_folio', item)
              setAnchorEl(null)
            }}
            className={`language_menu--item ${item === languageProps.language ? 'active' : ''}`}
            key={id}
          >
            {item}
          </MenuItem>
        ))}
      </Root>
    </Box>
  )
})

export default LanguageHandler
