import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Categories1 from '../../../pages/Home/images/categories-1-0.jpg'
import Categories2 from '../../../pages/Home/images/categories-2-0.jpg'
import Categories3 from '../../../pages/Home/images/categories-3-0.jpg'
import Categories4 from '../../../pages/Home/images/categories-4-0.jpg'
import Categories5 from '../../../pages/Home/images/categories-5-0.jpg'
import Categories6 from '../../../pages/Home/images/categories-6-0.jpg'
import Categories7 from '../../../pages/Home/images/categories-7-0.jpg'
import Categories8 from '../../../pages/Home/images/categories-8-0.jpg'

const Categories = () => {
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col xs={3} className="categories">
            <Link to="">
              <div className="categories-wrapper">
                <img src={Categories1} alt="" />
                <h3 className="categories-title">貼紙/紙品</h3>
              </div>
            </Link>
          </Col>
          <Col xs={3} className="categories">
            <Link to="">
              <div className="categories-wrapper">
                <img src={Categories2} alt="" />
                <h3 className="categories-title">筆記本/年曆</h3>
              </div>
            </Link>
          </Col>
          <Col xs={3} className="categories">
            <Link to="">
              <div className="categories-wrapper">
                <img src={Categories3} alt="" />
                <h3 className="categories-title">文具用品</h3>
              </div>
            </Link>
          </Col>
          <Col xs={3} className="categories">
            <Link to="">
              <div className="categories-wrapper">
                <img src={Categories4} alt="" />
                <h3 className="categories-title">書籍周邊</h3>
              </div>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={3} className="categories">
            <Link to="">
              <div className="categories-wrapper">
                <img src={Categories5} alt="" />
                <h3 className="categories-title">婚禮週邊</h3>
              </div>
            </Link>
          </Col>
          <Col xs={3} className="categories">
            <div className="categories-wrapper">
              <img src={Categories6} alt="" />
              <h3 className="categories-title">生活收納</h3>
            </div>
          </Col>
          <Col xs={3} className="categories">
            <Link to="">
              <div className="categories-wrapper">
                <img src={Categories7} alt="" />
                <h3 className="categories-title">創意小物</h3>
              </div>
            </Link>
          </Col>
          <Col xs={3} className="categories">
            <Link to="">
              <div className="categories-wrapper">
                <img src={Categories8} alt="" />
                <h3 className="categories-title">手作體驗</h3>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Categories
