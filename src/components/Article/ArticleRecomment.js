import React from 'react'
import { Link } from 'react-router-dom'

import './ArticleRecomment.scss'

const ArticleRecomment = (props) => {
  const data = [
    {
      img:
        'http://localhost:5000/articleImg/Classic/899129dbd090c48a7d9611f487ec37d9-700x700.jpg',
      title: '手帳展！超過一千種商品75折起',
    },
    {
      img:
        'http://localhost:5000/articleImg/Classic/MonochromeNotebook_03-700x560.jpg',
      title: '日本文具控轟動話題的灰色筆記本的魅力大公開',
    },
    {
      img:
        'http://localhost:5000/articleImg/Classic/0hxBVpAuXyJ21rCQ9TNEVYOlJfKxxYbTJrBXFpA0YJcAlGOnxrXj9vF0tZew5aaWg_UnNsA00Ie19EOWBvUm0.jpg',
      title: '為大學開學準備！8款學生必備文具「考試全All pass」',
    },
    {
      img:
        'http://localhost:5000/articleImg/Classic/8fa8c6140a5f5294aef248060cb59c79-700x525.jpg',
      title: '辦公室收納好物都收進WORKERS’BOX 吧',
    },
  ]
  return (
    <>
      {data.map((value, id) => (
        <Link
          key={id}
          to="/articles"
          className="articleRecomment text-decoration-none"
        >
          <div className="picture mr-1">
            <img src={value.img} alt=""></img>
          </div>
          <div className="">{value.title}</div>
        </Link>
      ))}
    </>
  )
}

export default ArticleRecomment
