import React from 'react'
import { SiLine, SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Container>
        <div className="footerSec">
          <div className="subSection">
            <div className="title">購買</div>
            <ul>
              <li>所有商品分類</li>
              <li>找靈感</li>
              <li>逛櫥窗</li>
              <li>設計誌</li>
              <li>客人問與答</li>
            </ul>
          </div>

          <div className="subSection">
            <div className="title">販售</div>
            <ul>
              <li>我要開品牌館</li>
              <li>品牌館問與答</li>
            </ul>
          </div>

          <div className="subSection">
            <div className="title">幫助/政策</div>
            <ul>
              <li>問與答</li>
              <li>大宗採購</li>
              <li>訊息公告</li>
              <li>服務條款</li>
              <li>退貨政策</li>
            </ul>
          </div>

          <div className="subSection">
            <div className="title">關於</div>
            <ul>
              <li>關於我們</li>
              <li>媒體報導</li>
              <li>工作機會</li>
            </ul>
          </div>
          <div className="subSection">
            <div className="title">追蹤</div>
            <span className="socialMediaIcon">
              <SiLine size="18px" />
            </span>
            <span className="socialMediaIcon">
              <SiInstagram size="18px" />
            </span>
            <span className="socialMediaIcon">
              <SiFacebook size="18px" />
            </span>
            <span className="socialMediaIcon">
              <SiYoutube size="18px" />
            </span>
          </div>
          <p className="copyRight">
            Copyright © 2020 NEEDS.Inc All rights reserved.
          </p>
        </div>
      </Container>
    </>
  )
}

export default Footer
