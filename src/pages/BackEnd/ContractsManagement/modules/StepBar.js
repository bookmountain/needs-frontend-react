import React from 'react'
import { useSelector } from 'react-redux'

const StepBar = (props) => {
  const { stepIndex, setStepIndex } = props
  return (
    <>
      <div className="steps">
        <div className={`steps-item ${stepIndex >= 1 ? 'active' : ''}`}>
          <div className="steps-item-container ">
            <div className="steps-item-icon">
              <span>1</span>
            </div>
            <div className="steps-item-content">選擇方案</div>
          </div>
        </div>

        <div className={`steps-item ${stepIndex >= 2 ? 'active' : ''}`}>
          <div className="steps-item-trail"></div>
          <div className="steps-item-container">
            <div className="steps-item-icon">
              <span>2</span>
            </div>
            <div className="steps-item-content">付款方式</div>
          </div>
        </div>

        <div className={`steps-item ${stepIndex >= 3 ? 'active' : ''}`}>
          <div className="steps-item-trail"></div>
          <div className="steps-item-container">
            <div className="steps-item-icon">
              <span>3</span>
            </div>
            <div className="steps-item-content">確認資料</div>
          </div>
        </div>

        <div className={`steps-item ${stepIndex >= 4 ? 'active' : ''}`}>
          <div className="steps-item-trail"></div>
          <div className="steps-item-container">
            <div className="steps-item-icon">
              <span>4</span>
            </div>
            <div className="steps-item-content">完成簽約</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StepBar
