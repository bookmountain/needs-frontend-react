import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function CarouselImage(props) {
  const { productDetail } = props
  return (
    <Carousel className="w-88">
      {productDetail.image_path &&
        productDetail.image_path.map((value, index) => {
          return (
            <div key={index} className="photos-content">
              <img
                className="w-100 h-100 cover"
                src={`http://localhost:5000/img/products/${value}`}
                alt=""
              />
            </div>
          )
        })}
    </Carousel>
  )
}

export default CarouselImage
