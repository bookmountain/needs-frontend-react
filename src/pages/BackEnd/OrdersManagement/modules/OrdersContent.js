import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'
import { Row, Button, Form, Modal } from 'react-bootstrap'
import { AiOutlineEdit, AiOutlineSave, AiOutlinePlus } from 'react-icons/ai'
import { alertActions } from '../../../../actions'

const OrdersContent = (props) => {
  const { data, merchantId, type, getData, searchType, searchInp } = props

  const dispatch = useDispatch()
  const { error, success, clear } = alertActions

  const [isEdited, SetIsEdited] = useState([])
  const [open, setOpen] = useState([])
  const [formData, setFormData] = useState({})
  const [alertShow, setAlertShow] = useState(false)

  const alerMsg = useSelector((state) => state.alert.message)
  const alerType = useSelector((state) => state.alert.type)

  const mapStatus = {
    0: '待付款',
    1: '待出貨',
    2: '已出貨',
    3: '已送達',
    4: '已取貨',
    5: '退貨中',
    6: '已退貨',
  }

  const statusColor = (status) => {
    switch (status) {
      case '待付款':
      case '待出貨':
        return '#ff9f43'
      case '退貨中':
      case '已退貨':
        return '#ea5455'
      default:
        return '#28c76f'
    }
  }

  const handleOpen = (index) => {
    const newOpen = [...open]
    newOpen[index] = !open[index]
    setOpen(newOpen)
  }

  const handleEdit = (index, item) => {
    const newIsEdited = [...isEdited]
    newIsEdited[index] = !isEdited[index]
    SetIsEdited(newIsEdited)

    setFormData({
      id: item.id,
      status: item.status,
      reciever: item.reciever,
      phone_number: item.phone_number,
      address: item.address,
    })
  }

  const handleSetForm = (e, key) => {
    const value = e.target.value
    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = (index) => {
    Axios.put(
      `http://localhost:5000/bk-orders-api/list?id=${merchantId}&filter=${type}`,
      formData
    ).then((res) => {
      if (!res.data.success) {
        setAlertShow(true)
        setTimeout(() => {
          dispatch(clear())
          setAlertShow(false)
        }, 1500)
        return dispatch(error('修改失敗'))
      }
      setAlertShow(true)
      const newArr = [...isEdited]
      newArr[index] = !newArr[index]
      SetIsEdited(newArr)
      getData(merchantId, type, searchType, searchInp)
      setTimeout(() => {
        dispatch(clear())
        setAlertShow(false)
      }, 1500)
      return dispatch(success('修改成功'))
    })
  }

  return (
    <>
      <div className="orderList">
        <Row className="titleSec">
          <div className="title">訂單編號</div>
          <div className="title">訂購人</div>
          <div className="title">日期</div>
          <div className="title">總價</div>
          <div className="title">付款方式</div>
          <div className="title">訂單狀態</div>
          <div className="title">配送方式</div>
          <div className="actions">操作</div>
        </Row>

        {data.map((item, index) => {
          return (
            <div className="detailsSec" key={item.id}>
              <Row className="main">
                <div className="title">{item.order_number}</div>
                <div className="title">{item.purchaser}</div>
                <div className="title">{item.created_at}</div>
                <div className="title">${item.sum}</div>
                <div className="title">{item.payment_type}</div>
                {isEdited[index] ? (
                  <div className="title">
                    <Form.Control
                      as="select"
                      size="sm"
                      custom
                      value={formData.status}
                      onChange={(e) => handleSetForm(e, 'status')}
                    >
                      <option value={0}>待付款</option>
                      <option value={1}>待出貨</option>
                      <option value={2}>已出貨</option>
                      <option value={3}>已送達</option>
                      <option value={4}>已取貨</option>
                      <option value={5}>退貨中</option>
                      <option value={6}>已退貨</option>
                    </Form.Control>
                  </div>
                ) : (
                  <div className="title">
                    <div
                      className="status"
                      style={{
                        backgroundColor: statusColor(mapStatus[item.status]),
                      }}
                    >
                      {mapStatus[item.status]}
                    </div>
                  </div>
                )}
                <div className="title">{item.delivery_type || '無'}</div>
                <div className="actions">
                  <Button
                    variant="light"
                    onClick={(e) => {
                      isEdited[index]
                        ? handleSubmit(index)
                        : handleEdit(index, item)
                    }}
                  >
                    {isEdited[index] ? (
                      <AiOutlineSave size="24px" color={`#28c76f`} />
                    ) : (
                      <AiOutlineEdit size="24px" />
                    )}
                  </Button>
                </div>
              </Row>
              <div className="addition">
                <p onClick={(e) => handleOpen(index)}>
                  <AiOutlinePlus size="18px" className="mb-1" />
                  查看明細
                </p>
                {open[index] ? (
                  <div className="orderDetails collapseshow">
                    <div className="card mb-3" key={index.id}>
                      <div className="card-header">配送明細</div>
                      <div className="card-title d-flex">
                        <div className="col-2">姓名</div>
                        <div className="col-2">電話</div>
                        <div className="col-6">地址</div>
                      </div>
                      <div className="card-body d-flex align-items-center">
                        {isEdited[index] ? (
                          <Form className="delivery">
                            <div className="col-2">
                              <Form.Control
                                id="reciever"
                                value={formData.reciever}
                                onChange={(e) => handleSetForm(e, 'reciever')}
                              />
                            </div>
                            <div className="col-2">
                              <Form.Control
                                id="phone_number"
                                value={formData.phone_number}
                                onChange={(e) =>
                                  handleSetForm(e, 'phone_number')
                                }
                              />
                            </div>
                            <div className="col-6">
                              <Form.Control
                                id="address"
                                value={formData.address}
                                onChange={(e) => handleSetForm(e, 'address')}
                              />
                            </div>
                          </Form>
                        ) : (
                          <>
                            <div className="col-2">{item.reciever}</div>
                            <div className="col-2">{item.phone_number}</div>
                            <div className="col-6">{item.address}</div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header">商品明細</div>
                      <div className="card-title d-flex">
                        <div className="blankBox"></div>
                        <div className="col-4">商品名稱</div>
                        <div className="col-2">規格</div>
                        <div className="col-2">數量</div>
                        <div className="col-2">金額</div>
                      </div>
                      {item.prod_list.map((prod_list, index) => {
                        return (
                          <div className="card-body d-flex align-items-center">
                            <div className="productImg">
                              <img
                                src={`http://localhost:5000/img/products/${
                                  prod_list.image_path.split(',')[0]
                                }`}
                                alt={prod_list.title}
                              />
                            </div>
                            <div className="col-4">{prod_list.title}</div>
                            <div className="col-2">
                              {prod_list.specification}
                            </div>
                            <div className="col-2">{prod_list.quantity}</div>
                            <div className="col-2">
                              $
                              {prod_list.quantity *
                                Number(prod_list.unit_price)}
                            </div>
                          </div>
                        )
                      })}
                      <div className="card-body d-flex align-items-center">
                        <div className="blankBox"></div>
                        <div className="col-4"></div>
                        <div className="col-2"></div>
                        <div className="col-2">運費</div>
                        <div className="col-2">${item.delivery_fee || 0}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          )
        })}
        <Modal show={alertShow} centered className="alertModal">
          <Modal.Body className={alerType}>{alerMsg}</Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default withRouter(OrdersContent)
