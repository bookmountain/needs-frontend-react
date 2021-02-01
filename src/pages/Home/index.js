import React, { useState } from 'react'
import './home.scss'
import '@/styles/investmentAdvantage.scss'
import CarouselBanner from '../../components/frontend/Home/Carousel'
import Categories from '../../components/frontend/Home/Categories'
import HotProduct from '../../components/frontend/Home/HotProduct'
import RecommendStore from '../../components/frontend/Home/RecommendStore'
import Coupon from '../../components/frontend/Home/Coupon'
import InvestmentAdvantage from '../../components/InvestmentAdvantage'

const Home = () => {
  const [advantageShow, setAdvantage] = useState(true)
  return (
    <>
      <div className="home-wrapper">
        <CarouselBanner />
        <Categories />
        <HotProduct />
        <RecommendStore />
        <Coupon />
        <InvestmentAdvantage show={advantageShow} />
      </div>
    </>
  )
}

export default Home
