import React, { useState, useEffect } from 'react'
import Rater from 'react-rater'
import ReviewPieChart from './charts/ReviewPieChart'
import 'react-rater/lib/react-rater.css'
import '../../../pages/BackEnd/Dashboard/styles/_review_star.scss'
import Axios from 'axios'

function Review() {
  const [reviewStar, setReviewStar] = useState()
  const [fiveStar, setFiveStar] = useState(0)
  const [fourStar, setFourStar] = useState(0)
  const [threeStar, setThreeStar] = useState(0)
  const [twoStar, setTwoStar] = useState(0)
  const [oneStar, setOneStar] = useState(0)

  const getStar = () => {
    Axios.get('http://localhost:5000/dashboard/star').then((response) => {
      const data = response.data
      let reviewStars = ''
      let avgReviewStar
      for (let i = 0; i < data.length; i++) {
        reviewStars = parseInt(reviewStars + data[i].star)
        avgReviewStar = (reviewStars / data.length).toFixed(1)
      }
      // 設定資料
      setReviewStar(avgReviewStar)
    })
  }
  const getFiveStar = () => {
    Axios.get('http://localhost:5000/dashboard/5star').then((response) => {
      let dataLength = response.data.length
      setFiveStar(dataLength)
    })
  }

  const getFourStar = () => {
    Axios.get('http://localhost:5000/dashboard/4star').then((response) => {
      let dataLength = response.data.length
      setFourStar(dataLength)
    })
  }

  const getThreeStar = () => {
    Axios.get('http://localhost:5000/dashboard/3star').then((response) => {
      let dataLength = response.data.length
      setThreeStar(dataLength)
    })
  }

  const getTwoStar = () => {
    Axios.get('http://localhost:5000/dashboard/2star').then((response) => {
      let dataLength = response.data.length
      setTwoStar(dataLength)
    })
  }

  const getOneStar = () => {
    Axios.get('http://localhost:5000/dashboard/1star').then((response) => {
      let dataLength = response.data.length
      setOneStar(dataLength)
    })
  }

  useEffect(() => {
    getStar()
    getOneStar()
    getTwoStar()
    getThreeStar()
    getFourStar()
    getFiveStar()
  }, [])

  useEffect(() => {}, [])

  return (
    <>
      <div className="chart-card revenue review">
        <div className="revenue-title">賣場評價</div>
        <div className="review-score">{reviewStar ? reviewStar : ''}</div>
        <div className="review-star">
          <Rater
            total={5}
            rating={reviewStar ? reviewStar : ''}
            interactive={false}
          />
        </div>
        <div className="review-chart">
          <ReviewPieChart
            oneStar={oneStar}
            twoStar={twoStar}
            threeStar={threeStar}
            fourStar={fourStar}
            fiveStar={fiveStar}
          />
        </div>
      </div>
    </>
  )
}

export default Review
