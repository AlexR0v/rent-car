import React, { useEffect, useState } from 'react'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { CarsContainer, Title, TopCarsContainer } from './top-cars.styles'
import Car from '../../components/car'
import { ICar } from '../../../typings/car'
import { useMediaQuery } from 'react-responsive'
import { SCREENS } from '../../ui/responsive'
import carService from '../../services/carService'

const testCar: ICar = {
  name: 'Audi S3 Car',
  mileage: '10k',
  thumbnailSrc:
    'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
  dailyPrice: 70,
  monthlyPrice: 1600,
  gearType: 'Auto',
  gas: 'Petrol',
}

const testCar2: ICar = {
  name: 'HONDA cITY 5 Seater Car',
  mileage: '20k',
  thumbnailSrc:
    'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
  dailyPrice: 50,
  monthlyPrice: 1500,
  gearType: 'Auto',
  gas: 'Petrol',
}

const TopCars = () => {
  const [ current, setCurrent ] = useState(0)
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

  const fetchTopCars = async () => {
    const cars = await carService.getCars().catch(error => {
      console.error(error)
    })
    console.log(cars)
  }

  useEffect(() => {
    fetchTopCars()
  }, [])

  const cars = [
    <Car {...testCar} />,
    <Car {...testCar2} />,
    <Car {...testCar} />,
    <Car {...testCar2} />
  ]

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3)

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            'clickToChange',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots
          value={current}
          onChange={setCurrent}
          number={numberOfDots}
        />
      </CarsContainer>
    </TopCarsContainer>
  )
}

export default TopCars
