import React from 'react'
import { Modal, Container, Row, Col, Form } from 'react-bootstrap'
import { RiShoppingCart2Line } from 'react-icons/ri'

function AddToCartModal(props) {
  const {
    productDetail,
    sku,
    setSku,
    getSku,
    quantity,
    setQuantity,
    addToCart,
    modalShow,
  } = props
  const image = productDetail.image_path || [0]
  const image_s = image[0]
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="product-detail"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {productDetail.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col md={6} className="pl-0">
              <div className="product-m">
                {image ? (
                  <img
                    className="w-100 h-100 cover rounded"
                    src={`http://localhost:5000/img/products/${image_s}`}
                    alt=""
                  />
                ) : (
                  ''
                )}
              </div>
            </Col>
            <Col md={6} className="product-main-info p-0">
              <p className="description minh-73">{productDetail.outline}</p>
              <div className="price-wrap">
                <span className="discount">
                  NT${sku.sale_price ? sku.sale_price : sku.price}
                </span>
                <span className="price">
                  {sku.sale_price ? 'NT$' + sku.price : ''}
                </span>
              </div>
              <Form
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <Form.Group>
                  <Form.Control as="select" custom onChange={getSku}>
                    {productDetail.skus &&
                      productDetail.skus.map((value, index) => {
                        return (
                          <option key={index}>
                            {value.specification === '-'
                              ? '單一規格'
                              : value.specification}
                          </option>
                        )
                      })}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <div
                    className="btn-group border rounded w-50"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-sm border-right px-3"
                      onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                    >
                      -
                    </button>
                    <Form.Control
                      type="number"
                      value={quantity}
                      className="quantity border-0 rounded-0"
                      onChange={(e) => {
                        setQuantity(e.target.value)
                      }}
                      onBlur={(e) => {
                        setQuantity(
                          Math.min(Math.max(e.target.value, 1), sku.stocks)
                        )
                      }}
                    />
                    <button
                      type="button"
                      className="btn btn-sm border-left px-3"
                      onClick={() =>
                        setQuantity(Math.min(quantity + 1, sku.stocks))
                      }
                    >
                      +
                    </button>
                  </div>
                  <span className="stock">庫存：還剩 {sku.stocks} 件</span>
                </Form.Group>
                <button
                  className="btn btn-danger mt-3 w-100"
                  onClick={() => {
                    addToCart({
                      id: productDetail.id,
                      skuid: sku.id,
                      amount: quantity,
                    })
                  }}
                >
                  <RiShoppingCart2Line className="cart-icon" />
                  放入購物車
                </button>
              </Form>
              <button className="btn btn-outline-danger mt-3 w-100">
                <i className="far fa-heart mr-3"></i>收藏商品
              </button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}
export default AddToCartModal
