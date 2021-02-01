import React, { useState, useEffect } from 'react'
import { Card, Table } from 'react-bootstrap'
import Axios from 'axios'
import moment from 'moment'
import 'moment/locale/zh-tw'

function DispatchStatus() {
  const [dispatchData, setDispatchData] = useState('')
  const getDispatchData = () => {
    Axios.get('http://localhost:5000/dashboard/deliverytablefordashboard').then(
      (response) => {
        const data = response.data
        let dataTable = []
        let dateArray = []
        for (let i = 0; i < data.length; i++) {
          let date = data[i].created_at
          let statusString = ''
          date = moment(date).startOf('hour').fromNow()
          dateArray.push(date)
          switch (data[i].delivery_status) {
            case 0:
              statusString = (
                <>
                  <i className="fas fa-circle circle-preparing"></i>
                  備貨中
                </>
              )
              break
            case 1:
              statusString = (
                <>
                  <i className="fas fa-circle circle-shipped"></i>
                  已發貨
                </>
              )
              break
            case 2:
              statusString = (
                <>
                  <i className="fas fa-circle circle-arrived"></i>
                  已送達
                </>
              )
              break
            case 3:
              statusString = (
                <>
                  <i className="fas fa-circle circle-received"></i>
                  已取貨
                </>
              )
              break
            case 4:
              statusString = (
                <>
                  <i className="fas fa-circle circle-refunding"></i>
                  退貨中
                </>
              )
              break
            case 5:
              statusString = (
                <>
                  <i className="fas fa-circle circle-refunded"></i>
                  已退貨
                </>
              )
              break
            case 6:
              statusString = (
                <>
                  <i className="fas fa-circle circle-not-shipped"></i>
                  無配送
                </>
              )
              break
            default:
          }
          dataTable.push(
            <>
              <tr>
                <td>#{data[i].order_number}</td>
                {/* <td>
                  <i className="fas fa-circle circle-not-shipped"></i>
                </td> */}
                <td>{statusString}</td>
                <td>${data[i].amount}</td>
                <td>{data[i].type}</td>
                <td>{dateArray[i]}</td>
              </tr>
            </>
          )
        }
        setDispatchData(dataTable)
      }
    )
  }

  useEffect(() => {
    getDispatchData()
  }, [])

  return (
    <>
      <Card className="delivery-data revenue">
        <div className="revenue-title">待處理訂單</div>
        <Table hover borderless className="">
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>狀態</th>
              <th>金額</th>
              <th>取貨方式</th>
              <th>日期</th>
            </tr>
          </thead>
          <tbody>{dispatchData}</tbody>
        </Table>
      </Card>
    </>
  )
}

export default DispatchStatus
