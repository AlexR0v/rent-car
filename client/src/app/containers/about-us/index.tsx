import React from 'react'
import { AboutUsContainer, CarContainer, InfoContainer, InfoText, Title } from './about-us.styles'
import JeepImg from '../../../assets/images/jeep.png'

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img
          src={JeepImg}
          alt='jeep'
        />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  )
}

export default AboutUs
