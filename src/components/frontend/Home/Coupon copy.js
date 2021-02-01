import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Container, Col, Row, Button } from 'react-bootstrap'

function Coupon() {
  const [couponArray1, setCouponArray1] = useState('')
  const [couponArray2, setCouponArray2] = useState('')
  const [couponArray3, setCouponArray3] = useState('')

  const getCoupon1 = (e) => {
    Axios.get(`http://localhost:5000/dashboard/adsforproduct1`).then(
      (response) => {
        const data = response.data
        console.log(data)
        let couponRowArray1 = []
        for (let i = 0; i < data.length; i++) {
          let productImg1 = data[i].image_path.split(',')
          productImg1 = productImg1[0]
          let productImg1Url = productImg1
            ? 'http://localhost:5000/adsProduct/' + productImg1
            : ''
          couponRowArray1.push(
            <>
              <Col xs={12} style={{ maxWidth: '22.2%' }}>
                <div className="promo3">
                  <img src={productImg1Url} alt="" />
                </div>
                <div className="promo-info">
                  <div className="promo-title">{data[i].title}</div>
                  <div className="promo-brand">小山坡</div>
                  <span className="promo-price">NT$ {data[i].price}</span>
                  <span className="promo-sub-price">{data[i].sale_price}</span>
                </div>
              </Col>
            </>
          )
        }
        setCouponArray1(couponRowArray1)
      }
    )
  }

  const getCoupon2 = (e) => {
    Axios.get(`http://localhost:5000/dashboard/adsforproduct2`).then(
      (response) => {
        const data = response.data
        console.log(data)
        let couponRowArray2 = []
        for (let i = 0; i < data.length; i++) {
          let productImg2 = data[i].image_path.split(',')
          productImg2 = productImg2[0]
          let productImg2Url = productImg2
            ? 'http://localhost:5000/adsProduct/' + productImg2
            : ''
          couponRowArray2.push(
            <>
              <Col xs={12} style={{ maxWidth: '22.2%' }}>
                <div className="promo3">
                  <img src={productImg2Url} alt="" />
                </div>
                <div className="promo-info">
                  <div className="promo-title">{data[i].title}</div>
                  <div className="promo-brand">小山坡</div>
                  <span className="promo-price">NT$ {data[i].price}</span>
                  <span className="promo-sub-price">{data[i].sale_price}</span>
                </div>
              </Col>
            </>
          )
        }
        setCouponArray2(couponRowArray2)
      }
    )
  }

  const getCoupon3 = (e) => {
    Axios.get(`http://localhost:5000/dashboard/adsforproduct3`).then(
      (response) => {
        const data = response.data
        console.log(data)
        let couponRowArray3 = []
        for (let i = 0; i < data.length; i++) {
          let productImg3 = data[i].image_path.split(',')
          productImg3 = productImg3[0]
          let productImg3Url = productImg3
            ? 'http://localhost:5000/adsProduct/' + productImg3
            : ''
          couponRowArray3.push(
            <>
              <Col xs={12} style={{ maxWidth: '22.2%' }}>
                <div className="promo3">
                  <img src={productImg3Url} alt="" />
                </div>
                <div className="promo-info">
                  <div className="promo-title">{data[i].title}</div>
                  <div className="promo-brand">小山坡</div>
                  <span className="promo-price">NT$ {data[i].price}</span>
                  <span className="promo-sub-price">{data[i].sale_price}</span>
                </div>
              </Col>
            </>
          )
        }
        setCouponArray3(couponRowArray3)
      }
    )
  }
  useEffect(() => {
    getCoupon1()
    getCoupon2()
    getCoupon3()
  }, [])
  return (
    <>
      <Container>
        <hr />
        <Row>
          <Col xs={12} className="my-5">
            <div className="promo-coupon">
              <img
                src={require('../../../pages/Home/images/discount.jpg')}
                alt=""
              />
            </div>
          </Col>
        </Row>
        <Row className="promo-wrapper">
          <Col xs={12} style={{ maxWidth: '33.3%' }}>
            <div className="promo-primary">
              <img
                src={require('../../../pages/Home/images/promo0.jpg')}
                alt=""
              />
            </div>
          </Col>
          {couponArray1}
        </Row>
        <Row className="promo-wrapper">
          <Col xs={12} style={{ maxWidth: '33.3%' }}>
            <div className="promo-primary">
              <img
                src={require('../../../pages/Home/images/promo1.jpg')}
                alt=""
              />
            </div>
          </Col>
          {couponArray2}
        </Row>
        <Row className="promo-wrapper">
          <Col xs={12} style={{ maxWidth: '33.3%' }}>
            <div className="promo-primary">
              <img
                src={require('../../../pages/Home/images/promo2.jpg')}
                alt=""
              />
            </div>
          </Col>
          {couponArray3}
        </Row>
        <hr />
      </Container>
    </>
  )
}

export default Coupon
