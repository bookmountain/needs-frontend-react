import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { FaFacebook } from 'react-icons/fa'
import { AiFillGooglePlusCircle, AiFillTwitterCircle } from 'react-icons/ai'
import './MerchantLogin.scss'

const MerchantLogin = (props) => {
  const {
    username,
    password,
    setUsername,
    setPassword,
    handleSubmit,
    selectedRole,
    setMember,
    setMerchant,
    setNeeds,
    alertMsg,
  } = props

  return (
    <>
      <div className="merchantLogin container-fluid">
        <div className="side">
          <div className="logo">
            <Link to="#" onClick={setNeeds}>
              <img
                src={require('@assets/img/logo/logo_icon_whiite.png')}
                alt=""
              />
            </Link>
          </div>
          <div className="text">
            <p>想創立自有品牌嗎？</p>
            <p>手刀註冊加入NEEDS</p>
          </div>
          <Link to="/signup">SIGN UP</Link>
        </div>
        <div className="main">
          <div className="loginRole">
            <Button variant="link" className="pr-1" onClick={setMember}>
              會員
            </Button>
            <Button
              variant="link"
              className={`pl-1 seperator ${
                selectedRole === 'merchant' ? 'actived' : ''
              }`}
              onClick={setMerchant}
            >
              商家
            </Button>
          </div>
          <div className="loginInput">
            <h4
              onClick={() => {
                setUsername('plin@qmail.com')
                setPassword('1234')
              }}
            >
              商家登入
            </h4>
            <div className="socialMedia">
              <a href="">
                <FaFacebook size="44px" color="#3b5998" />
              </a>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault()
                  setUsername('ftsai@qmail.com')
                  setPassword('1234')
                }}
              >
                <AiFillGooglePlusCircle size="50px" color="#dd4b39" />
              </a>
              <a
                href=""
                onClick={(e) => {
                  e.preventDefault()
                  setUsername('echen')
                  setPassword('1234')
                }}
              >
                <AiFillTwitterCircle size="50px" color="#26a6d1" />
              </a>
            </div>
            <div className="loginForm">
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="email" className="d-flex">
                  <Form.Control
                    type="email"
                    required
                    placeholder="信箱"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Control
                    type="password"
                    required
                    placeholder="密碼"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <p className={alertMsg ? 'alertmsg' : ''}>{alertMsg}</p>
                <div className="forgetPassword d-block">
                  <Link to="">忘記密碼</Link>
                  <Link to="/signup" className="ml-3 display-none">
                    立即註冊
                  </Link>
                </div>
                <Button variant="primary" type="submit">
                  LOGIN
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MerchantLogin
