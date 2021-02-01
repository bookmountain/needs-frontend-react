import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { AiOutlineShop } from 'react-icons/ai'

function MerchantInfo(props) {
  const { merchantInfo } = props
  return (
    <div className="merchant-info">
      <Container>
        <Row className="justify-content-between py-4">
          <Col md={1}>
            {merchantInfo.index_img ? (
              <img
                className="merchant-logo rounded"
                src={`http://localhost:5000/img/brands/${merchantInfo.index_img}`}
                alt=""
              />
            ) : (
              ''
            )}
          </Col>
          <Col md={3}>
            <h5 className="mb-3">{merchantInfo.brand_name}</h5>
            <button className="btn btn-sm btn-danger mr-2">+ 加入關注</button>
            <button className="btn btn-sm btn-secondary">
              <AiOutlineShop /> 逛逛店家
            </button>
          </Col>
          <Col md={3}>
            <p>
              評價：
              <span className="text-point">
                {merchantInfo.review} ( {merchantInfo.review_amount} 個評價 )
              </span>
            </p>
            <p className="m-0">
              加入時間：
              <span className="text-point">
                {merchantInfo.created_months}個月 前
              </span>
            </p>
          </Col>
          <Col md={2}>
            <p>
              粉絲：<span className="text-point">{merchantInfo.fans}</span>
            </p>
            <p className="m-0">
              商品：
              <span className="text-point">{merchantInfo.product_amount}</span>
            </p>
          </Col>
          <Col md={2}>
            <p>
              回應速度：
              <span className="text-point">{merchantInfo.reply_speed}</span>
            </p>
            <p className="m-0">
              平均出貨速度：
              <span className="text-point">{merchantInfo.delivery_days}</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MerchantInfo
