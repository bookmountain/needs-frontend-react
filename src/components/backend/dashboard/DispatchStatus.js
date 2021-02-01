import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroup, Badge } from 'react-bootstrap'
import Axios from 'axios'

function DispatchStatus() {
  const [status0, setStatus0] = useState(0)
  const [status1, setStatus1] = useState(0)
  const [status2, setStatus2] = useState(0)
  const [status3, setStatus3] = useState(0)
  const [status4, setStatus4] = useState(0)
  const [status5, setStatus5] = useState(0)
  const [status6, setStatus6] = useState(0)
  const getDispatchAmount = () => {
    Axios.get('http://localhost:5000/dashboard//deliverystatusamount').then(
      (response) => {
        let status0Array = []
        let status1Array = []
        let status2Array = []
        let status3Array = []
        let status4Array = []
        let status5Array = []
        let status6Array = []
        const data = response.data
        for (let i = 0; i < data.length; i++) {
          if (data[i].delivery_status === 0) {
            status0Array.push(data[i].delivery_status)
            setStatus0(status0Array.length)
          }
          if (data[i].delivery_status === 1) {
            status1Array.push(data[i].delivery_status)
            setStatus1(status1Array.length)
          }
          if (data[i].delivery_staus === 2) {
            status2Array.push(data[i].delivery_status)
            setStatus2(status2Array.length)
          }
          if (data[i].delivery_status === 3) {
            status3Array.push(data[i].delivery_status)
            setStatus3(status3Array.length)
          }
          if (data[i].delivery_status === 4) {
            status4Array.push(data[i].delivery_status)
            setStatus4(status4Array.length)
          }
          if (data[i].delivery_status === 5) {
            status5Array.push(data[i].delivery_status)
            setStatus5(status5Array.length)
          }
          if (data[i].delivery_status === 6) {
            status6Array.push(data[i].delivery_status)
            setStatus6(status6Array.length)
          }
        }
      }
    )
  }
  useEffect(() => {
    getDispatchAmount()
  }, [])
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-0">出貨狀況</Card.Title>
        </Card.Body>
        <ListGroup>
          <ListGroup.Item>
            備貨中
            <Badge pill variant="primary" className="float-right">
              {status0}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            已發貨
            <Badge pill variant="success" className="float-right">
              {status1}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            已送達
            <Badge pill variant="danger" className="float-right">
              {status2}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            已取貨
            <Badge pill variant="warning" className="float-right">
              {status3}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            退貨中
            <Badge pill variant="info" className="float-right">
              {status4}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            已退貨
            <Badge pill variant="secondary" className="float-right">
              {status5}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            無配送
            <Badge pill variant="dark" className="float-right">
              {status6}
            </Badge>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to="" className="card-link">
            訂單詳情
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default DispatchStatus
