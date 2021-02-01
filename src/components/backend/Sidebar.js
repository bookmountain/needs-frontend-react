import React from 'react'
import { Col, Card, Button, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../images/backend/logo.png'

function Sidebar() {
  return (
    <>
      <div className="backend-sidebar-wrapper">
        <Col className="sidebar" xs={2}>
          <Accordion defaultActiveKey="0">
            <div className="navigation-header">
              <div className="brand-logo">
                <Link to="/">
                  <img
                    className="my-4"
                    style={{ width: '100%' }}
                    src={logo}
                    alt=""
                  />
                </Link>
              </div>
              <span>主選單</span>
            </div>
            <Card>
              <Card.Header>
                <Link to="/customer-backend">
                  <Accordion.Toggle
                    className="btn-toggle"
                    as={Button}
                    variant="link"
                    eventKey="0"
                  >
                    <span className="font-wrapper">
                      <i className="fas fa-tachometer-alt icon-pr"></i>Dashboard
                    </span>
                  </Accordion.Toggle>
                </Link>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <Link to="/customer-backend/products-management">
                  <Accordion.Toggle
                    className="btn-toggle"
                    as={Button}
                    variant="link"
                    eventKey="0"
                  >
                    <span className="font-wrapper">
                      <i className="fas fa-box-open icon-pr"></i>商品管理
                    </span>
                  </Accordion.Toggle>
                </Link>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <Link to="/customer-backend/orders-management">
                  <Accordion.Toggle
                    className="btn-toggle"
                    as={Button}
                    variant="link"
                    eventKey="0"
                  >
                    <span className="font-wrapper">
                      <i className="far fa-money-bill-alt icon-pr"></i>訂單管理
                    </span>
                    <div className="badge-wrapper">
                      <div className="badge badge-primary">新訂單</div>
                    </div>
                  </Accordion.Toggle>
                </Link>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <Link to="/customer-backend/template-home">
                  <Accordion.Toggle
                    className="btn-toggle"
                    as={Button}
                    variant="link"
                    eventKey="0"
                  >
                    <span className="font-wrapper">
                      <i className="far fa-file-word icon-pr"></i>首頁模板
                    </span>
                  </Accordion.Toggle>
                </Link>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <Link to="/customer-backend/contracts-management">
                  <Accordion.Toggle
                    className="btn-toggle"
                    as={Button}
                    variant="link"
                    eventKey="0"
                  >
                    <span className="font-wrapper">
                      <i className="fas fa-store icon-pr"></i>平台合約
                    </span>
                  </Accordion.Toggle>
                </Link>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  className="btn-toggle"
                  as={Button}
                  onClick={(e) => {
                    e.target.classList.toggle('btn-toggleClass')
                    e.target.querySelector('.arrow').classList.toggle('down')
                  }}
                  variant="link"
                  eventKey="6"
                >
                  <span className="font-wrapper">
                    <i className="fas fa-ad icon-pr"></i>廣告數據
                  </span>
                  <div className="badge-wrapper">
                    <i
                      className="arrow left"
                      style={{ textAlign: 'center' }}
                    ></i>
                  </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  <ul className="nav nav-pills flex-column">
                    <li className="nav-item-disc">
                      <Link
                        to="/customer-backend/sales-index"
                        className="nav-link active"
                        href=""
                      >
                        銷售指標
                      </Link>
                    </li>
                    <li className="nav-item-disc">
                      <Link
                        to="/customer-backend/ads"
                        className="nav-link"
                        href="#"
                      >
                        投放概覽
                      </Link>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Link to="">
                  <Accordion.Toggle
                    className="btn-toggle"
                    as={Button}
                    variant="link"
                    eventKey="0"
                  >
                    <span className="font-wrapper">
                      <i className="far fa-paper-plane icon-pr"></i>客服系統
                    </span>
                    <div className="badge-wrapper">
                      <div className="badge badge-warning">新訊息</div>
                    </div>
                  </Accordion.Toggle>
                </Link>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <Link to="">
                  <Accordion.Toggle
                    className="btn-toggle"
                    as={Button}
                    variant="link"
                    eventKey="0"
                  >
                    <span className="font-wrapper">
                      <i className="fas fa-address-card icon-pr"></i>
                      基本資料
                    </span>
                  </Accordion.Toggle>
                </Link>
              </Card.Header>
            </Card>
          </Accordion>
        </Col>
      </div>
    </>
  )
}

export default Sidebar
