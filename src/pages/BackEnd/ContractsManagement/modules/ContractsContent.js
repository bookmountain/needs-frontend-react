import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Dropdown, Form } from 'react-bootstrap'
import { AiOutlineEdit } from 'react-icons/ai'

const ContractsContent = (props) => {
  const { data } = props

  //合約付款狀態顏色
  const statusColor = (status) => {
    switch (status) {
      case '已付款':
        return '#28c76f'
      case '已逾期':
        return '#ea5455'
      default:
        return '#ff9f43'
    }
  }

  return (
    <>
      <div className="contractsList">
        <Row className="titleSec">
          <Form.Check aria-label="option 1" className="checkbox " />
          <div className="title">方案</div>
          <div className="contractId">合約編號</div>
          <div className="title">起始日</div>
          <div className="title">結束日</div>
          <div className="title">總天數</div>
          <div className="title">金額</div>
          <div className="title">付款狀態</div>
          <div className="actions">操作</div>
        </Row>

        {data.map((item, index) => {
          return (
            <Row className="detailsSection">
              <Form.Check
                aria-label="option 1"
                key={item.id}
                className="checkbox"
              />
              <div className="title">{item.plan_name}</div>
              <div className="contractId">{item.contract_id}</div>
              <div className="title">{item.start_date}</div>
              <div className="title">{item.end_date}</div>
              <div className="title">{item.total_days}</div>
              <div className="title">${item.amount}</div>
              <div className="title">
                <div
                  className="status"
                  style={{
                    backgroundColor: statusColor(item.payment_status),
                  }}
                >
                  {item.payment_status}
                </div>
              </div>
              <Dropdown className="actions">
                <Dropdown.Toggle id="dropdown-basic" variant="light">
                  <AiOutlineEdit size="24px" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">編輯</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">結束合約</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
          )
        })}
      </div>
    </>
  )
}

export default ContractsContent
