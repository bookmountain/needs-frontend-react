import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { useSelector } from 'react-redux'

import { RiMessage2Fill } from 'react-icons/ri'
import './MemComment.scss'

const MemComment = () => {
  const [memcomment, setMemcomment] = useState([])
  const [type, setType] = useState('already')
  const [edit_comment, setEditcomment] = useState({})
  // const [buyer_message, setBuyermessage] = useState('')
  // const [comment_id, setCommentid] = useState('')
  const [id, setId] = useState(0)

  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginUser = useSelector((state) => state.authentication.user)
  const getData = async (val) => {
    let url = `http://localhost:5000/comment?customer_id=${val}&filter=${type}`
    const res = await axios.get(url).catch((err) => console.log('Error'.err))
    console.log('res.data', res.data)

    setMemcomment(res.data.rows)
    console.log('res.data.rows', res.data.rows)
    // setEditcomment({
    //   buyer_message: res.data.rows.buyer_message,
    //   comment_id: res.data.rows.comment_id,
    // })
  }

  const handleEdit = (e, item) => {
    const obj = {
      comment_id: item.comment_id,
      buyer_message: e.target.value,
    }
    setEditcomment(obj)
  }

  const updatecomment = async (val) => {
    // const newData = { buyer_message, id }
    let url = `http://localhost:5000/comment?comment_id=${val}&filter=${type}`
    const res = await axios
      .post(url, edit_comment)
      .then((res) => {
        if (res.data.success) getData(id)
        console.log('post-res', res)
        console.log('post-res-data', res.data)
      })
      .catch((err) => console.log('Error'.err))
  }
  useEffect(() => {
    if (isLogin) {
      const memId = loginUser.user.id
      console.log('aaa')
      getData(memId)
      setId(memId)
      console.log('memId', memId)
      console.log('type', type)
    } else {
      window.location.href = '/login'
    }
  }, [type])
  const display = (
    <>
      <div className="memComment">
        <div className="maincard">
          <div className="font-m">
            <div className="d-flex wrapper">
              <p className="icons">
                <RiMessage2Fill />
              </p>
              <p>我的評論</p>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-around align-self-center topside">
              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto" onClick={(e) => setType('already')}>
                  <p className="font-s">歷史評論</p>
                </div>
              </Link>
              <Link href="#" className="col-2 d-flex topsidebox">
                <div className="m-auto" onClick={(e) => setType('notyet')}>
                  <p className="font-s">尚未評論</p>
                </div>
              </Link>
            </div>
          </div>
          {memcomment.map((item, index) => {
            return (
              <div>
                {type === 'already' ? (
                  <>
                    <div className="informbar d-flex justify-content-center">
                      <img
                        className="sign"
                        src={`http://localhost:5000/img/products/${item.image_path}`}
                        alt="products"
                      />

                      <div className="textbox">
                        <div>
                          <p>{item.brand_name}</p>
                        </div>
                        <div>
                          <p>{item.buyer_message}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div
                    className="informbar d-flex justify-content-center"
                    key={item.comment_id}
                  >
                    <img
                      className="sign"
                      src={`http://localhost:5000/img/products/${item.image_path}`}
                      alt="products"
                    />

                    <div className="textbox">
                      <div>
                        <p>{item.brand_name}</p>
                      </div>
                      <div className=" inputComment d-flex ">
                        <input
                          type="text"
                          className="form-control"
                          // value={edit_comment[index].buyer_message}
                          onBlur={(e) => {
                            // setEditcomment({
                            //   comment_id: item.comment_id,
                            //   buyer_message: event.target.value,
                            // })
                            handleEdit(e, item)
                          }}
                        />
                        <button
                          onClick={() => {
                            updatecomment(item.comment_id)
                          }}
                          className="btn btn-primary"
                        >
                          <span>儲存</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
  return display
}

export default MemComment
