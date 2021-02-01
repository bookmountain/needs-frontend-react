import React, { useState, useEffect } from 'react'
import './styles/index.scss'
import KeyIndex from '../../../components/backend/sales/KeyIndex'
import BuyerAnalytics from '../../../components/backend/sales/BuyerAnalytics'
import MerchantsRank from '../../../components/backend/sales/MerchantsRank'
import CategoriesRank from '../../../components/backend/sales/CategoriesRank'
import Axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'

function Sales() {
  const [dataTableForRevenue, setDataTableForRevenue] = useState([])
  const [dataTableForAmount, setDataTableForAmount] = useState([])
  const [dataTableForCate, setDataTableForCate] = useState([])
  const getProductRank = () => {
    Axios.get('http://localhost:5000/dashboard/merchantsellrank').then(
      (response) => {
        const data = response.data
        let dataObject = {}
        let dataArray = []
        for (let i = 0; i < data.length; i++) {
          dataObject = {}
          dataObject.title = data[i].title
          dataObject.revenue = data[i].total_quantity * data[i].unit_price
          dataObject.amount = data[i].total_quantity
          dataObject.category = data[i].name
          dataArray.push(dataObject)
        }
        console.log(dataArray)
        let dataTableForAmountArray = []
        dataArray
          .sort(function (a, b) {
            return a.amount - b.amount
          })
          .reverse()
        for (let i = 0; i < data.length; i++) {
          dataTableForAmountArray.push(
            <>
              <tr>
                <td>{i + 1}</td>
                <td>{dataArray[i].title}</td>
                <td>{dataArray[i].amount}</td>
              </tr>
            </>
          )
        }
        let dataTableForRevenueArray = []
        dataArray
          .sort(function (a, b) {
            return a.revenue - b.revenue
          })
          .reverse()
        for (let i = 0; i < data.length; i++) {
          dataTableForRevenueArray.push(
            <>
              <tr>
                <td>{i + 1}</td>
                <td>{dataArray[i].title}</td>
                <td>{dataArray[i].revenue}</td>
              </tr>
            </>
          )
        }
        let dataTableForCateArray = []
        dataArray
          .sort(function (a, b) {
            return a.revenue - b.revenue
          })
          .reverse()
        for (let i = 0; i < data.length; i++) {
          dataTableForCateArray.push(
            <>
              <tr>
                <td>{i + 1}</td>
                <td>{dataArray[i].category}</td>
                <td>{dataArray[i].revenue}</td>
              </tr>
            </>
          )
        }
        setDataTableForRevenue(dataTableForRevenueArray)
        setDataTableForAmount(dataTableForAmountArray)
        setDataTableForCate(dataTableForCateArray)
      }
    )
  }

  const getProductRankByCate = () => {
    Axios.get(
      'http://localhost:5000/dashboard/merchantsellrankgroupbyname'
    ).then((response) => {
      const data = response.data
      let dataObject = {}
      let dataArray = []
      for (let i = 0; i < data.length; i++) {
        dataObject = {}
        dataObject.title = data[i].title
        dataObject.revenue = data[i].total_quantity * data[i].unit_price
        dataObject.amount = data[i].total_quantity
        dataObject.category = data[i].name
        dataArray.push(dataObject)
      }
      let dataTableForCateArray = []
      dataArray
        .sort(function (a, b) {
          return a.revenue - b.revenue
        })
        .reverse()
      for (let i = 0; i < data.length; i++) {
        dataTableForCateArray.push(
          <>
            <tr>
              <td>{i + 1}</td>
              <td>{dataArray[i].category}</td>
              <td>{dataArray[i].revenue}</td>
            </tr>
          </>
        )
      }
      setDataTableForCate(dataTableForCateArray)
    })
  }
  useEffect(() => {
    getProductRank()
    getProductRankByCate()
  }, [])
  return (
    <>
      <div className="sales-wrapper">
        <Col className="main offset-2" xs={10}>
          <Container fluid className="main-bg">
            <Row className="my-3">
              <Col xs={12}>
                <KeyIndex />
              </Col>
              <Col xs={12}>
                <BuyerAnalytics />
              </Col>
            </Row>
            <Row className="my-3">
              <Col xs={7}>
                <MerchantsRank
                  dataTableForRevenue={dataTableForRevenue}
                  dataTableForAmount={dataTableForAmount}
                />
              </Col>
              <Col xs={5}>
                <CategoriesRank dataTableForCate={dataTableForCate} />
              </Col>
            </Row>
          </Container>
        </Col>
      </div>
    </>
  )
}

export default Sales
