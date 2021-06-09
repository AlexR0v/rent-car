import React from 'react'
import { PageContainer } from './home-page.styles'
import NavBar from '../../components/nav-bar'
import TopSection from '../../containers/top-section'
import BookCard from '../../containers/book-card'
import { Marginer } from '../../ui/marginer'
import BookingSteps from '../../containers/booking-steps'
import AboutUs from '../../containers/about-us'
import Footer from '../../containers/footer'

const HomePage = () => {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer
        direction='vertical'
        margin='4em'
      />
      <BookCard />
      <Marginer
        direction='vertical'
        margin='10em'
      />
      <BookingSteps />
      <Marginer
        direction='vertical'
        margin='8em'
      />
      <AboutUs />
      <Marginer
        direction='vertical'
        margin='8em'
      />


      <Footer />
    </PageContainer>
  )
}

export default HomePage

