import React from 'react'
import { Link } from 'react-router-dom'

function ArticleClassic() {
  const classicData = [
    {
      title: '精選5款人氣筆記本套推薦',
      img_path: 'http://localhost:5000/articleImg/Classic/1579146747170.jpg',
      outline:
        '市面上可看到眾多文具廠商或皮革製品的品牌，都有推出各種造型和質感的筆記本套，深受手寫筆記控的喜愛。有素面黑色或透明的設計，也有布面花紋的設計，種類繁多，令人不知該如何挑選？本文除了介紹如何挑選筆記本套之外，也用排行榜的方式介紹人氣精選商品。相信每個人都可以從中挑選到符合自我需求的筆記本套！',
    },
    {
      title: '10款人氣鉛筆盒／筆袋推薦',
      img_path: 'http://localhost:5000/articleImg/Classic/1599187011005.jpg',
      outline:
        '說到鉛筆盒及筆袋，第一個想到的是否是學生時期的回憶呢？其實鉛筆盒或筆袋不僅是學生們的專利，即使是出了社會的上班族也有不少人在使用。隨著年齡與身分的不同，在款式及材質的挑選上也有所相異。無論是受女孩子喜愛的可愛外型、適合學生使用的大容量款式，或是上班族偏愛的質感皮革筆袋，其款式設計之豐富，直令人眼花撩亂。',
    },
    {
      title: '精選10款人氣手帳用原子筆推薦',
      img_path:
        'http://localhost:5000/articleImg/Classic/437e271566e84b40123364e68097039e.jpg',
      outline:
        '明明每天都在寫日記，卻沒有合適的手帳用原子筆嗎？原子筆的重點在於「是否好書寫」，而墨水種類繁多，舉凡油性、中性或可擦式墨水，到筆軸的粗細、長短、筆尖大小等等，原子筆有各種各樣的款式供人挑選。不過，原子筆品牌琳瑯滿目，像是知名的百樂（PILOT）、斑馬（ZEBRA）等等，到底該以什麼基準來挑選原子筆呢？',
    },
    {
      title: '精選10款人氣便利貼推薦',
      img_path:
        'http://localhost:5000/articleImg/Classic/6aebf48c0f3f45ccd9b5eed22af62804.jpg',
      outline:
        '「便利貼」可以固定於手帳、電腦或書桌等當作備忘錄或裝飾，其造型、材質與樣式豐富，用途也相當廣泛。目前市面上除了常見的彩色紙磚型款式外， 還推出有各種如膠帶、半透明、盒裝、整面貼、靜電貼等多元類型，挑選起來實在令人眼花撩亂。',
    },
  ]

  return (
    <>
      {classicData.map((value, index) => (
        <Link
          to="/articleClassic/4"
          key={index}
          className="articleItem d-flex text-decoration-none mb-5"
          style={{ color: '#323232' }}
        >
          <div className="articlePic mr-4">
            <img src={value.img_path} alt=""></img>
          </div>
          <div className="textArea">
            <h5 className="title">{value.title}</h5>
            <div className="ctx">{value.outline}</div>
          </div>
        </Link>
      ))}
    </>
  )
}

export default ArticleClassic
