import React from 'react'
import { Row, Col } from 'react-bootstrap'

function DeliveryPaymentInfo(props) {
  return (
    <Row>
      <Col md={6}>
        <span className="table-title">商品運費</span>
        <div className="card delivery mt-2 border rounded">
          <table className="table table-borderless m-0 font-s">
            <tbody>
              <tr className="border-bottom">
                <td>運送方式</td>
                <td>免運金額</td>
                <td>運費</td>
              </tr>
              <tr className="border-bottom">
                <td>7-11取貨</td>
                <td>滿 NT$ 1,500 </td>
                <td>NT$ 60</td>
              </tr>
              <tr className="border-bottom">
                <td>郵寄</td>
                <td>滿 NT$ 1,500 </td>
                <td>NT$ 60</td>
              </tr>
              <tr className="border-bottom">
                <td>宅配</td>
                <td>滿 NT$ 1,500 </td>
                <td>NT$ 60</td>
              </tr>
              <tr>
                <td colSpan={3}>
                  實際運費金額以購物車結算或到貨時收取的金額為準
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
      <Col md={6}>
        <span className="pl-3 subtitle">付款方式</span>
        <div className="card p-094 my-2 text-subpoint font-s border rounded">
          信用卡安全加密付款、ATM 轉帳繳費、711貨到付款
        </div>
        <span className="pl-3 subtitle">配送資訊</span>
        <div className="card p-094 my-2 text-subpoint font-s border rounded">
          付款後，從備貨到寄出商品為 5-7 個工作天（不包含假日）
        </div>
        <span className="pl-3 subtitle">退款換貨須知</span>
        <div className="card p-094 my-2 text-subpoint font-s border rounded">
          點我了解店家的退款換貨須知
        </div>
      </Col>
    </Row>
  )
}

export default DeliveryPaymentInfo
