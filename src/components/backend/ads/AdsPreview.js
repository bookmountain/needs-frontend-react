import React from 'react'
import { Card, Carousel, Row, Col } from 'react-bootstrap'
import CTR from '../../../components/backend/ads/charts/CTR'

function AdsPreview(props) {
  let imgPre = props.imgPre
  let imgPreUrl = imgPre ? 'http://localhost:5000/adsCover/' + imgPre : ''
  let productTitle1 = props.productTitle1
  let productOutline1 = props.productOutline1
  let productImg1 = props.productImg1
  let productImg1Url = productImg1
    ? 'http://localhost:5000/adsProduct/' + productImg1
    : ''
  let productTitle2 = props.productTitle2
  let productOutline2 = props.productOutline2
  let productImg2 = props.productImg2
  let productImg2Url = productImg2
    ? 'http://localhost:5000/adsProduct/' + productImg2
    : ''
  let productTitle3 = props.productTitle3
  let productOutline3 = props.productOutline3
  let productImg3 = props.productImg3
  let productImg3Url = productImg3
    ? 'http://localhost:5000/adsProduct/' + productImg3
    : ''

  return (
    <>
      <Card>
        <Card.Body>
          <div className="ads-preview-card-header">
            <Card.Title className="mb-3">廣告預覽</Card.Title>
          </div>
          <div className="ads-preview">
            <Carousel indicators={false} interval={50000}>
              <Carousel.Item>
                <Card>
                  <Row>
                    {/* <Col xs={3}></Col> */}
                    <Col xs={6}>
                      <Card.Img variant="top" src={imgPreUrl} />
                    </Col>
                    {/* <Col xs={3}></Col> */}
                    <Col xs={6}>
                      <Card.Body className="ads-chart-wrapper">
                        <Card.Title>封面照片</Card.Title>
                        <Card.Text>
                          活動廣告的主頁照片，於首頁展示三樣欲曝光商品，增加點閱率。
                          <br />
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Row>
                    <Col xs={6}>
                      <Card.Img variant="top" src={productImg1Url} />
                    </Col>
                    <Col xs={6}>
                      <Card.Body className="ads-chart-wrapper">
                        <Card.Title className="ads-title">
                          {productTitle1}
                        </Card.Title>
                        <Card.Text>{productOutline1}</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Row>
                    <Col xs={6}>
                      <Card.Img variant="top" src={productImg2Url} />
                    </Col>
                    <Col xs={6}>
                      <Card.Body className="ads-chart-wrapper">
                        <Card.Title className="ads-title">
                          {productTitle2}
                        </Card.Title>
                        <Card.Text>{productOutline2}</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card>
                  <Row>
                    <Col xs={6}>
                      <Card.Img variant="top" src={productImg3Url} />
                    </Col>
                    <Col xs={6}>
                      <Card.Body className="ads-chart-wrapper">
                        <Card.Title className="ads-title">
                          {productTitle3}
                        </Card.Title>
                        <Card.Text>{productOutline3}</Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Carousel.Item>
            </Carousel>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default AdsPreview
