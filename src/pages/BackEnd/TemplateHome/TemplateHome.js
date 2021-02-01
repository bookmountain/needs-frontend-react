import React, { useState, useEffect } from 'react'
import { withRouter,useHistory} from 'react-router-dom'
import swal from 'sweetalert';


import { Col, Container, Card, CardDeck, Row , Modal ,Button } from 'react-bootstrap'

import TemplatepicBig from './images/minimal_pro.png'
import './Styles/TemplateHome.scss'
import '../../../styles/Backend/_backend.scss'

import { MdVisibility, MdVisibilityOff, MdEdit } from 'react-icons/md'
import TemplateCard from '../TemplateList/TemplateCard'



function TemplateHome(props) {

const [favName,setFavName] = useState('')
const [myFav,setMyFav] = useState([])
const [show,setShow] = useState(false)
const [unItem, setUnItem] =useState('')

const handleShow = () =>setShow(true)
const handleClose = () =>setShow(false)

// const whosLogin = useSelector((state) => state.authentication.loggedIn)

const UnFav = (unItem) => {
  const currentFav = JSON.parse(localStorage.getItem('Fav')) || []
  // console.log('currentFav',JSON.parse(localStorage.getItem('Fav')) );
  // const index = currentFav.findIndex( (v) => v.Id == unItem.Id)//如果localstorage裡有點選要取消收藏的Id：>-1
  if(unItem){
    const arr = currentFav.filter(item => (item.Id !== unItem))
    localStorage.setItem('Fav', JSON.stringify(arr))
    console.log('arr',arr)
    setShow(false)
  }else{
    setShow(false)
    console.log('hi')
  }
}

const currentFav = JSON.parse(localStorage.getItem('Fav')) || []

const updateFavToLocalStorage = function (item) {
  const currentFav = JSON.parse(localStorage.getItem('Fav')) || []
  console.log('currentFav',JSON.parse(localStorage.getItem('Fav')) );
  const index = currentFav.findIndex( (v) => v.Id === item.Id)

      if( index > -1){
        //currentFav[index].amount++
        setFavName('要取消收藏嗎？')
        console.log('item.Id',item.Id);
        setUnItem(item.Id)
        // handleShowdDeletBtn(true)
        handleShow()
        return
      }else{
        console.log('item',item);
        currentFav.push(item)
        console.log('currentFav',currentFav);
        setFavName('收藏成功！')
        localStorage.setItem('Fav', JSON.stringify(currentFav))
        setMyFav(currentFav)
        handleShow()
      }
    
    //設定加入
    
  }

  const messageModal = (
    <div className="template">
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body><h2>{favName}</h2></Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={e=>UnFav(unItem)} >
        確定
        </Button>
        {/* <Button
          variant="dark"
          onClick={() => {
            props.history.push('/customer-backend/template-home')
          }}
        >
          前往收藏清單
        </Button> */}
      </Modal.Footer>
    </Modal>
    </div>
  )

  const home = (
    <div className="template">
        <Col className="offset-2" xs={10}>
          <div className="container-fluid w-80">
            <h4 className="mt-4">主題</h4>
            <Button className="mt-4 btn-light" onClick={()=>{props.history.push('/homepage/Pommedepin111/12')}}>
              <MdVisibility /> 查看目前主頁
            </Button>
            <hr />
            <h4 className="mt-4">當前主題</h4>
            <button className="mt-3 btn-purple" onClick={()=>{props.history.push('/customer-backend/template-edit')}}>
              <MdEdit /> 編輯當前主題
            </button>

            <div className="main-div rounded mt-5 main-adjust">
              <div className="col-6">
                <div className="d-flex flex-column">
                  <img
                    src={TemplatepicBig}
                    className="img-fluid bg-img mt-3"
                    alt="Responsive image"
                  ></img>
                  <button className="mt-4 mb-2 btn-large" onClick={()=>{props.history.push('/customer-backend/template-list')}}>前往主題商店</button>
                </div>
              </div>
              <div className="col-6"></div>
            </div>

            <h4 className="mt-4">收藏的主題</h4>

            <hr />
            {/* <TemplateCard template = {}/> */}

            <TemplateCard Template = {currentFav} onClickMethod={ function(abc) { updateFavToLocalStorage(abc)} }/>

          </div>
        </Col>
      </div>
  )

  return (
    <>
      {home}
      {messageModal}
    </>
  )
}

export default TemplateHome
