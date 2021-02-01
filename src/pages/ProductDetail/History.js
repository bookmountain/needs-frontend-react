import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

function History(props) {
  return (
    <div>
      <Row>
        <Col md={2}>
          <div className="product-s">
            <img
              src={require('../../assets/img/products/1-paper/PT01_300x0.jpg')}
            />
          </div>
          <div className="minh-66">
            <p className="mt-2 mb-0 product-s-title">片花 - 霧面 PET 紙膠帶</p>
          </div>
          <p className="mb-0">一分之一工作室</p>
          <p className="text-point">NT$300</p>
        </Col>
        <Col md={2}>
          <div className="product-s">
            <img
              src={require('../../assets/img/products/1-paper/PT02_300x0.jpg')}
            />
          </div>
          <div className="minh-66">
            <p className="mt-2 mb-0 product-s-title">
              紙膠帶 - 嚕咪 Luminous (Dark)
            </p>
          </div>
          <p className="mb-0">一分之一工作室</p>
          <p className="text-point">NT$150</p>
        </Col>
        <Col md={2}>
          <div className="product-s">
            <img
              src={require('../../assets/img/products/1-paper/PT03_300x0.jpg')}
            />
          </div>
          <div className="minh-66">
            <p className="mt-2 mb-0 product-s-title">薄霧隨筆 - 描圖紙本</p>
          </div>
          <p className="mb-0">禮拜文房具</p>
          <p className="text-point">NT$250</p>
        </Col>
        <Col md={2}>
          <div className="product-s">
            <img
              src={require('../../assets/img/products/1-paper/PT04_300x0.jpg')}
            />
          </div>
          <div className="minh-66">
            <p className="mt-2 mb-0 product-s-title">活版印刷盒裝訊息小卡</p>
          </div>
          <p className="mb-0">一分之一工作室</p>
          <p className="text-point">NT$270</p>
        </Col>
        <Col md={2}>
          <div className="product-s">
            <img
              src={require('../../assets/img/products/1-paper/PT05_300x0.jpg')}
            />
          </div>
          <div className="minh-66">
            <p className="mt-2 mb-0 product-s-title">
              MIDORI Pocket Diary 2021手帳(月雙週)A6
            </p>
          </div>
          <p className="mb-0">一分之一工作室</p>
          <p className="text-point">NT$390</p>
        </Col>
        <Col md={2}>
          <div className="product-s">
            <img
              src={require('../../assets/img/products/1-paper/PT06_300x0.jpg')}
            />
          </div>
          <div className="minh-66">
            <p className="mt-2 mb-0 product-s-title">
              MIDORI Pocket Diary 2021手帳長形(月間)嘉
            </p>
          </div>
          <p className="mb-0">禮拜文房具</p>
          <p className="text-point">NT$210</p>
        </Col>
      </Row>
    </div>
  )
}

export default History
