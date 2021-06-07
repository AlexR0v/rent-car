import React from 'react'
import { PageContainer } from './home-page.styles'
import NavBar from '../../components/nav-bar'
import TopSection from '../../containers/top-section'

const HomePage = () => {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
    </PageContainer>
  )
}

export default HomePage

