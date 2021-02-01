import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './MemLike.scss'

import { useSelector } from 'react-redux'
import { FaStore } from 'react-icons/fa'

function MemLike() {
  const [memlike, setMemLike] = useState([])
  const [favoriteItems, setfavoriteItems] = useState([])
  const [type, setType] = useState('brands')
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)
  const getData = async (val) => {
    let url = `http://localhost:5000/like?customer_id=${val}&filter=${type}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    setMemLike(res.data.rows)
    console.log(res.data.rows)
  }

  useEffect(() => {
    const favoriteItem = JSON.parse(localStorage.getItem('state'))
      ? JSON.parse(localStorage.getItem('state'))
      : null
    if (favoriteItem) setfavoriteItems(favoriteItem.favorite)
  }, [])

  useEffect(() => {
    if (isLogin) {
      const memId = loginUser.user.id
      console.log('aa')
      getData(memId)
    } else {
      window.location.href = '/login'
    }
  }, [type])

  const LikeDisplay = memlike.map((item, index) => (
    <div key={item}>
      <div className="likecard">
        <img
          className="likemark"
          src={`http://localhost:5000/img/brands/${item.index_img}`}
          alt="brands"
        />
        <p className="font-s">{item.brand_name}</p>
        <p className="font-s">*****</p>
        <div className="d-flex justify-content-center">
          <p className="font-s">粉絲數量</p>
          <p className="font-s">{item.fans}</p>
        </div>
      </div>
    </div>
  ))

  const favDisplay = favoriteItems.map((item) => (
    <div key={item}>
      <div className="likecard2">
        <img
          className="likemark"
          src={`http://localhost:5000/img/products/${item.image_path}`}
          alt="products"
        />
        <p className="font-s">{item.title}</p>
        <p className="font-s">NT ${item.price}</p>
      </div>
    </div>
  ))

  return (
    <>
      <div className="memlike">
        <div className="maincard">
          <p className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <FaStore />
              </p>
              <p>我的關注</p>
            </div>
          </p>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <Link href="#" className="col-2 d-flex topsidebox">
                <div
                  className="m-auto selectLike"
                  onClick={() => setType('brands')}
                >
                  關注商家
                </div>
              </Link>
              <Link href="#" className="col-2 d-flex topsidebox">
                <div
                  className="m-auto selectLike"
                  onClick={() => setType('product')}
                >
                  關注商品
                </div>
              </Link>
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {type === 'brands' ? LikeDisplay : favDisplay}
          </div>
        </div>
      </div>
    </>
  )
}

export default MemLike
