import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import {
  addToFavoritesItem,
  removeToFavoritesItem,
  addToCartAction,
} from '../../actions/index'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

import './Product.scss'
function ProductViewList(props) {
  const {
    id,
    title,
    brand_name,
    brand_en_name,
    image_path,
    outline,
    e_points_usable,
    price,
    sale_price,
  } = props

  const [choiceFavore, setChoiceFavore] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      <div className="productListItem d-flex container-fluid">
        <Link
          to={`/products/${id}?room=${brand_en_name}`}
          onClick={() =>
            dispatch(
              addToCartAction({ id, title, image_path, price, units: 1 })
            )
          }
        >
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
          <div className="outline">{outline}</div>
          <div className="d-flex  mb-2">
            <div className="priceDiscount">
              NT$ {sale_price ? sale_price : price}
            </div>
            <div className="price">{sale_price ? ' NT$ ' + price : ''}</div>
          </div>
          <div className="d-flex justify-content-center">
            <Button
              className="cart"
              variant="danger"
              onClick={() =>
                dispatch(
                  addToCartAction({ id, title, image_path, price, units: 1 })
                )
              }
            >
              加入購物車
            </Button>
            <label onClick={() => setChoiceFavore(!choiceFavore)}>
              {choiceFavore ? (
                <AiFillHeart
                  size={40}
                  color="#d44f44"
                  onClick={() => dispatch(removeToFavoritesItem(id))}
                />
              ) : (
                <AiOutlineHeart
                  size={40}
                  color="#d44f44"
                  onClick={() =>
                    dispatch(
                      addToFavoritesItem({ id, title, image_path, price })
                    )
                  }
                />
              )}
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductViewList
