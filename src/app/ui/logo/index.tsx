import React from 'react'
import carLogoImg from '../../../assets/images/car-logo.png'
import { LogoContainer, LogoImage, LogoText } from './logo.styles'

const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage>
        <img
          src={carLogoImg}
          alt='logo'
        />
      </LogoImage>
      <LogoText>
        Yourcar.
      </LogoText>
    </LogoContainer>
  )
}

export default Logo

