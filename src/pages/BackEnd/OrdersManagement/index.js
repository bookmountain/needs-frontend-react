import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Axios from 'axios'
import { Col, Container, Pagination } from 'react-bootstrap'
import ToolBar from './modules/ToolBar'
import OrdersContent from './modules/OrdersContent'
import BackendPagination from '../../../components/backend/BackendPagination'
import History from '../../../components/history'
import './OrdersManagement.scss'

const OrdersManagement = (props) => {
  // all launched soldout unlaunched, grid list
  const [type, setType] = useState('all')
  const [viewType, setViewType] = useState('list')

  const [searchType, setSearchType] = useState(0)
  const [searchInp, setSearchInp] = useState('')

  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const merchantId = useSelector((state) => state.authentication.user.user.id)
  // const [merchantId, setMerchantId] = useState(12)
  const [data, setData] = useState([])
  const [pageItems, setPageItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const toPage = (e) => {
    setCurrentPage(e)
    History.push(`/customer-backend/orders-management/page=${e}`)
    window.scrollTo(0, 0)
  }

  const getData = (merchantId, type, searchType, searchInp) => {
    //跟server拿資料
    Axios.get(
      `http://localhost:5000/bk-orders-api/list?id=${merchantId}&filter=${type}&page=${currentPage}
      &searchType=${searchType}&searchInp=${searchInp}`
    )
      .then((res) => {
        const data = res.data.rows
        //送入資料
        setTotalPages(res.data.totalPages)
        setData(data)

        //處理頁碼
        const pageArr = []
        for (let i = 1; i <= res.data.totalPages; i++) {
          pageArr.push(
            <Pagination.Item
              key={i}
              active={i === currentPage}
              onClick={(e) => toPage(i)}
            >
              {i}
            </Pagination.Item>
          )
        }
        setPageItems(pageArr)
      })
      .catch((error) => {
        console.log(error.toString())
        return error.toString()
      })
  }

  //type跟currentPage改變觸發filter
  useEffect(() => {
    if (!isLogin) return (window.location.href = '/login')
    getData(merchantId, type, searchType, searchInp)
  }, [currentPage, type])

  return (
    <>
      <div className="ordersMng">
        <Col className="main offset-2" xs={10}>
          <Container fluid>
            <ToolBar
              merchantId={merchantId}
              type={type}
              currentPage={currentPage}
              setType={setType}
              viewType={viewType}
              setViewType={setViewType}
              searchType={searchType}
              setSearchType={setSearchType}
              searchInp={searchInp}
              setSearchInp={setSearchInp}
              getData={getData}
            />
            <OrdersContent
              data={data}
              merchantId={merchantId}
              type={type}
              searchInp={searchInp}
              setSearchInp={setSearchInp}
              getData={getData}
            />
            <BackendPagination
              pageItems={pageItems}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </Container>
        </Col>
      </div>
    </>
  )
}

export default OrdersManagement
