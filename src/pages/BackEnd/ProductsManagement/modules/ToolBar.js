import React from 'react'
// import { useSelector } from 'react-redux'
import {
  Row,
  Button,
  Dropdown,
  InputGroup,
  Form,
  FormControl,
} from 'react-bootstrap'
import {
  AiOutlinePlus,
  AiOutlineAppstore,
  AiOutlineBars,
  AiOutlineSearch,
} from 'react-icons/ai'

const ToolBar = (props) => {
  const {
    merchantId,
    type,
    setType,
    viewType,
    setViewType,
    setShowAddProd,
    setShowAddCourse,
    searchType,
    setSearchType,
    searchInp,
    setSearchInp,
    getData,
    categories,
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
            className={type === 'launched' ? 'actived' : ''}
            onClick={(e) => setType('launched')}
          >
            架上商品
          </Button>
          <Button
            variant="light"
            className={type === 'soldout' ? 'actived' : ''}
            onClick={(e) => setType('soldout')}
          >
            已售完
          </Button>
          <Button
            variant="light"
            className={type === 'unlaunched' ? 'actived' : ''}
            onClick={(e) => setType('unlaunched')}
          >
            未上架
          </Button>
        </div>
        <Form className="searchBar">
          <Form.Control
            as="select"
            id="inlineFormCustomSelect"
            custom
            onChange={(e) => setSearchType(Number(e.target.value))}
          >
            <option value={0}>商品名稱</option>
            <option value={1}>商品類別</option>
          </Form.Control>
          {searchType === 0 ? (
            <InputGroup>
              <FormControl
                aria-describedby="basic-addon1"
                onChange={(e) => setSearchInp(e.target.value)}
              />
            </InputGroup>
          ) : (
            <Form.Control
              as="select"
              id="inlineFormCustomSelect"
              custom
              className="selectInp"
              onChange={(e) => setSearchInp(e.target.value)}
            >
              <option value="" selected>
                請選擇
              </option>
              {categories.map((item, index) => {
                const arr = item.category.split(',')
                return (
                  <>
                    <option
                      key={item.id}
                      value={item.id}
                      className="parentCat"
                      disabled
                    >
                      {item.parentCategory}
                    </option>
                    {arr.map((itm, idx) => {
                      return (
                        itm && (
                          <>
                            <option key={idx} value={itm.split(':')[0]}>
                              {itm.split(':')[1]}
                            </option>
                          </>
                        )
                      )
                    })}
                  </>
                )
              })}
            </Form.Control>
          )}

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
      <Row className="buttonSec my-3">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <AiOutlinePlus size="30px" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => setShowAddProd(true)}>
              實體商品
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setShowAddCourse(true)}>
              活動體驗
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="viewSelect d-flex">
          <Button
            variant="light"
            className={`${viewType === 'grid' ? 'actived' : ''}`}
            onClick={(e) => setViewType('grid')}
          >
            <AiOutlineAppstore size="35px" />
          </Button>
          <Button
            variant="light"
            className={` ml-2 ${viewType === 'list' ? 'actived' : ''}`}
            onClick={(e) => setViewType('list')}
          >
            <AiOutlineBars size="40px" />
          </Button>
        </div>
      </Row>
    </>
  )
}

export default ToolBar
