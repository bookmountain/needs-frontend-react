import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import * as storage from './localStorage'

function CartItem(props) {
  const {
    product,
    merchantCarts,
    setMerchantCarts,
    cart,
    setCart,
    cartItemDelete,
    checkOne,
    updateCartAmount,
  } = props

  function updateSkuAmount(skuId, increment) {
    setMerchantCarts(
      merchantCarts.map((cartItems) => {
        cartItems.products.map((item) => {
          if (item.skuid === skuId) {
            item.amount = Math.min(
              Math.max(item.amount + increment, 1),
              item.stocks
            )
            const newCartItem = { skuid: skuId, amount: item.amount }
            setCart(
              storage.saveCartItems(
                storage.replaceCartItem(storage.getCartItems(), newCartItem)
              )
            )
          }
          return item
        })
        return cartItems
      })
    )
  }

  function filterInt(value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value)
    return NaN
  }

  function replaceSkuAmount(skuId, value) {
    console.log(skuId, value)
    setMerchantCarts(
      merchantCarts.map((cartItems) => {
        cartItems.products.map((item) => {
          if (item.skuid === skuId) {
            console.log('found')
            item.amount = value
            const newCartItem = { skuid: skuId, amount: item.amount }
            setCart(
              storage.saveCartItems(
                storage.replaceCartItem(storage.getCartItems(), newCartItem)
              )
            )
          }
          return item
        })
        return cartItems
      })
    )
    updateCartAmount()
  }

  return (
    <>
      <Row className="cart-item py-3 m-0">
        <Col md={5} className="d-flex">
          <div className="form-check align-self-center item-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={product.isChecked}
              onChange={(e) => checkOne(product.skuid, e.target.checked)}
            />
          </div>
          <div className="item-product ml-4 d-flex">
            <Link to={`/products/${product.product_id}`}>
              <img
                src={`http://localhost:5000/img/products/${product.image_path}`}
                alt=""
              />
            </Link>
            <div className="ml-5">
              <Link to={`/products/${product.product_id}`}>
                <p className="item-title">{product.title}</p>
              </Link>
              <span>
                規格：
                {product.specification === '-'
                  ? '單一規格'
                  : product.specification}
              </span>
            </div>
          </div>
        </Col>
        <Col md={2} className="text-right align-self-center pr-5">
          <p className="font-point mb-1">
            NT$
            {product.sale_price ? product.sale_price : product.price}
          </p>
          <del>{product.sale_price ? 'NT$' + product.price : ''}</del>
        </Col>
        <Col md={3} className="d-flex">
          <Form.Group className="mb-0 align-self-center">
            <div
              className="btn-group border rounded w-75 quantity-group"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className="btn btn-sm border-right px-3"
                onClick={() => updateSkuAmount(product.skuid, -1)}
              >
                -
              </button>
              <Form.Control
                type="number"
                value={product.amount}
                className="quantity border-0 rounded-0"
                onChange={(e) => {
                  replaceSkuAmount(product.skuid, filterInt(e.target.value))
                }}
                onBlur={(e) => {
                  replaceSkuAmount(
                    product.skuid,
                    Math.min(
                      Math.max(filterInt(e.target.value), 1),
                      product.stocks
                    )
                  )
                }}
              />
              <button
                type="button"
                className="btn btn-sm border-left px-3"
                onClick={() => updateSkuAmount(product.skuid, 1)}
              >
                +
              </button>
            </div>
          </Form.Group>
        </Col>
        <Col md={1} className="text-right align-self-center font-point p-0">
          NT$
          {product.sale_price
            ? product.sale_price * product.amount
            : product.price * product.amount}
        </Col>
        <Col md={1} className="text-right align-self-center">
          <FaTimes
            style={{ cursor: 'pointer' }}
            onClick={() => cartItemDelete(product.skuid)}
          />
        </Col>
      </Row>
      <div className="item-hr"></div>
    </>
  )
}

export default CartItem
