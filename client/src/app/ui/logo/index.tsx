import React from 'react'
import CarLogoImg from '../../../assets/images/car-logo.png'
import CarLogoDarkImg from '../../../assets/images/car-logo-dark.png'
import { LogoContainer, Image, LogoText } from './logo.styles'

interface ILogoProps {
  color?: 'white' | 'dark';
  bgColor?: 'white' | 'dark';
}

const Logo = (props: ILogoProps) => {
  const { color, bgColor } = props

  return (
    <LogoContainer>
      <Image>
        <img
          src={bgColor === 'dark' ? CarLogoDarkImg : CarLogoImg}
          alt='logo'
        />
      </Image>
      <LogoText color={color || 'dark'}>Yourcar.</LogoText>
    </LogoContainer>
  )
}

export default Logo

