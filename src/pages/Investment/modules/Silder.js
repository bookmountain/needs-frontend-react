import React from 'react'
import { Carousel } from 'react-bootstrap'

const Silder = () => {
  return (
    <>
      <div className="container silderSec">
        <div className="secTitle">
          <h4>設計品牌風格</h4>
          <span>不懂團像處理、程式編輯也能輕鬆操作</span>
        </div>
        <Carousel className="templateSilder">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('@assets/img/investment/2_template1.jpg')}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('@assets/img/investment/2_template2.jpg')}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('@assets/img/investment/2_template3.jpg')}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('@assets/img/investment/2_template4.jpg')}
              alt="Forth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Silder
