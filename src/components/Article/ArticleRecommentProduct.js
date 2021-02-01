import React from 'react'
import { Link } from 'react-router-dom'

import './ArticleRecommentProduct.scss'

const ArticleRecommentProduct = (props) => {
  const data = [
    {
      img:
        'http://localhost:5000/articleImg/Classic/899129dbd090c48a7d9611f487ec37d9-700x700.jpg',
      title: 'Uptrend My diary ｜超級空白手帳 VII ',
      merchant: '小鹿文具所',
      price: 'NT$250',
      salePrice: 'NT$175',
    },
    {
      img: 'http://localhost:5000/articleImg/product/1603955094157.jpg',
      title: 'KING JIM 複式筆記本蓋',
      merchant: '品墨良行',
      price: 'NT$1000',
      salePrice: 'NT$889',
    },
    {
      img: 'http://localhost:5000/articleImg/product/1603954567476.jpg',
      title: 'KING JIM Kraft工藝筆記本書套',
      merchant: '品墨良行',
      price: 'NT$250',
      salePrice: 'NT$175',
    },
    {
      img: 'http://localhost:5000/articleImg/product/1603934767688.jpg',
      title: 'KACO ALIO商務A5筆記包',
      merchant: '小鹿文具所',
      price: 'NT$1020',
      salePrice: 'NT$960',
    },
    {
      img: 'http://localhost:5000/articleImg/product/1603941507539.jpg',
      title: '珠友 布麻帆A5多功能手提式書衣',
      merchant: '小鹿文具所',
      price: 'NT$1000',
      salePrice: 'NT$960',
    },
    {
      img: 'http://localhost:5000/articleImg/product/1603938981986.jpg',
      title: 'WORLD CRAFT 可滑手機收納型筆記本書衣B6',
      merchant: '直物生活文具',
      price: 'NT$650',
      salePrice: 'NT$620',
    },
  ]
  return (
    <>
      {data.map((value, index) => (
        <Link
          key={index}
          to="/articles"
          className="ArticleRecommentProduct text-decoration-none"
        >
          <div key={value.id} className="picture mr-2">
            <img src={value.img} alt=""></img>
          </div>
          <div className="textArea">
            <div className="">{value.title}</div>
            <div className="btmArea mt-2 d-flex flex-lg-row flex-md-column">
              <span className="merchant">{value.merchant}</span>
              <div className="priceArea">
                <span className="price">{value.price}</span>
                <span className="sale">{value.salePrice}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default ArticleRecommentProduct
