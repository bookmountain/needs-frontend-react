import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'

import ArticleRecomment from '../../components/Article/ArticleRecomment'
import ArticleRecommentProduct from '../../components/Article/ArticleRecommentProduct'

const TestArticleDetial = (props) => {
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginRole = useSelector((state) => state.authentication.user.user)
  const [userRole, setUserRole] = useState('')
  const [getDetial, setGetDetial] = useState('')
  const [deleteAritcle, setDeleteArticle] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      const url = `http://localhost:5000/article/${props.match.params.id}`
      const res = await axios.get(url).catch((err) => console.log('Error', err))
      setGetDetial(res.data)
    }
    fetchPosts()
    window.scrollTo(0, 0)
  }, [])

  //get role ,and show the add/delete Btn
  useEffect(() => {
    if (isLogin) {
      const role = loginRole.role
      setUserRole(role)
    }
  }, [])

  const DeleteBtn = async () => {
    const url = `http://localhost:5000/article/${props.match.params.id}`
    await axios.delete(url).catch((err) => console.log('ErrDelete', err))
    window.history.back(-1)
  }

  return (
    <>
      <div className="container">
        {userRole === 'needs' ? (
          <Button
            className="mt-3"
            style={{
              display: deleteAritcle ? 'none' : 'block',
            }}
            onClick={() => setDeleteArticle(!deleteAritcle)}
          >
            刪除文章
          </Button>
        ) : null}
        {deleteAritcle ? (
          <div>
            <Button
              className="btn-success mt-3 mr-5"
              onClick={() => setDeleteArticle(!deleteAritcle)}
            >
              取消
            </Button>
            <Button className="btn-danger mt-3 " onClick={DeleteBtn}>
              確認刪除
            </Button>
          </div>
        ) : null}

        <div className="d-flex flex-lg-row flex-md-column mt-4">
          <div className="articleDetial col-lg-8 col-md-12">
            {<div dangerouslySetInnerHTML={{ __html: getDetial.detial }} />}
          </div>
          <div className="col-lg-4 col-md-12">
            <div style={{ marginBottom: '200px' }}>
              <h5 className="mb-4">推薦文章</h5>
              <ArticleRecomment />
            </div>
            <div className="">
              <h5 className="mb-4">精選5款人氣筆記本套推薦</h5>
              <ArticleRecommentProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestArticleDetial
