import React from 'react'
import { Button } from 'react-bootstrap'

const Fee = () => {
  return (
    <>
      <div className="container-fluid feeSec">
        <div className="secTitle">
          <h4>平台費用</h4>
        </div>
        <div className="feeContent row mx-0">
          <div className="standardPlan col-lg-6 col-sm-12">
            <img
              src={require(`@assets/img/investment/6_winner.png`)}
              alt=""
              className="planIcon"
            />
            <h4>標準方案 Standard</h4>
            <div className="plan">
              <ul>
                <li>保證金 $10,000</li>
                <li>月租費 $1,500</li>
                <li>免成交手續費</li>
                <li>免訂單處理費</li>
              </ul>
            </div>
          </div>
          <div className="premiumPlan col-lg-6 col-sm-12">
            <img
              src={require(`@assets/img/investment/6_diamond.png`)}
              alt=""
              className="planIcon"
            />
            <h4>進階方案 Premium</h4>
            <div className="plan">
              <ul>
                <li>保證金 $10,000</li>
                <li>月租費 $2,000</li>
                <li>免成交手續費</li>
                <li>免訂單處理費</li>
              </ul>
            </div>
          </div>
          <Button variant="light">方案詳情 →</Button>
        </div>
      </div>
    </>
  )
}

export default Fee
