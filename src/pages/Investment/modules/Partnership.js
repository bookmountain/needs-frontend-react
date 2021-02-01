import React from 'react'
import { Transition } from 'react-spring/renderprops'

const Partnership = ({ show, aniRef }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="partnershipSec" ref={aniRef}>
          <Transition
            items={show}
            from={{ transform: 'translateY(-100px)', opacity: 0 }}
            enter={{ transform: 'translateY(0)', opacity: 1 }}
            config={{ duration: 1500 }}
          >
            {(show) =>
              show &&
              ((props) => {
                return (
                  <div className="secTitle col-lg-6 col-sm-12" style={props}>
                    <h4>合作方式</h4>
                  </div>
                )
              })
            }
          </Transition>

          <div
            className={`partnershipContent col-lg-6 col-sm-12
          ${show ? 'bgImg' : ''}`}
          >
            <ul>
              <h4>NEEDS提供</h4>
              <li>免收開館費，免收上架費</li>
              <li>各式行銷媒體資源</li>
              <li>營收報表供隨時登入查詢</li>
              <li>每月安排營收匯款至指定帳戶</li>
            </ul>
            <ul>
              <h4>品牌提供</h4>
              <li>提交申請，簽立電子合約</li>
              <li>自行架設設計館，上架商品</li>
              <li>自行出貨，管理庫存</li>
              <li>依規範處理客服及退換貨</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partnership
