import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import Axios from 'axios'
import { Button, Form, Modal } from 'react-bootstrap'
import { FaFacebook } from 'react-icons/fa'
import { AiFillGooglePlusCircle, AiFillTwitterCircle } from 'react-icons/ai'
import './MemberSignUp.scss'

const MerberSignup = (props) => {
  const dispatch = useDispatch()
  const {
    submitted,
    setSubmitted,
    formData,
    handleSetForm,
    selectedRole,
    setMember,
    setMerchant,
    setNeeds,
    alertMsg,
    error,
  } = props

  const [modalSuccessShow, setModalSuccessShow] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    Axios.post(`http://localhost:5000/signup-api/membersignup`, formData).then(
      (res) => {
        if (!res.data.success) {
          return dispatch(error(res.data.error))
        }
        setModalSuccessShow(true)
      }
    )
  }

  return (
    <>
      <div className="merberSignup container-fluid d-flex">
        <div className="main">
          <div className="loginRole">
            <Button
              variant="link"
              className={`pr-1 ${selectedRole === 'member' ? 'actived' : ''}`}
              onClick={setMember}
            >
              會員
            </Button>
            <Button
              variant="link"
              className="pl-1 seperator"
              onClick={setMerchant}
            >
              商家
            </Button>
          </div>
          <div className="signupInput">
            <h4>歡迎加入NEEDS！</h4>
            <div className="socialMedia">
              <a href="">
                <FaFacebook size="44px" color="#3b5998" />
              </a>
              <a href="">
                <AiFillGooglePlusCircle size="50px" color="#dd4b39" />
              </a>
              <a href="">
                <AiFillTwitterCircle size="50px" color="#26a6d1" />
              </a>
            </div>
            <div className="signupForm">
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type="email"
                    required
                    placeholder="手機/信箱"
                    value={formData.username}
                    onChange={(e) => handleSetForm(e, 'email')}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Control
                    type="password"
                    required
                    placeholder="密碼"
                    value={formData.password1}
                    onChange={(e) => handleSetForm(e, 'password1')}
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Control
                    type="password"
                    required
                    placeholder="密碼"
                    value={formData.password2}
                    onChange={(e) => handleSetForm(e, 'password2')}
                  />
                </Form.Group>
                <p className={alertMsg ? 'alertmsg' : ''}>{alertMsg}</p>
                <Button variant="secondary" type="submit">
                  SIGN UP
                </Button>
              </Form>
              <p>
                點擊註冊代表您同意NEEDS之<a href="">會員條款</a>與
                <a href="">客戶隱私權條款</a>
              </p>
            </div>
          </div>
        </div>
        <div className="side">
          <div className="logo">
            <img
              src={require('@assets/img/logo/logo_icon_whiite.png')}
              alt=""
            />
          </div>
          <div className="text">
            <p>已經是會員了？</p>
            <p>立即登入</p>
          </div>
          <Link to="/login">LOGIN</Link>
        </div>
      </div>
    </>
  )
}

export default withRouter(MerberSignup)
