import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'

function ReasonToJoinUs() {
  return (
    <>
      <Container className="py-5 join-us-wrapper">
        <Row>
          <Col xs={12}>
            <div className="join-us-header mb-5">
              <h2 className="join-us-title">5大優勢</h2>
              <h4 className="join-us-subtitle">加入NEEDS行銷加倍成長</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <div className="join-us-info">
              <div className="join-us-img">
                <img
                  src={require('../../../pages/Home/images/join-us-1.png')}
                  alt=""
                />
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <Col xs={8}></Col>
            <Col xs={4}></Col>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ReasonToJoinUs
