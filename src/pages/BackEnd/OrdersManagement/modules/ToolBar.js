import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Button, InputGroup, Form, FormControl } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai'

const ToolBar = (props) => {
  const {
    merchantId,
    type,
    setType,
    getData,
    searchType,
    setSearchType,
    searchInp,
    setSearchInp,
  } = props

  const handleSubmit = (merchantId, type, searchType, searchInp) => {
    getData(merchantId, type, searchType, searchInp)
  }

  return (
    <>
      <Row className="toolsSec my-3">
        <div className="productsType">
          <Button
            variant="light"
            className={type === 'all' ? 'actived' : ''}
            onClick={(e) => setType('all')}
          >
            全部
          </Button>
          <Button
            variant="light"
            className={type === 'unpaid' ? 'actived' : ''}
            onClick={(e) => setType('unpaid')}
          >
            待付款
          </Button>
          <Button
            variant="light"
            className={type === 'backorder' ? 'actived' : ''}
            onClick={(e) => setType('backorder')}
          >
            待出貨
          </Button>
          <Button
            variant="light"
            className={type === 'returning' ? 'actived' : ''}
            onClick={(e) => setType('returning')}
          >
            退貨中
          </Button>
        </div>
        <Form className="searchBar">
          <Form.Control
            as="select"
            id="inlineFormCustomSelect"
            custom
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value="0">訂單編號</option>
            <option value="1">訂購人電話</option>
            <option value="2">訂購人姓名</option>
          </Form.Control>
          <InputGroup>
            <FormControl
              aria-describedby="basic-addon1"
              onChange={(e) => setSearchInp(e.target.value)}
            />
          </InputGroup>
          <Button
            variant="light"
            className="searchbtn"
            onClick={(e) =>
              handleSubmit(merchantId, type, searchType, searchInp)
            }
          >
            <AiOutlineSearch size="24px" />
          </Button>
        </Form>
      </Row>
    </>
  )
}

export default ToolBar
