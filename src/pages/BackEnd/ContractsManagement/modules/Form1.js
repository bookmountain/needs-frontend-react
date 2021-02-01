import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Radio } from 'antd'

const Form1 = () => {
  return (
    <>
      <div className="inputGroup">
        <div>
          <div className="inputItem">
            <label>開始日期</label>
            <input type="date" />
          </div>
          <div className="inputItem">
            <label>結束日期</label>
            <input type="date" />
          </div>
          <div className="inputItem">
            <label>方案</label>
            <Radio.Group>
              <Radio value={1} className="mr-2">
                標準方案
              </Radio>
              <Radio value={2}>進階方案</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="card">
          <div className="card-header">價金明細</div>
          <div className="card-title"></div>
          <div className="card-body d-flex justify-content-between">
            <div>
              <p>-方案</p>
              <p>-單價</p>
              <p>1.2020/11/21-2020/11/30</p>
            </div>
            <div>
              <p>標準方案</p>
              <p>$1500/月</p>
              <p>$750</p>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <div>
              <p>總天數</p>
              <p>總金額</p>
            </div>
            <div>
              <p>30天</p>
              <p>$1500</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form1
