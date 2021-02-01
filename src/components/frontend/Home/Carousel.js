import React from 'react'
import Slider from 'react-slick'
import { Container, Col, Row } from 'react-bootstrap'
import CarouselBanner1 from '../../../pages/Home/images/index-banner-01.jpg'
import CarouselBanner2 from '../../../pages/Home/images/index-banner-02.jpg'
import CarouselBanner3 from '../../../pages/Home/images/index-banner-03.jpg'
const CarouselBanner = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 1,
    value: 1,
    arrows: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '20%',
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: false,
        },
      },
    ],
  }
  return (
    <>
      <Container fluid>
        <Col xs={12} className="p-0 carousel1">
          <div>
            <Slider {...settings}>
              <div>
                <img src={CarouselBanner1} alt="" />
              </div>
              <div>
                <img src={CarouselBanner2} alt="" />
              </div>
              <div>
                <img src={CarouselBanner3} alt="" />
              </div>
            </Slider>
          </div>
        </Col>
      </Container>
    </>
  )
}

export default CarouselBanner
