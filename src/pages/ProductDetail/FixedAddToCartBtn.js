import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import AddToCartModal from './AddToCartModal'

function FixedAddToCartBtn(props) {
  const {
    productDetail,
    sku,
    setSku,
    getSku,
    quantity,
    setQuantity,
    addToCart,
    modalShow,
    setModalShow,
  } = props
  return (
    <>
      <div className="fixedBtnC d-none" id="fixedAddToCartBtn">
        <button className="btn btn-danger" onClick={() => setModalShow(true)}>
          <AiOutlineShoppingCart size="28px" />
        </button>
      </div>
      <AddToCartModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        {...props}
      />
    </>
  )
}

export default FixedAddToCartBtn
