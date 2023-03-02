import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Link as MuiLink, styled } from '@mui/material'
import React, { FC, useState } from 'react'

import { MenuItemProps } from '@/shared/types/home'

type Props = {
  menu: MenuItemProps[]
  title: string
}

const Root = styled(List)(({ theme }) => ({}))

export const MenuWrapperList: FC<Props> = ({ menu, title }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <Root>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? (
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 10.0001C3 9.53984 3.3731 9.16675 3.83333 9.16675H17.1667C17.6269 9.16675 18 9.53984 18 10.0001C18 10.4603 17.6269 10.8334 17.1667 10.8334H3.83333C3.3731 10.8334 3 10.4603 3 10.0001Z"
              fill="#1F1712"
            />
          </svg>
        ) : (
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.744078 1.07733C1.06951 0.751893 1.59715 0.751893 1.92259 1.07733L8 7.15474L14.0774 1.07733C14.4028 0.751893 14.9305 0.751893 15.2559 1.07733C15.5814 1.40277 15.5814 1.9304 15.2559 2.25584L8 9.51176L0.744078 2.25584C0.418641 1.9304 0.418641 1.40277 0.744078 1.07733Z"
              fill="#1F1712"
              fillOpacity="0.8"
            />
          </svg>
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menu.map((item: MenuItemProps) => (
            <>
              {item.categoryRelateds[0].title === title ? (
                <MuiLink href={item.slug} key={item.id} className="unstyled">
                  <ListItemButton>
                    <ListItemText primary={`— ${item.name}`} />
                  </ListItemButton>
                </MuiLink>
              ) : null}
            </>
          ))}
        </List>
      </Collapse>
    </Root>
  )
}
