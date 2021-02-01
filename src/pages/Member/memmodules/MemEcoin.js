import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { useSelector } from 'react-redux' //引入redux
import './MemEcoin.scss'

import { FaCoins } from 'react-icons/fa'

const MemEcoin = () => {
  const [memecoin, setMemEcoin] = useState([])

  const isLogin = useSelector((state) => state.authentication.loggedIn) //redux判斷是否為lodin狀態
  const loginUser = useSelector((state) => state.authentication.user) //redux初始值設定為空值

  const getData = async (val) => {
    let url = `http://localhost:5000/member?id=${val}`
    const res = await axios.get(url).catch((err) => console.log('error'.err))
    setMemEcoin(res.data)
  }

  useEffect(() => {
    if (isLogin) {
      const memId = loginUser.user.id
      getData(memId)
    } else {
      window.location.href = '/login'
    }
  }, [])
  // }
  // function MemEcoin() {
  return (
    <>
      <div className="memecoin">
        <div className="maincard">
          <div className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <FaCoins />
              </p>
              <p>Ｅcoin</p>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">代幣查詢</p>
                </div>
              </Link>
              {/* <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto">
                  <p className="font-s">發放紀錄</p>
                </div>
              </Link> */}
            </div>
          </div>
          {memecoin.map((item, index) => {
            return (
              <div className="container d-flex justify-content-around">
                <div className="row coincard ">
                  <div className="m-auto one">
                    <p className="font-m my-3">代幣查詢</p>
                    <p className="font-m my-3">{item.e_coin}</p>
                  </div>
                </div>
                <div className="row  justify-content-around coincard ">
                  <div className="m-auto two">
                    <p className="font-m my-3">待發放</p>
                    <p className="font-m my-3">{item.fe_coin}</p>
                  </div>
                </div>
                <div className="row  justify-content-around coincard ">
                  <div className="m-auto three">
                    <p className="font-m my-3">即將到期</p>
                    <p className="font-m my-3">{item.me_coin}</p>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="explain">
            <p className="font-m">
              E coin說明
              <br />
            </p>
            <p className="font-s">
              訂單金額每滿100元，可獲得1點。
              <br />
              訂單金額以單次出貨的總金額計算，扣除運費與取消訂單的商品。
              <br />
              贈送的E coin，將於訂單出貨過鑑賞期後發放。
              <br />
              E coin可跨店使用，折抵無上限，但不可折抵運費。
              <br />
              折抵後購物金額(不含運費)至少為1元。
              <br />
              E
              coin效期為30天起，將依行銷活動贈予之規定時間不等，請於到期日前使用完畢，E
              coin過期即失效亦無法回補。
              <br />
              詳情請見E coin使用說明。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MemEcoin
