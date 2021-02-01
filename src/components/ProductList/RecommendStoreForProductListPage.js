import React from 'react'
import { Button } from 'react-bootstrap'

const HistoryItem = () => {
  const data = [
    {
      storeName: '花吉商店',
      image_path: 'http://localhost:5000/img/brands/花吉商店.jpg',
    },
    {
      storeName: '喵吉星 Miao Stelle',
      image_path: 'http://localhost:5000/img/brands/MiaoStelle.jpg',
    },
    {
      storeName: '木匠兄妹',
      image_path: 'http://localhost:5000/img/brands/木匠兄妹.jpg',
    },
    {
      storeName: '品墨良行',
      image_path: 'http://localhost:5000/img/brands/品墨良行.jpg',
    },
    {
      storeName: '淳祿工作室',
      image_path: 'http://localhost:5000/img/brands/淳祿工作室.jpg',
    },
  ]

  return (
    <>
      {data.map((data, index) => (
        <div
          key={index}
          className="RecommendStoreForProductListPageItem col-3"
          style={{
            fontSize: '16px',
            maxWidth: '210px',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          <div className="picture" style={{}}>
            <img
              src={data.image_path}
              alt=""
              style={{ width: '190px', height: '170px', objectFit: 'cover' }}
            />
          </div>
          <p className="mt-2 mb-2 product-s-title">{data.storeName}</p>
          <Button className="store-follower-btn">+關注</Button>
        </div>
      ))}
    </>
  )
}

export default HistoryItem
