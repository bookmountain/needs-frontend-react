import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

function Review(props) {
  const { merchantInfo, review } = props
  function moreReviewDetail() {
    document.querySelector('#reviewDetailContent').classList.remove('maxH-270')
    document.querySelector('#moreReviewDetail').classList.add('d-none')
  }
  const displayNoBtn = (
    <>
      <div className="review">
        {review &&
          review.map((value, index) => {
            return (
              <div key={index} className="mt-3 mb-5">
                <div className="d-flex review-item">
                  <div className="mr-4 ml-3">
                    <img
                      className="avatar rounded"
                      src={`http://localhost:5000/img/avatar/${value.avatar}`}
                      alt=""
                    />
                  </div>
                  <div className="review-desc">
                    <p>
                      <span className="product-s-title">{value.name} </span>於
                      2020-09-06 01:41 留下評論
                    </p>
                    <p className="product-s-title">{value.buyer_message}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between reply mt-3">
                  <div className="reply-desc">
                    <p>
                      <span className="product-s-title">店家</span> 於
                      2020-09-06 03:41 回覆
                    </p>
                    <p className="m-0 product-s-title">
                      {value.seller_message}
                    </p>
                  </div>
                  <div>
                    {merchantInfo.index_img ? (
                      <img
                        className="avatar rounded mx-4"
                        src={`http://localhost:5000/img/brands/${merchantInfo.index_img}`}
                        alt=""
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
  const displayHasBtn = (
    <>
      <div className="review maxH-270" id="reviewDetailContent">
        {review &&
          review.map((value, index) => {
            return (
              <div key={index} className="mt-3 mb-5">
                <div className="d-flex review-item">
                  <div className="mr-4 ml-3">
                    <img
                      className="avatar rounded"
                      // src={require('../../assets/img/brands/pommedepin111_300x300.jpg')}
                      src={`http://localhost:5000/img/avatar/${value.avatar}`}
                      alt=""
                    />
                  </div>
                  <div className="review-desc">
                    <p>
                      <span className="product-s-title">{value.name} </span>於
                      2020-09-06 01:41 留下評論
                    </p>
                    <p className="product-s-title">{value.buyer_message}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between reply mt-3">
                  <div className="reply-desc">
                    <p>
                      <span className="product-s-title">店家</span> 於
                      2020-09-06 03:41 回覆
                    </p>
                    <p className="m-0 product-s-title">
                      {value.seller_message}
                    </p>
                  </div>
                  <div>
                    {merchantInfo.index_img ? (
                      <img
                        className="avatar rounded mx-4"
                        src={`http://localhost:5000/img/brands/${merchantInfo.index_img}`}
                        alt=""
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <div className="text-center mt-3" id="moreReviewDetail">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => moreReviewDetail()}
        >
          閱讀更多
          <FiChevronDown />
        </button>
      </div>
    </>
  )
  let display = <></>
  review[2] ? (display = displayHasBtn) : (display = displayNoBtn)

  const none = <div className="review">目前尚無購買評論</div>
  return review[0] ? display : none
}

export default Review
