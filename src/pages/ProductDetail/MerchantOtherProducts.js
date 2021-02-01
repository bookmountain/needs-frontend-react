import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MerchantOtherProducts(props) {
  const { merchantInfo } = props
  return (
    <div>
      <Row>
        {merchantInfo.products &&
          merchantInfo.products.map((value, index) => {
            return (
              <Col md={2} key={index}>
                <Link to={`/products/${value.id}`}>
                  <div className="product-s">
                    {value.image_path ? (
                      <img
                        className="w-100 h-100 cover rounded"
                        src={`http://localhost:5000/img/products/${value.image_path}`}
                        alt=""
                      />
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="minh-66">
                    <p className="mt-2 mb-0 product-s-title">{value.title}</p>
                  </div>
                </Link>
                {value.sale_price ? (
                  <p className="text-point">
                    NT${value.sale_price}
                    <span className="ml-2 subtitle">
                      <del>NT${value.price}</del>
                    </span>
                  </p>
                ) : (
                  <p className="text-point">NT${value.price}</p>
                )}
              </Col>
            )
          })}
      </Row>
    </div>
  )
}

export default MerchantOtherProducts
