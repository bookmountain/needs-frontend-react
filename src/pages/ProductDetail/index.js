import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { RiShoppingCart2Line } from 'react-icons/ri'
import { FiChevronDown } from 'react-icons/fi'
import './productPage.scss'
import * as storage from '../Cart/localStorage'
import { connect } from 'react-redux'
import { replaceCartAmount } from '../../actions'

import DetailNav from './DetailNav'
import CarouselImage from './CarouselImage'
import MerchantInfo from './MerchantInfo'
import DeliveryPaymentInfo from './DeliveryPaymentInfo'
import Review from './Review'
import MerchantOtherProducts from './MerchantOtherProducts'
import History from './History'
import SuccessModal from './SuccessModal'
import FixedAddToCartBtn from './FixedAddToCartBtn'

import FixedButtons from '../../components/FixedButtons'
import HistoryList from '../../components/History/HistoryList'

function ProductDetail(props) {
  const [productDetail, setProductDetail] = useState([])
  const [merchantInfo, setMerchantInfo] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [sku, setSku] = useState({})
  const [successModalShow, setSuccessModalShow] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [review, setReview] = useState([])

  async function getProductDetail() {
    const url = `http://localhost:5000/products/${props.match.params.id}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setProductDetail(data)
    setSku(data.skus[0])
  }

  async function getMerchantInfo() {
    const url =
      `http://localhost:5000/products/merchant/${productDetail.merchant_id}` +
      `?exclude=${props.match.params.id}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setMerchantInfo(data)
  }

  async function getReview() {
    const url = `http://localhost:5000/products/review/${props.match.params.id}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setReview(data)
  }

  function getSku(e) {
    const allSku = productDetail.skus
    const sku = allSku.find(function (item) {
      return item.specification == e.target.value
    })
    setSku(sku)
  }

  function addToCart(value) {
    storage.saveCartItems(storage.addCartItem(storage.getCartItems(), value))
    updateCartAmount()
    setSuccessModalShow(true)
    setModalShow(false)
  }

  function updateCartAmount() {
    let amount = 0
    let cart = [...JSON.parse(localStorage.getItem('cart') || '[]')]
    cart.forEach((item) => {
      amount += item.amount
    })
    props.replaceCartAmount(amount)
  }

  function moreProductDetail() {
    document.querySelector('#productDetailContent').classList.remove('maxH-600')
    document.querySelector('#moreProductDetail').classList.add('d-none')
  }

  function initMoreProductDetail() {
    function hasClass(element, cls) {
      return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1
    }

    if (hasClass(document.querySelector('#productDetailContent'), 'maxH-600')) {
      return
    } else {
      document.querySelector('#productDetailContent').classList.add('maxH-600')
    }

    if (hasClass(document.querySelector('#moreProductDetail'), 'd-none')) {
      document.querySelector('#moreProductDetail').classList.remove('d-none')
    } else {
      return
    }
  }

  useEffect(() => {
    getProductDetail()
    getReview()
    window.scrollTo(0, 0)
    initMoreProductDetail()
  }, [props.match.params.id])

  useEffect(() => {
    if (productDetail.merchant_id) {
      getMerchantInfo()
    }
  }, [productDetail])

  useEffect(() => {
    setTimeout(() => {
      setSuccessModalShow(false)
    }, 2000)
  }, [successModalShow])

  useEffect(() => {
    const handleScroll = () => {
      let posY = window.scrollY

      function getPosition(element) {
        let y = 0
        while (element) {
          y += element.offsetTop - element.scrollLeft + element.clientTop
          element = element.offsetParent
        }
        return y
      }

      let productDetail_posY =
        getPosition(document.querySelector('#productDetail')) - 155
      let deliveryPayment_posY =
        getPosition(document.querySelector('#deliveryPayment')) - 155
      let review_posY = getPosition(document.querySelector('#review')) - 155
      let merchantOtherProducts_posY =
        getPosition(document.querySelector('#merchantOtherProducts')) - 155
      let mainInfoCartBtn =
        getPosition(document.querySelector('#mainInfoCartBtn')) - 85

      const scrollToProductDetail = document.querySelector(
        '#scrollToProductDetail'
      )
      const scrollToDeliveryPayment = document.querySelector(
        '#scrollToDeliveryPayment'
      )
      const scrollToReview = document.querySelector('#scrollToReview')

      if (posY > productDetail_posY && posY < deliveryPayment_posY) {
        scrollToProductDetail.classList.add('active')
        scrollToDeliveryPayment.classList.remove('active')
        scrollToReview.classList.remove('active')
      } else if (posY > deliveryPayment_posY && posY < review_posY) {
        scrollToProductDetail.classList.remove('active')
        scrollToDeliveryPayment.classList.add('active')
        scrollToReview.classList.remove('active')
      } else if (posY > review_posY && posY < merchantOtherProducts_posY) {
        scrollToProductDetail.classList.remove('active')
        scrollToDeliveryPayment.classList.remove('active')
        scrollToReview.classList.add('active')
      } else if (
        posY < productDetail_posY ||
        posY > merchantOtherProducts_posY
      ) {
        scrollToProductDetail.classList.remove('active')
        scrollToDeliveryPayment.classList.remove('active')
        scrollToReview.classList.remove('active')
      }

      if (posY > mainInfoCartBtn) {
        document.querySelector('#fixedAddToCartBtn').classList.remove('d-none')
      } else {
        document.querySelector('#fixedAddToCartBtn').classList.add('d-none')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="product-detail">
      <SuccessModal
        show={successModalShow}
        onHide={() => setSuccessModalShow(false)}
      />
      <DetailNav />
      <Container className="product-main-info">
        <Row>
          <Col md={7}>
            <CarouselImage productDetail={productDetail} />
          </Col>
          <Col md={5} className="info-content pl-0">
            <ul className="breadcrumb-wrap">
              <li>
                <Link to="/" className="breadcrumb-item">
                  所有商品
                </Link>
              </li>
              <span> {'>'} </span>
              <li>
                <Link to="/" className="breadcrumb-item active">
                  {productDetail.name}
                </Link>
              </li>
            </ul>
            <h4 className="my-3">{productDetail.title}</h4>
            <p className="font-s">
              品牌：
              <Link to="/" className="merchant-link">
                {merchantInfo.brand_name}
              </Link>
            </p>
            <p className="description">{productDetail.outline}</p>
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
                type="button"
                id="mainInfoCartBtn"
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
      <MerchantInfo merchantInfo={merchantInfo} />
      <Container>
        <h5 className="mt-5" id="productDetail">
          商品介紹
        </h5>
        <hr />
        <div
          className="product-detail-content maxH-600 d-flex justify-content-center"
          id="productDetailContent"
        >
          <div
            dangerouslySetInnerHTML={{ __html: productDetail.description }}
          ></div>
        </div>
        <div className="text-center mt-3" id="moreProductDetail">
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => moreProductDetail()}
          >
            閱讀更多
            <FiChevronDown />
          </button>
        </div>
        <h5 className="mt-5" id="deliveryPayment">
          運費與其他資訊
        </h5>
        <hr />
        <DeliveryPaymentInfo />
        <h5 className="mt-5" id="review">
          購買評價
        </h5>
        <hr />
        <Review merchantInfo={merchantInfo} review={review} />
        <h5 className="mt-5" id="merchantOtherProducts">
          店家其他商品
        </h5>
        <hr />
        <MerchantOtherProducts merchantInfo={merchantInfo} />
        <h5 className="mt-5">最近預覽</h5>
        <hr />
        <HistoryList />
        {/* <History /> */}
        <div className="mb-5"></div>
      </Container>
      <FixedAddToCartBtn
        productDetail={productDetail}
        sku={sku}
        setSku={setSku}
        getSku={getSku}
        quantity={quantity}
        setQuantity={setQuantity}
        addToCart={addToCart}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
    </div>
  )
}

const mapStateToProps = (store) => {
  return {
    cartAmount: store.cartAmount,
  }
}

export default connect(mapStateToProps, {
  replaceCartAmount,
})(ProductDetail)
