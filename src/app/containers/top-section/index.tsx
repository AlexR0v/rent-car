import React from 'react'

import MclarenCarImg from '../../../assets/images/mclaren-orange-big.png'
import BlobImg from '../../../assets/images/blob.svg'
import {
  BlobContainer, ButtonsContainer, Description, LeftContainer, RightContainer, Slogan,
  StandaloneCar,
  TopSectionContainer
} from './top-section.styled'
import { Button } from '../../ui/button'

const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Qulity Car's With Us</Slogan>
        <Description>
          Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like
        </Description>
        <ButtonsContainer>
          <Button text='Book Your Ride' />
          <Button
            theme='filled'
            text='Sell Your Car'
          />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img
            src={BlobImg}
            alt='car'
          />
        </BlobContainer>
        <StandaloneCar>
          <img
            src={MclarenCarImg}
            alt='car'
          />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  )
}

export default TopSection
