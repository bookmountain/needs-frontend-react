import React, { useState } from 'react'
import { Card, Table, Button, Modal } from 'react-bootstrap'
import AddAdsModal from './AddAdsModal'
import {} from 'react-icons/ai'

function InProgressAds(props) {
  return (
    <>
      <div className="in-progress-wrapper">
        <Card>
          <Card.Body>
            <div className="in-progress-card-header">
              <Card.Title className="mb-3">已投放之廣告</Card.Title>
              <AddAdsModal />
            </div>
            <div className="table-container">
              <Table hover borderless className="in-progress-table mt-3">
                <thead className="in-progress-header">
                  <tr>
                    {/* <th>訂單編號</th> */}
                    <th>廣告名稱</th>
                    {/* <th>狀態</th>
                    <th>廣告格式</th> */}
                    <th>點擊出價</th>
                    <th>起始時間</th>
                    <th>結束時間</th>
                    <th>活動天數</th>
                  </tr>
                </thead>
                <tbody>{props.adsDataTable}</tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default InProgressAds
