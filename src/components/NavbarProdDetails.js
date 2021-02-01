import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { connect } from 'react-redux'

import { userActions } from '../actions'
import '../styles/navbar.scss'
import logo from '../images/logo.png'
import SerarchBox from './SearchBox/SerarchBox'
import NavProdCat from './NavPordCat'

function HomeNavbarProd(props) {
  //從actions中引入登出函式
  const { logout } = userActions

  //從redux中取出登入狀態
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)

  //依登入狀態決定登出按鈕的樣式
  const logoutBtn = () => {
    switch (loginUser.user.role) {
      case 'member':
        return (
          <>
            <div className="memberActions">
              <div className="memberAvatar">
                <img
                  src={`http://localhost:5000/img/avatar/${loginUser.user.avatar}`}
                  alt=""
                />
              </div>
              <div className="actionsList">
                <div className="actionsItem memberName">
                  Hi, {loginUser.user.username}
                </div>
                <div className="actionsItem">
                  <Link to="/member/card">
                    <span>會員中心</span>
                  </Link>
                </div>
                <div className="actionsItem">
                  <Link to="/member/like">
                    <span>關注清單</span>
                  </Link>
                </div>
                <div className="actionsItem">
                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault()
                      logout()
                    }}
                  >
                    <span>登出</span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )
      case 'merchant':
        return (
          <>
            <div className="merchantActions">
              <div className="merchantAvatar">
                <img
                  src={`http://localhost:5000/img/brands/${loginUser.user.brand_img}`}
                  alt=""
                />
              </div>
              <div className="actionsList">
                <div className="actionsItem merchantName">
                  Hi, {loginUser.user.username}
                </div>
                <div className="actionsItem">
                  <Link
                    to={`/homepage/${loginUser.user.brand_en_name}/${loginUser.user.id}`}
                    target="_blank"
                  >
                    <span>品牌首頁</span>
                  </Link>
                </div>
                <div className="actionsItem">
                  <Link to="/customer-backend" target="_blank">
                    <span>品牌管理中心</span>
                  </Link>
                </div>
                <div className="actionsItem">
                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault()
                      logout()
                    }}
                  >
                    <span>登出</span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )
      default:
        return (
          <>
            <div className="needsActions">
              <span className="actionsItem needsName">NEEDS特務</span>
              <div className="actionsList">
                <div className="actionsItem needsName">
                  Hi, {loginUser.user.username}
                </div>
                <div className="actionsItem">
                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault()
                      logout()
                    }}
                  >
                    <span>登出</span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <>
      {/* <Container fluid> */}
      <div className="navBlock">
        <Navbar bg="white" expand="lg" fixed="top" className="NavProdDetails">
          {/* <Navbar bg="transparent" expand="lg"> */}
          <Navbar.Brand href="/">
            <Link to="/">
              <div className="nav-logo">
                <img src={logo} alt="" />
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <div className="prodList">
                <Nav.Link href="/productlist">所有分類</Nav.Link>
                <NavProdCat />
              </div>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link href="/articles">文章列表</Nav.Link>
              <Nav.Link href="/investment">成為商家</Nav.Link>
            </Nav>
            <Nav className={isLogin ? `d-none` : `d-block`}>
              {isLogin === false ? (
                <Nav.Link href="/login">
                  <span className="mr-1">登入</span>
                  <span className="pl-1 separator">註冊</span>
                </Nav.Link>
              ) : (
                ''
              )}
            </Nav>
            <Nav>{isLogin === true ? logoutBtn() : ''}</Nav>
            <Nav>
              {isLogin === false ? (
                <Link to={`/login`} className="mx-3 text-decoration-none">
                  <AiOutlineShoppingCart size="20px" className="cart-icon" />
                  <span className="cart-amount">{props.cartAmount || 0}</span>
                </Link>
              ) : (
                <Link to={`/cart_list`} className="mx-3 text-decoration-none">
                  <AiOutlineShoppingCart size="20px" className="cart-icon" />
                  <span className="cart-amount">{props.cartAmount || 0}</span>
                </Link>
              )}
            </Nav>
            <Nav>
              <div className="d-flex align-items-center position-relative">
                <AiOutlineSearch size="20px" />
                <SerarchBox />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* </Container> */}
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return { cartAmount: store.cartAmount }
}

// export default HomeNavbar
export default connect(mapStateToProps)(HomeNavbarProd)
