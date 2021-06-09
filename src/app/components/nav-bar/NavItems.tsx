import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { ListContainer, NavItem } from './nav-bar.styles'
import { useMediaQuery } from 'react-responsive'
import { SCREENS } from '../../ui/responsive'
import menuStyles from './menu.styles'

interface Props {
  menu: boolean
}

const MenuContainer = ({ menu }: Props) => (
  <ListContainer menu={menu}>
    <NavItem menu={menu}>
      <a href='#'>Home</a>
    </NavItem>
    <NavItem menu={menu}>
      <a href='#'>Cars</a>
    </NavItem>
    <NavItem menu={menu}>
      <a href='#'>Services</a>
    </NavItem>
    <NavItem menu={menu}>
      <a href='#'>Contact Us</a>
    </NavItem>
  </ListContainer>
)

const NavItems = () => {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

  if (isMobile) {
    return (
      <Menu
        right
        styles={menuStyles}
      >
        <MenuContainer menu={true} />
      </Menu>
    )
  }

  return <MenuContainer menu={false} />
}

export default NavItems

