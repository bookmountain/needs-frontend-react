import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './MemInformThree.scss'

import { BsFillBellFill } from 'react-icons/bs'
const MemInformThree = () => {
  const [meminformthree, setMemInformthree] = useState([])

  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)
  const getData = async (val) => {
    let url = `http://localhost:5000/inform/three?customer_id=${val}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    setMemInformthree(res.data)
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
      <div className="memInformThree">
        <div className="maincard">
          <p className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <BsFillBellFill />
              </p>
              <p>通知中心</p>
            </div>
          </p>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <Link to="/member/informone" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">所有通知</p>
                </div>
              </Link>
              <Link to="/member/informtwo" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">關注通知</p>
                </div>
              </Link>

              <Link
                to="/member/informthree"
                className="col-2 d-flex topsidebox"
              >
                <div className="m-auto">
                  <p className="font-s">NEEDS公告</p>
                </div>
              </Link>
            </div>
          </div>
          {meminformthree.map((item, index) => {
            return (
              <div className="informbar d-flex justify-content-start">
                <img
                  className="sign"
                  src={`http://localhost:5000/img/brands/${item.index_img}`}
                  alt="brands"
                />
                <div className="textbox">
                  <div>
                    <p>
                      {item.brand_name}[ {item.status} ]
                    </p>
                  </div>
                  <div>
                    <p>{item.inform}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MemInformThree
