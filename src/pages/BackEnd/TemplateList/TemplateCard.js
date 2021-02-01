import React, { useState } from 'react'
import { Col, Container, Card, CardDeck, Row } from 'react-bootstrap'
import { FiHeart } from 'react-icons/fi'
import Templatepic1 from './images/Atlanta_pro.png'
import { useHistory } from 'react-router-dom'

function TemplateCard(props) {
  const { Template, favOrNotBtn } = props
  const history = useHistory()

  const goEdit = () => {
    history.push('/customer-backend/template-edit')
  }

  const updateFavToLocalStorage = function (item) {
    const currentFav = JSON.parse(localStorage.getItem('Fav')) || []
    const index = currentFav.findIndex((v) => v.Id === item.Id)
    //若存在就取消，沒有就加入（found:index ! == -1）
    return index
    //設定加入
  }
  return (
    <>
      <Row>
        <CardDeck className=" card-adjust">
          {Template.map((template, index) => {
            {
              /* console.log('template(value)',template) */
            }
            return (
              <div className="col-4">
                <Card className="rounded mb-5 motion" key={index}>
                  <Card.Img
                    className="p-3"
                    variant="top"
                    src={`http://localhost:5000/img/template/${template.img}`}
                    alt=""
                  />

                  <div className="align-items:center">
                    <Card.Title className="text-center">
                      {template.name}
                    </Card.Title>
                    <Card.Text className="text-center">
                      {template.plan_level}
                    </Card.Text>
                    <Container className="d-flex p-0">
                      <button
                        className={`btn-sml gray left ${
                          updateFavToLocalStorage(template) > -1 ? 'active' : ''
                        }`}
                        onClick={() => props.onClickMethod(template)}
                      >
                        <FiHeart size={20} />{' '}
                        {updateFavToLocalStorage(template) > -1
                          ? '已收藏'
                          : '加入收藏'}
                      </button>
                      <button className="btn-sml purple right" onClick={goEdit}>
                        立即套用
                      </button>
                    </Container>
                  </div>
                </Card>
              </div>
            )
          })}
        </CardDeck>
      </Row>
    </>
  )
}
export default TemplateCard
