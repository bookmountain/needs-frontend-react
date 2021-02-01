import React, { useState, useEffect } from 'react'
import { Container, Button, Form, Card, Row, Col } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import './payment.scss'

import CheckoutNav from './CheckoutNav'

function Complete(props) {
  return (
    <div className="cart-payment-page">
      <Container>
        <CheckoutNav />
        <Card className="text-center w-50 m-auto">
          <Card.Body>
            <Card.Text className="title">訂單已完成付款</Card.Text>
            <Button
              variant="danger"
              className="my-2 px-4"
              onClick={() => (window.location.href = '/member/card')}
            >
              查看訂單詳細
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
export default Complete
