import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './MemSidebar.scss'
import { Modal, Button } from 'react-bootstrap'

import {
  BsPersonFill,
  BsFillBellFill,
  BsQuestionSquareFill,
} from 'react-icons/bs'
import { FaShoppingBag, FaStore, FaCoins } from 'react-icons/fa'
import { RiMessage2Fill } from 'react-icons/ri'
import { MdAddAPhoto } from 'react-icons/md'

const MemSidebar = (props) => {
  const [avatar, setAvatar] = useState([])
  const [id, setId] = useState(0)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)

  const userSess = JSON.parse(sessionStorage.getItem('user'))

  const getData = async (val) => {
    let url = `http://localhost:5000/member?id=${val}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    setAvatar(res.data[0].avatar)
    // console.log('res.data[0].avatar', res.data[0].avatar)
  }

  const formData = new FormData()

  const updateAvatar = (e) => {
    const file = e.target.files[0]
    formData.append('avatar', file)
  }

  const sendAvatarToNodejs = (e) => {
    e.preventDefault()
    // const formData = new FormData()
    // console.log('props.match.params.id', props.match.params.id)
    let url = `http://localhost:5000/member/upload?id=${id}`
    axios
      .post(url, formData)
      .then((res) => {
        userSess.user.avatar = res.data.avatar
        sessionStorage.setItem('user', JSON.stringify(userSess))
        window.location.href = '/member/card'
      })
      .catch((err) => {
        if (err.response.status === 500) {
          console.log('伺服器有點問題')
        } else {
          console.log(err.response.data.msg)
        }
      })
  }

  useEffect(() => {
    if (isLogin) {
      const memId = loginUser.user.id
      getData(memId)
      setId(memId)
    } else {
      window.location.href = '/login'
    }
  }, [])

  return (
    <>
      <div className="d-flex flex-column memsidebar ">
        <img
          className="avatar mx-auto"
          src={`http://localhost:5000/img/avatar/${avatar}`}
          alt="avatar"
        />

        <div className="d-flex justify-content-end mr-3 mt-1">
          <Button
            className="photoicon p-1"
            variant="primary"
            onClick={handleShow}
          >
            <MdAddAPhoto />
          </Button>

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>
                <MdAddAPhoto />
                快快快來張美照
              </Modal.Title>
            </Modal.Header>
            <form onSubmit={(e) => sendAvatarToNodejs(e)} name="form1">
              <Modal.Body>
                <input
                  type="file"
                  name="filename"
                  id="filename"
                  onChange={(e) => updateAvatar(e)}
                />
              </Modal.Body>

              <Modal.Footer>
                <Button
                  type="file"
                  name="filename"
                  id="filename"
                  variant="primary"
                  onClick={(e) => updateAvatar(e)}
                >
                  換美美頭貼
                </Button>
              </Modal.Footer>
            </form>
          </Modal>

          {/* <form onSubmit={(e) => sendAvatarToNodejs(e)} name="form1">
              <input
                type="file"
                name="filename"
                id="filename"
                onChange={(e) => updateAvatar(e)}
              />
              <input type="submit" value="上傳美照" />
            </form> */}
        </div>
        <div className="sidebar mx-auto">
          <div className="font-s">
            <Link to="/member/card/:id">
              <div className="d-flex  wrapper ">
                <div className="icons">
                  <BsPersonFill />
                </div>
                我的帳號
              </div>
            </Link>
          </div>
          <div className="font-s">
            <Link to="/member/shop">
              <div className="d-flex  wrapper">
                <div className="icons">
                  <FaShoppingBag />
                </div>
                購買清單
              </div>
            </Link>
          </div>
          <div className="font-s">
            <Link to="/member/like">
              <div className="d-flex  wrapper">
                <div className="icons">
                  <FaStore />
                </div>
                我的關注
              </div>
            </Link>
          </div>
          <div className="font-s">
            <Link to="/member/informone">
              <div className="d-flex  wrapper">
                <div className="icons">
                  <BsFillBellFill />
                </div>
                通知中心
              </div>
            </Link>
          </div>
          <div className="font-s">
            <Link to="/member/ecoin">
              <div className="d-flex  wrapper">
                <div className="icons">
                  <FaCoins />
                </div>
                <div className="whiteSpacePre">Ｅcoin </div>
              </div>
            </Link>
          </div>
          <div className="font-s">
            <Link to="/member/comment">
              <div className="d-flex  wrapper">
                <div className="icons">
                  <RiMessage2Fill />
                </div>
                我的評論
              </div>
            </Link>
          </div>
          <div className="font-s">
            <Link to="/member/QA">
              <div className="d-flex  wrapper">
                <div className="icons">
                  <BsQuestionSquareFill />
                </div>
                常見問題
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemSidebar
