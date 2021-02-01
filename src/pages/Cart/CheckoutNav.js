import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

function CheckoutNav(props) {
  return (
    <>
      <Row className="justify-content-center text-center checkout-nav">
        <Col md={2} className="step-wrapper p-0 active">
          <div className="step-item">
            <span className="text">1</span>
          </div>
          <p className="mt-4">購物車</p>
        </Col>
        <Col md={2} className="step-wrapper p-0">
          <div className="step-item">
            <span className="text">2</span>
          </div>
          <p className="mt-4">付款方式</p>
        </Col>
        <Col md={2} className="step-wrapper p-0">
          <div className="step-item">
            <span className="text">3</span>
          </div>
          <p className="mt-4">完成訂單</p>
        </Col>
      </Row>
    </>
  )
}

export default CheckoutNav
