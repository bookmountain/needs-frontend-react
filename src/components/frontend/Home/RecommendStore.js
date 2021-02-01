import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function RecommendStore() {
  const history = useHistory()
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col xs={12}>
            <div className="recommend-store-header mb-5">
              <h2 className="recommend-store-title">推薦商家</h2>
              <h4 className="recommend-store-subtitle">
                探索各式生活風格美學 - 實踐美好必要指南
              </h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col s={12} md={4} className="mt-2">
            <Card className="recommend-store-wrapper">
              <Card.Body>
                <div className="store-info-wrapper">
                  <div className="store-info-inner">
                    <div className="store-title" 
                    style={{cursor: 'pointer'}}
                    onClick={()=>{history.push('/homepage/ToolsLiveBy/3')}}
                    >禮拜文房具</div>
                    <div className="store-follower">關注人數：1246</div>
                  </div>
                  <Button className="store-follower-btn">+關注</Button>
                </div>
                <div className="store-img">
                  <div className="store-img-left">
                    <img
                      src={require('../../../pages/Home/images/recommend-store-01.jpg')}
                      alt=""
                      style={{cursor: 'pointer'}}
                      onClick={()=>{history.push('/homepage/ToolsLiveBy/3')}} 
                    />
                  </div>
                  <div className="store-img-right">
                    <div className="store-img-right-top">
                      <img
                        src={require('../../../pages/Home/images/recommend-store-02.jpg')}
                        alt=""
                      />
                    </div>
                    <div className="store-img-right-bottom">
                      <img
                        src={require('../../../pages/Home/images/recommend-store-03.jpg')}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col s={12} md={4} className="mt-2">
            <Card className="recommend-store-wrapper">
              <Card.Body>
                <div className="store-info-wrapper">
                  <div className="store-info-inner">
                    <div className="store-title"
                    style={{cursor: 'pointer'}}
                    onClick={()=>{history.push('/homepage/Pommedepin111/12')}}
                    >annieeinna_hs</div>
                    <div className="store-follower">關注人數：1246</div>
                  </div>
                  <Button className="store-follower-btn" >+關注</Button>
                </div>
                <div className="store-img">
                  <div className="store-img-left">
                    <img
                      src={require('../../../pages/Home/images/recommend-store-04.jpg')}
                      alt=""
                      style={{cursor: 'pointer'}}
                      onClick={()=>{history.push('/homepage/Pommedepin111/12')}}
                    />
                  </div>
                  <div className="store-img-right">
                    <div className="store-img-right-top">
                      <img
                        src={require('../../../pages/Home/images/recommend-store-05.jpg')}
                        alt=""
                      />
                    </div>
                    <div className="store-img-right-bottom">
                      <img
                        src={require('../../../pages/Home/images/recommend-store-06.jpg')}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} className="mt-2">
            <Card className="recommend-store-wrapper">
              <Card.Body>
                <div className="store-info-wrapper">
                  <div className="store-info-inner">
                    <div className="store-title">隱山手作Hermits</div>
                    <div className="store-follower">關注人數：1246</div>
                  </div>
                  <Button className="store-follower-btn">+關注</Button>
                </div>
                <div className="store-img">
                  <div className="store-img-left">
                    <img
                      src={require('../../../pages/Home/images/recommend-store-07.jpg')}
                      alt=""
                    />
                  </div>
                  <div className="store-img-right">
                    <div className="store-img-right-top">
                      <img
                        src={require('../../../pages/Home/images/recommend-store-08.jpg')}
                        alt=""
                      />
                    </div>
                    <div className="store-img-right-bottom">
                      <img
                        src={require('../../../pages/Home/images/recommend-store-09.jpg')}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RecommendStore

// ./pages/MerchantHome/ToolsLiveBy3
