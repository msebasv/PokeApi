import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import {
  NavbarContainer,
  NavbarWrapper,
  IconLogo,
  Menu,
  MenuItem,
  MenuItemLink,
  IconLogoMobile,
} from './Navbar.elements'

import Logo from '../logo/Logo'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const changeClick = () => {
    setClick(!click)
  }

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <IconLogo>
            <Logo />
          </IconLogo>
          <IconLogoMobile onClick={() => changeClick()}>
            {click ? <FaTimes /> : <FaBars />}
          </IconLogoMobile>
          <Menu click={click}>
            <MenuItem onClick={() => changeClick()}>
              <Link to="/" style={MenuItemLink}>
                HOME
              </Link>
            </MenuItem>
            <MenuItem onClick={() => changeClick()}>
              <Link to="/pokemon" style={MenuItemLink}>
                POKEMON
              </Link>
            </MenuItem>
            <MenuItem onClick={() => changeClick()}>
              <Link to="/about" style={MenuItemLink}>
                ABOUT
              </Link>
            </MenuItem>
            <MenuItem onClick={() => changeClick()}>
              <Link to="/contact" style={MenuItemLink}>
                CONTACT
              </Link>
            </MenuItem>
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  )
}

export default Navbar
