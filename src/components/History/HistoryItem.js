import React from 'react'

import { Link } from 'react-router-dom'

import './historyItem.scss'

const HistoryItem = (props) => {
  const {
    id,
    title,
    brand_name,
    image_path,
    price,
    sale_price,
    e_points_usable,
  } = props

  return (
    <>
      <div className="HistoryItem col-lg-3">
        <Link to={`/products/${id}?room=${brand_name}`}>
          <div className="productPic">
            {e_points_usable ? <div className="ecoinUse">e-Coin</div> : ''}
            <div className="storeContent">詳細資訊</div>
            <img
              src={`http://localhost:5000/img/products/${image_path}`}
              alt=""
            ></img>
          </div>
        </Link>
        <div className="textArea">
          <div className="merchantName">{brand_name}</div>
          <div className="title">{title}</div>
          <div className="d-flex justify-content-center">
            <div className="priceDiscount">
              NT$ {sale_price ? sale_price : price}
            </div>
            <div className="price">{sale_price ? ' NT$ ' + price : ''}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HistoryItem
