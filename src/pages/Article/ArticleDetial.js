import React, { useState, useEffect } from 'react'
import ArticleRecomment from '../../components/Article/ArticleRecomment'
import ArticleRecommentProduct from '../../components/Article/ArticleRecommentProduct'
import './ArticleDetial.scss'

import { Button } from 'react-bootstrap'

function ArticleDetial() {
  const [SubscribeBtn, setSubscribeBtn] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="container">
        <div className="d-flex flex-lg-row flex-column mt-4">
          <div className="articleDetial col-lg-8 col-md-12">
            <section>
              <h5>精選五款人氣筆記本推薦</h5>
              <div className="photoSize">
                <img
                  src={require('../../assets/img/article/R0043641.jpg')}
                  alt=""
                ></img>
              </div>
              <p>
                市面上可看到眾多文具廠商或皮革製品的品牌，都有推出各種造型和質感的筆記本套，深受手寫筆記控的喜愛。有素面黑色或透明的設計，也有布面花紋的設計，種類繁多，令人不知該如何挑選？本文除了介紹如何挑選筆記本套之外也用排行榜的方式介紹人氣精選商品。相信每個人都可以從中挑選到符合自我需求的筆記本套
              </p>
            </section>

            <section>
              <h5>挑選筆記本套時的選購原則</h5>
              <p>確認筆記本厚度，選擇適合的筆記本套</p>
              <div className="photoSize">
                <img
                  src={require('../../assets/img/article/1579158725190.jpg')}
                  alt=""
                ></img>
              </div>
              <p>
                因為筆記本的大小開本十分多樣，有A4、B5各種手帳尺寸等等，所以首先要確認筆記本的大小。而筆記本套一定要依照筆記本的大小來挑選，否則會無法使用。另外，如果想套在圈裝筆記本，或是較厚的筆記本上，不但要確認長度和寬度的大小連厚度也需一併事先掌握。尤其是圈裝筆記本的線圈部分有一定的厚度，有些筆記本套並不適用，在選購前務必注意。
              </p>
            </section>

            <section>
              <h5>重點在於收納功能</h5>
              <p>
                如果筆記本套除了放單本筆記本之外，還能收納其他文具用品，實用度必定大增。在選購前務必配合自己使用筆記本的方式選擇合用的產品。
              </p>
              <ul>
                <li>
                  <h5>1.筆插設計</h5>
                  <div className="photoSize">
                    <img
                      src={require('../../assets/img/article/1579158735687.jpg')}
                      alt=""
                    ></img>
                  </div>
                  <p>
                    如果想將做筆記時所需要的筆，收納在書套當中的話，建議選購有收納筆記用具設計的筆記本套。筆記本套裡如果能有筆插的設計來收納文具的話，就不需要再額外準備鉛筆盒，需要作筆記時就可馬上抽出筆來記錄，非常方便！另外如果有書籤的話，就可以迅速翻找當天的行程安排，或立即找到所需資料，更能提升工作和學
                    習的效率。
                  </p>
                </li>

                <li>
                  <h5>2.有口袋或夾層設計、便於收納各種小物</h5>
                  <div className="photoSize">
                    <img
                      src={require('../../assets/img/article/1579158764132.jpg')}
                      alt=""
                    ></img>
                  </div>
                  <p>
                    如果還想在筆記本套裡收納更多東西，建議選擇內有口袋或夾層設計的產品。像業務拜訪時常會使用的名片、一些簡單的資料、同事轉交的小紙條等等常會出現在辦公桌上的小東西，都可以收納在筆記本套內。如果只是把上面的東西夾在筆記本中很可能一個不小心就掉落在某處而不自知。如果筆記本套裡，有口袋設計的話，就可以減少這類的煩惱。夾層多的話，也就越容易整理，哪裡放了什麼東西都可以一目瞭然。
                  </p>
                </li>
                <li>
                  <h5>3.可容納兩本筆記的款式</h5>
                  <div className="photoSize">
                    <img
                      src={require('../../assets/img/article/1579158772974.jpg')}
                      alt=""
                    ></img>
                  </div>
                  <p>
                    市面上有推出可以同時容納兩本筆記本的筆記本套，大受消費者歡迎。封底和封面都做得十分堅固耐用，所以兩邊能分別擺放一本筆記本。想利用不同筆記本，記錄不同內容，推薦你試試可放兩本筆記的書套。可以一本用方格筆記本，另一本用橫線筆記本來記錄不同的內容。
                  </p>
                </li>
              </ul>
            </section>
            <section>
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
            </section>
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

export default ArticleDetial
