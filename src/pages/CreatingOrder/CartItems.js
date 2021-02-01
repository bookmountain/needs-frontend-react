import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

function CartItems(props) {
  const { products } = props
  return (
    <div>
      <Row className="cart-infobar py-3 m-0">
        <Col md={5}>
          <span className="product-titlebar">商品名稱</span>
        </Col>
        <Col md={2} className="text-right">
          單價
        </Col>
        <Col md={3} className="text-center pl-9">
          數量
        </Col>
        <Col md={2} className="text-right">
          小計
        </Col>
      </Row>
      <div className="item-hr"></div>
      {products &&
        products.map((product, index) => {
          return (
            <div key={index}>
              <Row className="py-3 m-0">
                <Col md={5} className="d-flex">
                  <div className="item-product d-flex">
                    <img
                      src={`http://localhost:5000/img/products/${product.image_path}`}
                      alt=""
                    />
                    <div className="ml-5">
                      <p className="item-title">{product.title}</p>
                      <span>
                        規格：
                        {product.specification === '-'
                          ? '單一規格'
                          : product.specification}
                      </span>
                    </div>
                  </div>
                </Col>
                <Col md={2} className="text-right align-self-center">
                  <p className="font-point mb-1">
                    NT$
                    {product.sale_price ? product.sale_price : product.price}
                  </p>
                  <del>{product.sale_price ? 'NT$' + product.price : ''}</del>
                </Col>
                <Col md={3} className="text-center align-self-center pl-9">
                  {product.amount}
                </Col>
                <Col md={2} className="text-right align-self-center font-point">
                  NT${product.sale_price
                    ? product.sale_price * product.amount
                    : product.price * product.amount}
                </Col>
              </Row>
              <div className="item-hr"></div>
            </div>
          )
        })}
    </div>
  )
}
const mapStateToProps = (store) => {
  return { content: store.orderItems }
}

export default connect(mapStateToProps)(CartItems)
