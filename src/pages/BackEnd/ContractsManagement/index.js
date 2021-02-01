import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Axios from 'axios'
import { Col, Container, Pagination } from 'react-bootstrap'
import ToolBar from './modules/ToolBar'
import ContractsContent from './modules/ContractsContent'
import BackendPagination from '../../../components/backend/BackendPagination'
import History from '../../../components/history'
import './ContractsManagement.scss'
import SignForm from './modules/SignForm'

const ContractsManagement = (props) => {
  // all ended, grid list
  const [type, setType] = useState('all')
  const [viewType, setViewType] = useState('list')

  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const merchantId = useSelector((state) => state.authentication.user.user.id)
  // const [merchantId, setMerchantId] = useState(12)
  const [data, setData] = useState([])
  const [pageItems, setPageItems] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [showSignUp, setShowSignUp] = useState(false)

  const toPage = (e) => {
    setCurrentPage(e)
    History.push(`/customer-backend/contracts-management/page=${e}`)
    window.scrollTo(0, 0)
  }

  const toSignUp = (e) => {
    setShowSignUp(true)
  }

  const getData = (merchantId, type) => {
    //跟server拿資料
    Axios.get(
      `http://localhost:5000/bk-contracts-api/list?id=${merchantId}&filter=${type}&page=${currentPage}`
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
    getData(merchantId, type)
  }, [currentPage, type])

  return (
    <>
      <div className="contractsMng">
        <Col className="main offset-2" xs={10}>
          <Container fluid>
            <ToolBar
              type={type}
              setType={setType}
              viewType={viewType}
              setViewType={setViewType}
              toSignUp={toSignUp}
              setShowSignUp={setShowSignUp}
            />
            <ContractsContent data={data} />
            <BackendPagination
              pageItems={pageItems}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </Container>
        </Col>
        <SignForm showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      </div>
    </>
  )
}

export default ContractsManagement
