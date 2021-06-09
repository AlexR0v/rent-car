import React from 'react'
import { NavbarContainer } from './nav-bar.styles'
import Logo from '../../ui/logo'
import NavItems from './NavItems'

const NavBar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <NavItems />
    </NavbarContainer>
  )
}

export default NavBar

