import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Col,
  Container,
  Nav,
  Dropdown,
  NavItem,
  NavLink,
} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import avatar from '../../pages/BackEnd/Dashboard/images/book.jpg'
import customer1 from '../../pages/BackEnd/Dashboard/images/customer1.jpg'
import customer2 from '../../pages/BackEnd/Dashboard/images/customer2.jpg'
import customer3 from '../../pages/BackEnd/Dashboard/images/customer3.jpg'
import customer4 from '../../pages/BackEnd/Dashboard/images/customer4.jpg'
import BreadcrumbBackend from './Breadcrumb'
import { userActions } from '../../actions'

function Navbar() {
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)

  //logout
  const { logout } = userActions

  const openFullscreen = () => {
    const elem = document.body
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    }
  }

  useEffect(() => {
    if (!isLogin) window.location.href = '/login'
  }, [])

  return (
    <>
      <div className="backend-navbar-wrapper">
        <Col className="main offset-2" xs={10}>
          <Container fluid className="main-bg">
            <div className="main-navbar d-flex">
              <BreadcrumbBackend />
              <Nav variant="pills" activeKey="1" onSelect={openFullscreen}>
                <Nav.Item className="nav-icon">
                  <Nav.Link eventKey="1" href="#/home">
                    <i className="fas fa-expand"></i>
                  </Nav.Link>
                </Nav.Item>
                <Dropdown as={NavItem} className="nav-icon">
                  <Dropdown.Toggle as={NavLink}>
                    <i className="far fa-bell"></i>
                    <span className="badge badge-pill badge-primary nav-badge">
                      5
                    </span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-menu-right notification-dropdown">
                    <Dropdown.Item className="dropdown-menu-header">
                      <div className="notifier">
                        <i className="far fa-envelope pr-2"></i>5則新通知
                      </div>
                    </Dropdown.Item>
                    <div className="scrollable-container">
                      <Dropdown.Item>
                        <Link to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-user">
                              <img src={customer1} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="media-heading">david1234</div>
                              <div className="media-text">請問還有沒有存貨</div>
                            </div>
                            <small className="media-time">1小時之前</small>
                          </div>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-user">
                              <img src={customer2} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="media-heading">sherry11</div>
                              <div className="media-text">還沒收到商品</div>
                            </div>
                            <small className="media-time">3小時之前</small>
                          </div>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-user">
                              <img src={customer3} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="media-heading">black5927</div>
                              <div className="media-text">商品品質超棒</div>
                            </div>
                            <small className="media-time">4小時之前</small>
                          </div>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="#">
                          <div className="media d-flex align-items-start">
                            <div className="media-user">
                              <img src={customer4} alt="" />
                            </div>
                            <div className="media-body">
                              <div className="media-heading">chill338</div>
                              <div className="media-text">如何辦理退貨？</div>
                            </div>
                            <small className="media-time">7小時之前</small>
                          </div>
                        </Link>
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
                <NavItem className="staff-info">
                  <div
                    style={{
                      textAlign: 'end',
                    }}
                  >
                    {isLogin ? loginUser.user.username : 'Book33'}
                  </div>
                  <div
                    className="staff-status"
                    style={{ padding: '0 0.5rem', fontSize: '14px' }}
                  >
                    <i className="fas fa-circle status-online"></i>上線
                  </div>
                </NavItem>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink}>
                    <div className="staff-avatar">
                      <img
                        src={
                          isLogin
                            ? `http://localhost:5000/img/brands/${loginUser.user.brand_img}`
                            : avatar
                        }
                      />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdown-staff dropdown-menu-right">
                    <Dropdown.Item>
                      <Link to="/">
                        <i class="fas fa-shopping-bag pr-2"></i>NEEDS首頁
                      </Link>
                    </Dropdown.Item>
                    <div className="dropdown-divider"> </div>
                    <Dropdown.Item>
                      <Link
                        to={
                          isLogin
                            ? `/homepage/${loginUser.user.brand_en_name}/${loginUser.user.id}`
                            : ''
                        }
                      >
                        <i class="fas fa-home pr-2"></i>品牌首頁
                      </Link>
                    </Dropdown.Item>
                    <div className="dropdown-divider"> </div>
                    <Dropdown.Item>
                      <i className="fas fa-user pr-2" />
                      個人資料
                    </Dropdown.Item>
                    <div className="dropdown-divider"> </div>
                    <Dropdown.Item
                      onClick={(e) => {
                        e.preventDefault()
                        logout()
                      }}
                    >
                      <i className="fas fa-sign-out-alt pr-2" />
                      登出
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </div>
          </Container>
        </Col>
      </div>
    </>
  )
}

export default Navbar
