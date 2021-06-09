import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Logo from '../../ui/logo'
import {
  AboutContainer, AboutText, BottomContainer, CopyrightText, FooterContainer, HeaderTitle,
  HorizontalContainer,
  InnerContainer, LinksList, ListItem, RedIcon, SectionContainer, SmallText
} from './footer.styles'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo
            color='white'
            bgColor='dark'
          />
          <AboutText>
            Yourcar is a Car renting and selling company located in many
            countries across the world which has high quality cars and top rated
            service.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href='#'>Home</a>
            </ListItem>
            <ListItem>
              <a href='#'>About Us</a>
            </ListItem>
            <ListItem>
              <a href='#'>Services</a>
            </ListItem>
            <ListItem>
              <a href='#'>Models</a>
            </ListItem>
            <ListItem>
              <a href='#'>Blog</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href='#'>FAQ</a>
            </ListItem>
            <ListItem>
              <a href='#'>Contact Us</a>
            </ListItem>
            <ListItem>
              <a href='#'>Support</a>
            </ListItem>
            <ListItem>
              <a href='#'>Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href='#'>Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+7 999 555 55 55</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@yourcar.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Yourcar. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  )
}

export default Footer
