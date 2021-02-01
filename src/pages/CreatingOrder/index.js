import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Accordion, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { IoIosArrowDown } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { replaceOrderId } from '../../actions'
import { replaceCartAmount } from '../../actions'
import './creatingOrder.scss'
import * as storage from '../Cart/localStorage'

import CheckoutNav from './CheckoutNav'
import CartItems from './CartItems'

function CreatingOrder(props) {
  // console.log(props)
  const loginUser = useSelector((state) => state.authentication.user)
  const [userInfo, setUserInfo] = useState([])
  const [payment, setPayment] = useState(1)
  const products = props.orderContent.products || []
  const history = useHistory()
  const skuIds = products.map((v) => v.skuid)

  async function getUserInfo() {
    const url = `http://localhost:5000/products/userInfo`
    const request = new Request(url, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        userId: loginUser.user.id,
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    data.note = ''
    setUserInfo(data)
  }

  async function creatOrder() {
    const orderContent = props.orderContent
    const customer_id = loginUser.user.id
    const orderData = { customer_id, userInfo, payment, orderContent }
    const url = `http://localhost:5000/orders`
    const request = new Request(url, {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(orderData),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log('=== creatOrder start ===')
    console.log(data)
    console.log('=== creatOrder end ===')
    props.replaceOrderId(data)

    skuIds.forEach((skuid) => {
      let cart = storage.getCartItems()
      let newCartItem = cart.filter((item, index) => item.skuid !== skuid)
      storage.saveCartItems(newCartItem)
    })

    updateCartAmount()

    history.push('/order_payment')
  }

  function updateCartAmount() {
    let amount = 0
    let cart = [...JSON.parse(localStorage.getItem('cart') || '[]')]
    cart.forEach((item) => {
      amount += item.amount
    })
    props.replaceCartAmount(amount)
  }

  function changeUserInfo(event) {
    let newUserInfo = { ...userInfo }
    newUserInfo[event.target.name] = event.target.value
    setUserInfo(newUserInfo)
  }

  useEffect(() => {
    getUserInfo()
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <div className="creating-order-page">
      <Container>
        <CheckoutNav />
        <Accordion defaultActiveKey="0" className="mb-4">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <div className="sum">
                總計 NT$ {products.length ? props.orderContent.sum : 0}
                <IoIosArrowDown size="1rem" style={{ marginLeft: '0.6rem' }} />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {products.length ? <CartItems products={products} /> : ''}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div className="border rounded-top mb-4">
          <Row className="infobar rounded-top py-3 m-0">
            <Col md={12}>收件資訊</Col>
          </Row>
          <Form className="pl-3 pt-3">
            <Form.Group as={Row} controlId="name">
              <Form.Label column sm="2" className="item-title">
                收件人名稱
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="請輸入收件人姓名"
                  value={userInfo.name || ''}
                  onChange={changeUserInfo}
                />
              </Col>
              <Col sm="4" className="align-self-center">
                ＊請填入收件人真實姓名，以確保順利收件
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="phone_number">
              <Form.Label column sm="2" className="item-title">
                收件人電話
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="text"
                  name="phone_number"
                  placeholder="請輸入收件人電話"
                  value={userInfo.phone_number || ''}
                  onChange={changeUserInfo}
                />
              </Col>
              <Col sm="4" className="align-self-center">
                ＊配送人員將以此區資料聯繫
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="address">
              <Form.Label column sm="2" className="item-title">
                收件人地址
              </Form.Label>
              <Col sm="5">
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="請輸入收件人地址"
                  value={userInfo.address || ''}
                  onChange={changeUserInfo}
                />
              </Col>
            </Form.Group>
          </Form>
        </div>
        <Row className="delivery-pay-info">
          <Col md={6}>
            <div className="border rounded-top infobar p-3">訂單備註</div>
            <div className="p-3 border border-top-0 item-title">
              <Form.Group className="mb-2">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="（ 選填 ）有什麼想告訴店家的嗎？"
                  name="note"
                  value={userInfo.note || ''}
                  onChange={changeUserInfo}
                />
              </Form.Group>
            </div>
          </Col>
          <Col md={6}>
            <div className="border rounded-top infobar p-3">付款方式</div>
            <div className="p-3 border border-top-0 item-title">
              <fieldset form="cartForm">
                <Form.Group as={Row} className="mb-0">
                  <Col>
                    <Form.Check
                      type="radio"
                      label="信用卡號付款 ( VISA / MasterCard / JCB 信用卡 )"
                      name="payment_method"
                      className="mb-3"
                      value="credit"
                      checked={payment === 1}
                      onChange={() => {
                        setPayment(1)
                      }}
                    />
                    <Form.Check
                      type="radio"
                      label="ATM 轉帳繳費"
                      name="payment_method"
                      className="mb-3"
                      value="atm"
                      checked={payment === 2}
                      onChange={() => {
                        setPayment(2)
                      }}
                    />
                    <Form.Check
                      type="radio"
                      label="7-11 ibon 代碼繳費"
                      name="payment_method"
                      value="711"
                      checked={payment === 3}
                      onChange={() => {
                        setPayment(3)
                      }}
                    />
                  </Col>
                </Form.Group>
              </fieldset>
              {/* <Link to={`/order_payment`}> */}
              <button
                className="btn btn-danger w-100 mt-3"
                onClick={() => {
                  creatOrder()
                }}
              >
                建立訂單
              </button>
              {/* </Link> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    orderId: store.orderId,
    orderContent: store.orderContent,
    cartAmount: store.cartAmount,
  }
}

export default connect(mapStateToProps, {
  replaceOrderId,
  replaceCartAmount,
})(CreatingOrder)
