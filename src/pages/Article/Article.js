import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import ArticleRecommentProduct from '../../components/Article/ArticleRecommentProduct'
import ArticleClassic from '../../components/Article/ArticleClassic'
import './Article.scss'

const Article = (props) => {
  const isLogin = useSelector((state) => state.authentication.loggedIn)
  const loginRole = useSelector((state) => state.authentication.user.user)
  const [userRole, setUserRole] = useState('')
  const [articles, setArticles] = useState([])
  const [changeArticle, setChangeArticle] = useState('1')
  const [SubscribeBtn, setSubscribeBtn] = useState(false)

  //載入資料
  useEffect(() => {
    const fetchPosts = async () => {
      const url = 'http://localhost:5000/article'
      const res = await axios.get(url)
      if (res) setArticles(res.data)
    }
    fetchPosts()
  }, [])

  //get role ,and show the add/delete Btn
  useEffect(() => {
    if (isLogin) {
      const role = loginRole.role
      setUserRole(role)
    }
  }, [])

  const lastestArticle = articles.map((value) => (
    <Link
      key={value.id}
      to={`/article/${value.id}`}
      style={{ color: '#323232' }}
      className="articleItem d-flex text-decoration-none mb-5"
    >
      <div className="articlePic mr-4">
        <img src={value.image} alt=""></img>
      </div>
      <div className="textArea">
        <div className="title">{value.title}</div>
        <div className="ctx">{value.outline}</div>
      </div>
    </Link>
  ))

  return (
    <>
      <div className="topic mt-4">
        {userRole === 'needs' ? (
          <div className="col-6 d-flex justify-content-end">
            <Link to="/createArticle">新增文章</Link>
          </div>
        ) : null}
      </div>
      <div className="container d-flex flex-lg-row flex-column articleIcons ">
        <div className="mt-4 col-lg-8 col-md-12">
          <section className="mb-5">
            <div className="d-flex justify-content-around mb-4 changItem">
              <div className="lastestAritcle">
                <h5
                  className="mb-2 aritcleItem"
                  style={{
                    color: changeArticle === '1' ? '#d44f44' : '#323232',
                  }}
                  onClick={() => setChangeArticle('1')}
                >
                  最新文章
                </h5>
              </div>

              <div className="classAritcle">
                <h5
                  className="mb-2 aritcleItem"
                  style={{
                    color: changeArticle === '2' ? '#d44f44' : '#323232',
                  }}
                  onClick={() => setChangeArticle('2')}
                >
                  精選文章
                </h5>
              </div>
            </div>
            <div className="articleItems ">
              {changeArticle === '1' ? lastestArticle : <ArticleClassic />}
            </div>
            <div className="d-flex justify-content-end">
              <Button className="btn btn-sm btn-secondary">探索更多 →</Button>
            </div>
          </section>

          <div className="subscribeArticle d-flex justify-content-between">
            <div className="textInfo">
              探索各式生活風格美學 - 實踐美好必要指南
            </div>
            <div>
              {SubscribeBtn ? (
                <Button onClick={() => setSubscribeBtn(!SubscribeBtn)}>
                  已訂閱文章
                </Button>
              ) : (
                <Button onClick={() => setSubscribeBtn(!SubscribeBtn)}>
                  訂閱文章
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 col-lg-4 col-md-12">
          <section className="mb-5">
            <h5 className="">推薦商品</h5>
            <ArticleRecommentProduct />
          </section>
        </div>
      </div>
    </>
  )
}

export default Article
