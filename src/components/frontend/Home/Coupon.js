import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Container, Col, Row, Button } from 'react-bootstrap'

function Coupon() {
  const [couponArray1, setCouponArray1] = useState('')
  const [couponArray2, setCouponArray2] = useState('')
  const [couponArray3, setCouponArray3] = useState('')
  const [couponCoverUrl1, setCouponCoverUrl1] = useState('')
  const [couponCoverUrl2, setCouponCoverUrl2] = useState('')
  const [couponCoverUrl3, setCouponCoverUrl3] = useState('')

  const getCoupon1 = (e) => {
    Axios.get(`http://localhost:5000/dashboard/adsforproduct1`).then(
      (response) => {
        const data = response.data
      }
    )
  }

  const getAll = () => {
    Axios.get(`http://localhost:5000/dashboard/allproduct`).then((response) => {
      const productData = response.data
      Axios.get(`http://localhost:5000/dashboard/allads`).then((response) => {
        const adsData = response.data
        let couponProductArray = []
        let couponProductID1
        let couponProductID2
        let couponProductID3
        for (let i = 0; i < adsData.length; i++) {
          couponProductArray.push(
            adsData[i].productid1,
            adsData[i].productid2,
            adsData[i].productid3
          )
        }
        couponProductID1 = couponProductArray.slice(0, 3)
        couponProductID2 = couponProductArray.slice(3, 6)
        couponProductID3 = couponProductArray.slice(6, 9)

        let coupon1TitleArray = []
        let coupon2TitleArray = []
        let coupon3TitleArray = []

        let coupon1ImgArray = []
        let coupon2ImgArray = []
        let coupon3ImgArray = []

        let coupon1PriceArray = []
        let coupon2PriceArray = []
        let coupon3PriceArray = []
        for (let i = 0; i < productData.length; i++) {
          for (let j = 0; j < couponProductID1.length; j++) {
            if (productData[i].id === couponProductID1[j]) {
              coupon1TitleArray.push(productData[i].title)
              coupon1PriceArray.push(productData[i].price)
              coupon1ImgArray.push(productData[i].image_path)
            }
          }
          for (let k = 0; k < couponProductID2.length; k++) {
            if (productData[i].id === couponProductID2[k]) {
              coupon2TitleArray.push(productData[i].title)
              coupon2PriceArray.push(productData[i].price)
              coupon2ImgArray.push(productData[i].image_path)
            }
          }
          for (let l = 0; l < couponProductID3.length; l++) {
            if (productData[i].id === couponProductID3[l]) {
              coupon3TitleArray.push(productData[i].title)
              coupon3PriceArray.push(productData[i].price)
              coupon3ImgArray.push(productData[i].image_path)
            }
          }
        }
        let couponRowArray1 = []
        for (let i = 0; i < adsData.length; i++) {
          let couponImg1 = ''
          couponImg1 = coupon1ImgArray[i].split(',')
          couponImg1 = couponImg1[0]
          let couponImgUrl1 = couponImg1
            ? 'http://localhost:5000/adsProduct/' + couponImg1
            : ''
          let couponCover = adsData[0].img
          let couponCoverUrl1 = couponCover
            ? 'http://localhost:5000/adsCover/' + couponCover
            : ''
          setCouponCoverUrl1(couponCoverUrl1)
          couponRowArray1.push(
            <>
              <Col xs={12} md={4} className="promo-rwd">
                <div className="promo1">
                  <img src={couponImgUrl1} alt="" />
                </div>
                <div className="promo-info">
                  <div className="promo-title">{coupon1TitleArray[i]}</div>
                  <div className="promo-brand">小山坡</div>
                  <span className="promo-price">
                    NT$ {coupon1PriceArray[i]}
                  </span>
                  {/* <span className="promo-sub-price">{data[i].sale_price}</span> */}
                </div>
              </Col>
            </>
          )
        }
        setCouponArray1(couponRowArray1)

        let couponRowArray2 = []
        for (let i = 0; i < adsData.length; i++) {
          let couponImg2 = ''
          couponImg2 = coupon2ImgArray[i].split(',')
          couponImg2 = couponImg2[0]
          let couponImgUrl2 = couponImg2
            ? 'http://localhost:5000/adsProduct/' + couponImg2
            : ''
          let couponCover = adsData[1].img
          let couponCoverUrl2 = couponCover
            ? 'http://localhost:5000/adsCover/' + couponCover
            : ''
          setCouponCoverUrl2(couponCoverUrl2)
          couponRowArray2.push(
            <>
              <Col xs={12} md={4} className="promo-rwd">
                <div className="promo2">
                  <img src={couponImgUrl2} alt="" />
                </div>
                <div className="promo-info">
                  <div className="promo-title">{coupon3TitleArray[i]}</div>
                  <div className="promo-brand">小山坡</div>
                  <span className="promo-price">
                    NT$ {coupon2PriceArray[i]}
                  </span>
                  {/* <span className="promo-sub-price">{data[i].sale_price}</span> */}
                </div>
              </Col>
            </>
          )
        }
        setCouponArray2(couponRowArray2)

        let couponRowArray3 = []
        for (let i = 0; i < adsData.length; i++) {
          let couponImg3 = ''
          couponImg3 = coupon3ImgArray[i].split(',')
          couponImg3 = couponImg3[0]
          let couponImgUrl3 = couponImg3
            ? 'http://localhost:5000/adsProduct/' + couponImg3
            : ''
          let couponCover = adsData[2].img
          let couponCoverUrl3 = couponCover
            ? 'http://localhost:5000/adsCover/' + couponCover
            : ''
          setCouponCoverUrl3(couponCoverUrl3)
          couponRowArray3.push(
            <>
              <Col xs={12} md={4} className="promo-rwd">
                <div className="promo3">
                  <img src={couponImgUrl3} alt="" />
                </div>
                <div className="promo-info">
                  <div className="promo-title">{coupon3TitleArray[i]}</div>
                  <div className="promo-brand">小山坡</div>
                  <span className="promo-price">
                    NT$ {coupon3PriceArray[i]}
                  </span>
                  {/* <span className="promo-sub-price">{data[i].sale_price}</span> */}
                </div>
              </Col>
            </>
          )
        }
        setCouponArray3(couponRowArray3)
      })
    })
  }
  useEffect(() => {
    getCoupon1()
    getAll()
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
          <Col xs={12} md={4} className="promo-rwd">
            <div className="promo-primary">
              <img src={couponCoverUrl1} alt="" className="w-100" />
            </div>
          </Col>
          <Col xs={12} md={8} className="p-0">
            <Row className="promo-wrapper m-0">{couponArray1}</Row>
          </Col>
        </Row>
        <Row className="promo-wrapper">
          <Col xs={12} md={4} className="promo-rwd">
            <div className="promo-primary">
              <img src={couponCoverUrl2} alt="" className="w-100" />
            </div>
          </Col>
          <Col xs={12} md={8} className="p-0">
            <Row className="promo-wrapper m-0">{couponArray2}</Row>
          </Col>
        </Row>
        <Row className="promo-wrapper">
          <Col xs={12} md={4} className="promo-rwd">
            <div className="promo-primary">
              <img src={couponCoverUrl3} alt="" className="w-100" />
            </div>
          </Col>
          <Col xs={12} md={8} className="p-0">
            <Row className="promo-wrapper m-0">{couponArray3}</Row>
          </Col>
        </Row>
        <hr />
      </Container>
    </>
  )
}

export default Coupon
