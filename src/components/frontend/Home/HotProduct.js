import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import HotProduct01 from '../../../pages/Home/images/hot-product-01.jpg'
import HotProduct02 from '../../../pages/Home/images/hot-product-02.jpg'
import HotProduct03 from '../../../pages/Home/images/hot-product-03.jpg'
import HotProduct04 from '../../../pages/Home/images/hot-product-04.jpg'
import HotProduct05 from '../../../pages/Home/images/hot-product-05.jpg'

function HotProduct() {
  return (
    <>
      <Container fluid className="py-5" style={{ backgroundColor: '#f0f0f0' }}>
        <Container>
          <Row>
            <Col xs={12}>
              <div className="hot-product-header mb-5">
                <h2 className="hot-product-title">熱門商品</h2>
                <h4 className="hot-product-subtitle">
                  每週暢銷排行榜-看看最受大家青睞的商品
                </h4>
              </div>
            </Col>
            <Col xs={12} className="hot-product">
              <div className="hot-product-wrapper">
                <div className="top-wrapper">
                  <div className="top">Top</div>
                  <div className="top-number">1</div>
                </div>
                <div className="hot-product-info">
                  <div className="hot-product-img">
                    <img src={HotProduct01} alt="" />
                  </div>
                  <div className="hot-product-title">
                    【Ｍister】歐式復古羽毛筆沾水鋼筆禮盒
                  </div>
                  <div className="hot-product-brand">Mister手作皮件專門店</div>
                  <span className="hot-product-price">NT$825</span>
                  <span className="hot-product-sub-price">NT$1099</span>
                </div>
              </div>
            </Col>
            <Col xs={12} className="hot-product">
              <div className="hot-product-wrapper">
                <div className="top-wrapper">
                  <div className="top">Top</div>
                  <div className="top-number">2</div>
                </div>
                <div className="hot-product-info">
                  <div className="hot-product-img">
                    <img src={HotProduct02} alt="" />
                  </div>
                  <div className="hot-product-title">
                    片花 - 霧面 PET 紙膠帶
                  </div>
                  <div className="hot-product-brand">belleandsofa</div>
                  <span className="hot-product-price">NT$300</span>
                  <span className="hot-product-sub-price"></span>
                </div>
              </div>
            </Col>
            <Col xs={12} className="hot-product">
              <div className="hot-product-wrapper">
                <div className="top-wrapper">
                  <div className="top">Top</div>
                  <div className="top-number">3</div>
                </div>
                <div className="hot-product-info">
                  <div className="hot-product-img">
                    <img src={HotProduct03} alt="" />
                  </div>
                  <div className="hot-product-title">
                    ARTEX x 印花樂 聯名3入墨水組
                  </div>
                  <div className="hot-product-brand">樂意Loidesign</div>
                  <span className="hot-product-price">NT$780</span>
                  <span className="hot-product-sub-price"></span>
                </div>
              </div>
            </Col>
            <Col xs={12} className="hot-product">
              <div className="hot-product-wrapper">
                <div className="top-wrapper">
                  <div className="top">Top</div>
                  <div className="top-number">4</div>
                </div>
                <div className="hot-product-info">
                  <div className="hot-product-img">
                    <img src={HotProduct04} alt="" />
                  </div>
                  <div className="hot-product-title">
                    Filter017 10th 十周年品牌設計年鑑Catalog
                  </div>
                  <div className="hot-product-brand">來本冊子Re:mainer</div>
                  <span className="hot-product-price">NT$1980</span>
                  <span className="hot-product-sub-price">NT$2200</span>
                </div>
              </div>
            </Col>
            <Col xs={12} className="hot-product">
              <div className="hot-product-wrapper">
                <div className="top-wrapper">
                  <div className="top">Top</div>
                  <div className="top-number">5</div>
                </div>
                <div className="hot-product-info">
                  <div className="hot-product-img">
                    <img src={HotProduct05} alt="" />
                  </div>
                  <div className="hot-product-title">薄霧隨筆 - 描圖紙本</div>
                  <div className="hot-product-brand">茄子先生</div>
                  <span className="hot-product-price">NT$250</span>
                  <span className="hot-product-sub-price"></span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="my-5">
              <div className="search-btn-wrapper">
                <Button className="search-more-btn">探索更多 →</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default HotProduct
