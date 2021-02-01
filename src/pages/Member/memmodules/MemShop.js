import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './MemShop.scss'

import { useSelector } from 'react-redux'
import { FaShoppingBag } from 'react-icons/fa'

function MemShop() {
  const [memshop, setMemshop] = useState([])

  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)
  const getData = async (val) => {
    let url = `http://localhost:5000/shop?customer_id=${val}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    setMemshop(res.data)
    console.log('res.data', res.data)
    // setOrdernumber(res.data)
  }

  useEffect(() => {
    if (isLogin) {
      const memId = loginUser.user.id
      getData(memId)
    } else {
      window.location.href = '/login'
    }
  }, [])

  return (
    <>
      <div className="memshop">
        <div className="maincard">
          <div className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <FaShoppingBag />
              </p>
              <p>購買清單</p>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <Link to="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">歷史清單</p>
                </div>
              </Link>
              {memshop.map((item, index) => {
                return (
                  <div className="shoppinglist">
                    <div className="d-flex fo">
                      <div>訂購編號</div>
                      <div>{item.order_number}</div>
                    </div>
                    {/* {item.skus.map((skus, index) => { */}
                    {/* return ( */}
                    <table className="table table-striped listhead">
                      <thead>
                        <tr>
                          <th className="">{item.brand_name}</th>
                          <th className="">訂購日期</th>
                          <th className="">單價</th>
                          <th className="">數量</th>
                          <th className="">小計</th>
                          <th className="">狀態</th>
                        </tr>
                      </thead>
                      {item.merchants.map((merchants, index) => {
                        return (
                          <tbody bgcolor="white">
                            <tr>
                              <td className="d-flex">
                                <img
                                  className="box"
                                  src={`http://localhost:5000/img/products/${merchants.image_path}`}
                                  alt="brands"
                                />
                                <div className="align-self-center">
                                  <p className="font-s">{merchants.title}</p>
                                  <p className="font-s">
                                    規格：{merchants.specification}
                                  </p>
                                </div>
                              </td>
                              <td>{merchants.created_at}</td>
                              <td>{merchants.unit_price}</td>
                              <td>{merchants.quantity}</td>
                              <td>
                                {merchants.unit_price * merchants.quantity}
                              </td>
                              <td>Ｖ</td>
                            </tr>
                          </tbody>
                        )
                      })}
                    </table>
                    {/* )
                    })} */}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemShop
