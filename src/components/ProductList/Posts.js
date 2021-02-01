import React, { useState, useEffect } from 'react'
import Product from './Product'
import ProductViewList from './ProductViewList'
import axios from 'axios'
import { useSelector } from 'react-redux'

const Posts = (props) => {
  const { showPosts, dataLoading, productView } = props
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)
  const [customerId, setCustomerId] = useState('')
  const [wishListId, setWishListId] = useState([])

  // useEffect(() => {
  //   if (isLogin) {
  //     const memId = loginUser.user.id
  //     setCustomerId(memId)
  //   } else {
  //     window.location.href = '/login'
  //   }
  // }, [])

  // const addWishListBtn = async (id) => {
  //   const product_id = id
  //   const url = 'http://localhost:5000/productlist/wishlist'

  //   await axios
  //     .post(url, [customerId, product_id])
  //     .catch((err) => console.log('wishList', err))
  // }

  if (dataLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="productItems d-flex flex-wrap">
      {showPosts &&
        showPosts.map((posts, index) => {
          return productView ? (
            <Product
              key={posts.id}
              {...posts}
              // addWishListBtn={addWishListBtn}
            />
          ) : (
            <ProductViewList key={index} {...posts} />
          )
        })}
    </div>
  )
}

export default Posts
