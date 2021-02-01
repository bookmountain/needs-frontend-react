import React, { useState, useEffect } from 'react'
import {
    Col,
    Container,
    Row
  } from 'react-bootstrap'
import './styles/Narrative.scss'
import { GiPositionMarker } from 'react-icons/gi';


function Narrative(props){

const {color} = props
console.log(props)

    return(
        <>
          <div className="Narrative">
            
          <div className="sec1_background"></div>
          <div className="background-color" style={{
            backgroundColor:props.color,
          }}></div>
          <Container className="p-0">
            <div className="sec1 d-flex">
            <div className="sec1_avatar m-auto">
              <div className="d-flex mx-auto">
                <div className="d-flex ml-3">  
                <div className="d-flex flex-column align-items-center">
                
                <div className="avatar rounded pb-3"></div>
                  <button className="store-follower-btn rounded">+關注</button>
                </div>
                  
                  <div className="d-flex flex-column">
                <h2 className="h4">愛治文具房</h2>
                  <div className="mt-3">
                  <h4>aiyabungu</h4>
                  <h4>電話：0975-875120</h4>
                  <h4><GiPositionMarker/>地址：彰化縣彰化市長安街76巷7-2號1樓</h4>
                  </div>
              </div>
                  </div>
        
              </div>
            </div>  

            <div className="sec1_info">
              <Row className="row1 mx-auto">
                  <Col>
                  <h4>評價</h4>
                  <h4 className="red">尚無評價</h4>
                  </Col>
                  <Col>
                  <h4>粉絲</h4>
                  <h4 className="red">0</h4>
                  </Col>
                  <Col>
                  <h4>商品</h4>
                  <h4 className="red">106</h4>
                  </Col>
                </Row>
                <Row className="mx-auto">
                  <Col>
                    <h4>加入時間</h4>
                    <h4>2019/10/05</h4>
                    </Col>
                    <Col>
                    <h4>回應速度</h4>
                    <h4>尚無評價</h4>
                    </Col>
                    <Col>
                    <h4>出貨速度</h4>
                    <h4>尚無評價</h4>
                    </Col>
                </Row> 
            </div>
            </div>
            </Container>
            
            <div className="sec2">
              <div className="d-flex justify-content-between m-auto">
              <div className="product-bg-pic"></div>
              <div className="d-flex flex-column wrapper">
              <h2>本週主打</h2>
              <h4>巴川紙68磅筆記本</h4>
              <div className="product-sml-pic"></div>
              <p className="sml">台灣製造安心有保障，精選68磅優良米色巴川紙，紙質不易透，可適用於鋼筆書寫攤平書寫更便利，典雅燙金點綴，是手帳愛好者不可錯過的內頁之一。</p>
              <h2>NT$780</h2>
              <button className="btn">加入購物車</button>
              </div>
              </div>
              
            </div>
{/* 
            <div className="sec3">
              商品列表
            </div> */}

            <div className="sec4">
              {/* <div className="activities-wrapper d-flex align-items-end m-auto"> */}
                
              <div className="activities-wrapper d-flex align-items-end m-auto">
              <div className="activities-img"></div>
                <div className="text d-flex flex-column justify-content-between my-auto">
                      <h2>玩浮水畫 縫中式冊子【 1 人成團】</h2>
                      <h4>課程日期：</h4>
                      <p>2020/11/24(二)14:00~16:00</p>
                      <p>2020/11/26(四)14:00~16:00</p>
                      <h4>地點：</h4>
                      <p>來本冊子工作室</p>
                      <p>苗栗市中正路1381號 (協和醫院旁)</p>
                      <button className="activity-btn rounded">立即報名</button>
                    </div>
              </div>
                  
              {/* </div> */}
            </div>

            <div className="sec5 py-5">

            <div className="m-auto">
              <div className=" underline-wrapper">
              <div className="underline ml-5">
              <h2>品牌故事</h2>
              </div>
              </div>

              <div className="d-flex adjust">
              <div className="brandStory_img"></div>
              <div className=" col-6 text-wrapper ml-5">
              <h4>
                愛治文具房-充滿文具的房間 愛治是我奶奶的名字。

                小時候因為父母忙碌也有段時間沒有住在一起，因此奶奶教了我許多生活的道理，處事的方法。溫暖待人是最重要的。今年我的奶奶九十歲了還是很健康的陪在我們家人的身邊：） 希望這家生活文具店能夠像奶奶一樣一直一直在彰化陪著大家走下去。
              </h4>
              </div>

              </div>
              </div>

            </div>
          </div>
        </>
    )
}
export default Narrative