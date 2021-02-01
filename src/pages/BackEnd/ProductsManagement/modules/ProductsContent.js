import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios'
import { Row, Dropdown, Form, Modal } from 'react-bootstrap'
import { AiOutlineEdit } from 'react-icons/ai'

const ProductsContent = (props) => {
  const {
    data,
    merchantId,
    type,
    getData,
    searchType,
    searchInp,
    alertShow,
    setAlertShow,
    error,
    success,
    clear,
    alerMsg,
    alerType,
  } = props

  const dispatch = useDispatch()

  const handleUnlanch = (index) => {
    Axios.put(
      `http://localhost:5000/bk-products-api/unlaunch?id=${index}`
    ).then((res) => {
      if (!res.data.success) {
        setAlertShow(true)
        setTimeout(() => {
          dispatch(clear())
          setAlertShow(false)
        }, 1500)
        return dispatch(error('下架失敗'))
      }
      setAlertShow(true)
      getData(merchantId, type, searchType, searchInp)
      setTimeout(() => {
        dispatch(clear())
        setAlertShow(false)
      }, 1500)
      return dispatch(success('哭哭TT 商品已下架'))
    })
  }

  return (
    <>
      <div className="productList">
        <Row className="titleSec">
          <Form.Check aria-label="option 1" className="checkbox " />
          <div className="blankbox"></div>
          <div className="productTitle">商品名稱</div>
          <div className="specification">規格</div>
          <div className="title">價格</div>
          <div className="title">數量</div>
          <div className="title">已售出</div>
          <div className="actions">操作</div>
        </Row>

        {data.map((item, index) => {
          return (
            <Row className="detailsSection" key={item.id}>
              <Form.Check
                aria-label="option 1"
                className="checkbox"
                key={item.id}
              />
              <div className="productImg">
                <img
                  src={`http://localhost:5000/img/products/${
                    item.image_path.split(',')[0]
                  }`}
                  alt={item.title}
                />
              </div>
              <div className="productTitle">{item.title}</div>
              <div className="specification">
                {item.specification.replace(/,/g, ',\n')}
              </div>
              <div className="title unitPrice">${item.price}</div>
              <div className="title stock">{item.stocks}</div>
              <div className="title soldAmount">{item.sold_quantity || 0}</div>
              <Dropdown className="actions">
                <Dropdown.Toggle id="dropdown-basic" variant="light">
                  <AiOutlineEdit size="24px" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">編輯</Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={(e) => handleUnlanch(item.id)}
                  >
                    下架
                  </Dropdown.Item>
                  <Dropdown.Item href={`/products/${item.id}`} target="_blank">
                    查看商品
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Row>
          )
        })}
        <Modal show={alertShow} centered className="alertModal">
          <Modal.Body className={alerType}>{alerMsg}</Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default ProductsContent
