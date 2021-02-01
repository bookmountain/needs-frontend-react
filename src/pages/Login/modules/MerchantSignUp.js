import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'
import { alertActions } from '../../../actions'
import { Button, Form, Modal } from 'react-bootstrap'
import './MerchantSignUp.scss'
const MerchantSignUp = (props) => {
  const dispatch = useDispatch()
  const { error } = alertActions

  const [submitted, setSubmitted] = useState(false)
  const [modalSuccessShow, setModalSuccessShow] = useState(false)
  const [formData, setFormData] = useState({})
  const alertMsg = useSelector((state) => state.alert.message)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    Axios.post(
      `http://localhost:5000/signup-api/merchantsignup`,
      formData
    ).then((res) => {
      if (!res.data.success) {
        return dispatch(error(res.data.error))
      }
      setModalSuccessShow(true)
    })
  }

  const handleSetForm = (e, key) => {
    const value = e.target.value
    setFormData({ ...formData, [key]: value })
  }
  return (
    <>
      <div className="merchantSignup container-fluid justify-content-center">
        <div className="wrap">
          <div className="side">
            <img
              className="logo"
              src={require('@assets/img/login/signup_logo.png')}
              alt=""
            />
            <img
              className="signUpimg"
              src={require('@assets/img/login/signup_img.jpg')}
              alt=""
            />
          </div>
          <div className="main">
            <div className="signupInput">
              <h4
                onClick={() =>
                  setFormData({
                    name: 'Pika Chu',
                    mobile: '0911-123-456',
                    email: 'pchu@qmail.com',
                    password: '1234',
                  })
                }
              >
                商家註冊
              </h4>
              <div className="signupForm">
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Control
                      type="text"
                      placeholder="姓名"
                      value={formData.name}
                      onChange={(e) => handleSetForm(e, 'name')}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="mobile">
                    <Form.Control
                      type="text"
                      placeholder="手機"
                      value={formData.mobile}
                      onChange={(e) => handleSetForm(e, 'mobile')}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="信箱"
                      value={formData.email}
                      onChange={(e) => handleSetForm(e, 'email')}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Control
                      type="password"
                      placeholder="密碼"
                      value={formData.password}
                      onChange={(e) => handleSetForm(e, 'password')}
                      required
                    />
                  </Form.Group>
                  <p className={alertMsg ? 'alertmsg' : ''}>{alertMsg}</p>
                  <Button variant="primary" type="submit">
                    SIGNUP
                  </Button>
                </Form>
                <p>
                  <a href="#">NEEDS商店政策與規則</a>
                </p>
                <p>
                  點擊註冊代表您同意NEEDS之<a href="#">會員條款</a>與
                  <a href="#">客戶隱私權條款</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          className="signUpModal"
          centered
          show={modalSuccessShow}
          onHide={() => setModalSuccessShow(false)}
        >
          <Modal.Body>
            <h4>註冊成功</h4>
            <h4>馬上開始設計店鋪</h4>
            <Button
              onClick={() => {
                setModalSuccessShow(false)
                props.history.push('/login')
              }}
            >
              出發
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default withRouter(MerchantSignUp)
