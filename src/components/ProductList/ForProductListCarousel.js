import React from 'react'
import { Carousel } from 'react-bootstrap'
import './ForProductListCarousel.scss'

import Banner1 from '../../assets/img/products/ProductListCarousel/2069577.jpg'
import Banner2 from '../../assets/img/products/ProductListCarousel/330862-1P30G03J554.jpg'

const ForProductListCarousel = () => {
  return (
    <>
      <Carousel className="ForProductListCarousel">
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default ForProductListCarousel
