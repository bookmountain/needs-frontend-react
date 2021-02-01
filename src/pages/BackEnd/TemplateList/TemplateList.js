import React, { useState, useEffect } from 'react'
// import Axios from 'axios'

import {
  Col,
  Container,
  Card,
  CardDeck,
  Row,
  Modal,
  Button,
} from 'react-bootstrap'
import { FiHeart } from 'react-icons/fi'
import { Radio } from 'antd'

import './Styles/TemplateList.scss'
import '../../../styles/Backend/_backend.scss'
import TemplateCard from './TemplateCard'
import { Handle } from 'rc-slider'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
// import { data } from 'jquery'
import QueueAnim from 'rc-queue-anim'
import { css } from '@emotion/core'
import DotLoader from 'react-spinners/DotLoader'

function TemplateList(props) {
  //設定初始狀態

  const [Template, setTemplate] = useState([])
  const [error, setError] = useState(null)
  const [type, setType] = useState(3)
  const [myFav, setMyFav] = useState([])
  const [show, setShow] = useState(false)
  const [favName, setFavName] = useState('')
  const [Name, setName] = useState('')
  const [PlanType, setPlanType] = useState('')
  const [Img, setImg] = useState('')
  const [unItem, setUnItem] = useState('')
  const [dataLoading, setDataLoading] = useState(false)

  //eventhandler
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const UnFav = (unItem) => {
    const currentFav = JSON.parse(localStorage.getItem('Fav')) || []
    // console.log('currentFav',JSON.parse(localStorage.getItem('Fav')) );
    // const index = currentFav.findIndex( (v) => v.Id == unItem.Id)//如果localstorage裡有點選要取消收藏的Id：>-1
    if (unItem) {
      const arr = currentFav.filter((item) => item.Id !== unItem)
      localStorage.setItem('Fav', JSON.stringify(arr))
      console.log('arr', arr)
      setShow(false)
      setUnItem('')
    } else {
      setShow(false)
      console.log('hi')
    }

    // const index = currentFav.findIndex( (v) => v.Id === item.Id)
    // console.log('index',index)
    // if( index > -1){
    // return
    // }
  }

  //檢查要加入的項目是否存在localStorage
  const updateFavToLocalStorage = (item) => {
    const currentFav = JSON.parse(localStorage.getItem('Fav')) || []
    console.log('currentFav', JSON.parse(localStorage.getItem('Fav')))
    const index = currentFav.findIndex((v) => v.Id === item.Id)
    //若存在就取消，沒有就加入（found:index ! == -1）：index為在findIndex時localstorage的currentFav.id和要加入的item.id比對，第幾筆相同（若有，會從0開始因此<0不存在）

    if (index > -1) {
      //currentFav[index].amount++
      setFavName('要取消收藏嗎？')
      console.log('item.Id', item.Id)
      setUnItem(item.Id)
      // handleShowdDeletBtn(true)
      handleShow()
      return
    } else {
      console.log('item', item)
      currentFav.push(item)
      console.log('currentFav', currentFav)
      setFavName('收藏成功！')
      localStorage.setItem('Fav', JSON.stringify(currentFav))
      setMyFav(currentFav)
      handleShow()
    }
    //設定加入
  }

  const override = css`
    display: block;
    margin: 300px auto;
    border-color: #7367f0;
  `

  const loading = (
    <>
      <div className="template">
        <Col className="offset-2" xs={10}>
          <div className="sweet-loading">
            <DotLoader
              css={override}
              size={90}
              color={'#123abc'}
              // loading={this.state.loading}
            />
          </div>
        </Col>
      </div>
    </>
  )

  const messageModal = (
    <div className="template">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>{favName}</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={(e) => UnFav(unItem)}>
            確定
          </Button>
          <Button
            variant="dark"
            onClick={() => {
              props.history.push('/customer-backend/template-home')
            }}
          >
            前往收藏清單
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

  //server-data
  async function getTemplateData(type) {
    setDataLoading(true)
    // console.log('type',type)
    const url = `http://localhost:5000/Template?type=${type}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    try {
      const response = await fetch(request) //response:fetch網址的資料
      const data = await response.json()
      console.log('data', data[1].img)
      setTemplate(data)
      setName(data[1].name)
      setPlanType(data[1].plan_level)
      setImg(data[1].img)
      setTimeout(() => setDataLoading(false), 500)
    } catch (error) {
      setError('oops! error')
      setTimeout(() => setDataLoading(false), 500)
    }
  }

  console.log('name', Name)
  console.log('planType', PlanType)

  useEffect(() => {
    getTemplateData(type)
  }, [type])

  const display = (
    <>
      <div className="template">
        <Col className="offset-2" xs={10}>
          <Container fluid>
            <div className="d-flex justify-content-end ">
              {/* <button></button> */}
              <div className="template-main-div rounded mr-2">
                <p>熱門程度</p>
              </div>
              <div className="template-main-div rounded ">
                <p>
                  主題類別：<span></span>
                  <Radio.Group name="radiogroup" defaultValue={type}>
                    <Radio value={3} onClick={() => setType(3)}>
                      {' '}
                      全部{' '}
                    </Radio>
                    <Radio value={1} onClick={() => setType(1)}>
                      {' '}
                      標準方案{' '}
                    </Radio>
                    <Radio value={2} onClick={() => setType(2)}>
                      {' '}
                      進階方案{' '}
                    </Radio>
                    {/* <Radio value={3} onClick={()=>setType(3)} checked={type===3}> 全部 </Radio> 
                  <Radio value={1} onClick={()=>setType(1)} checked={type===1}> 標準方案 </Radio> 
                  <Radio value={2} onClick={()=>setType(2)} checked={type===2}> 進階方案 </Radio> */}
                  </Radio.Group>
                </p>
              </div>
            </div>
            <hr />
          </Container>
        </Col>
      </div>

      {/* recommend-section */}

      <div className="template">
        <Col className="offset-2" xs={10}>
          <Container fluid>
            <div className="main-div recommend rounded d-flex align-items-center ">
              <div className="row rounded d-flex align-items-center">
                <div className="col-8">
                  <img
                    src={`http://localhost:5000/img/template/${Img}`}
                    className="main-small-pic"
                    alt="Responsive image"
                  ></img>
                  <img
                    src={`http://localhost:5000/img/template/${
                      type == 2 ? 'sparo_bg.png' : 'minimal_bg.png'
                    }`}
                    className="img-fluid main-bg-pic"
                    alt="Responsive image"
                  ></img>
                </div>
                <div className="col-4 mh-100 text-adjust">
                  <div className="d-flex flex-column justify-content-around ">
                    <h1 className="h4">{Name}</h1>
                    <p className="mt-2">方案：{PlanType}</p>
                    <div className="pb-2">
                      <button
                        className="btn-bg gray mt-2"
                        onClick={(item) => {
                          updateFavToLocalStorage(item)
                        }}
                      >
                        <FiHeart /> 加入收藏
                      </button>
                    </div>
                    <div>
                      <button className="btn-bg purple mt-2">立即套用</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Col>
      </div>

      {/* TemplateCard */}

      <div className="template mt-3">
        <Col className="offset-2" xs={10}>
          <Container fluid>
            <Row>
              <CardDeck className="pb-3 card-adjust">
                <TemplateCard
                  Template={Template}
                  onClickMethod={function (abc) {
                    updateFavToLocalStorage(abc)
                  }}
                />
              </CardDeck>
            </Row>
          </Container>
        </Col>
      </div>
    </>
  )
  return (
    <>
      {messageModal}
      {dataLoading ? loading : display}
    </>
  )
}

export default TemplateList
