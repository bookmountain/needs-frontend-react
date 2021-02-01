import React, { useState, useEffect } from 'react'
import { Container, Button, Form, Card, Row, Col } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './payment.scss'

import CheckoutNav from './CheckoutNav'

function Payment(props) {
  console.log(props)
  const [tradeInfo, setTradeInfo] = useState([])
  const payment_insertId = props.orderId.payment_insertId || []
  const order_number = props.orderId.order_number || []

  async function getTradeInfo() {
    const url = `http://localhost:5000/payments/${payment_insertId}/trade/info`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    setTradeInfo(data)
  }

  useEffect(() => {
    getTradeInfo()
  }, [])

  const displayPayment = (
    <div className="cart-payment-page">
      <Container>
        <CheckoutNav />
        <Card className="text-center w-50 m-auto">
          <Card.Header className="title">
            您的訂單已成立！訂單編號：{order_number}
          </Card.Header>
          <Card.Body>
            <Card.Text>您將前往第三方付款，付款後返回本頁面</Card.Text>
            <Form
              method="POST"
              action="https://ccore.spgateway.com/MPG/mpg_gateway"
            >
              <div className="d-none">
                <Form.Row>
                  <Col>
                    <Form.Control
                      name="MerchantID"
                      value={tradeInfo.merchantID}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      name="TradeInfo"
                      value={tradeInfo.tradeInfo}
                    />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Col>
                    <Form.Control name="TradeSha" value={tradeInfo.tradeSha} />
                  </Col>
                  <Col>
                    <Form.Control name="Version" value={tradeInfo.version} />
                  </Col>
                </Form.Row>
              </div>
              <Button variant="danger" className="my-2 px-4" type="submit">
                前往付款
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )

  return <>{tradeInfo.merchantID ? displayPayment : ''}</>
}

const mapStateToProps = (store) => {
  return { orderId: store.orderId, orderContent: store.orderContent }
}

export default connect(mapStateToProps)(Payment)
