import React from 'react'
import { Range } from 'rc-slider'
import StarRating from '../../../components/StarRating'
import 'rc-slider/assets/index.css'
import './SideFilter.scss'

const SideFilter = (props) => {
  const { ecoin, setEcoin, filterprice, setFilterPrice } = props
  // setting PriceRang

  //setting handlePrice step
  const sliderProps = {
    min: 0,
    max: 7000,
    step: 100,
    marks: {
      0: 0,
      3500: 3500,
      7000: 7000,
    },
  }

  const onSliderChange = (price) => {
    // console.log(price[0])
    // console.log(price[1])
    setFilterPrice(price)
  }

  const checkUseEcoin = () => {
    setEcoin(!ecoin)
    window.scrollTo(0, 450)
  }

  return (
    <>
      <div className="sideFilter priceRange">
        <div className="filterItem">
          <h6 className="title">價格範圍</h6>
          <div>
            <div className="showPrice">
              <label>{filterprice[0]}</label>
              <label>-</label>
              <label>{filterprice[1]}</label>
            </div>
            <Range
              allowCross={false}
              defaultValue={[0, 7000]}
              onChange={onSliderChange}
              {...sliderProps}
            />
          </div>
        </div>
        {/* 
        <div className="filterItem starSelect">
          <h6 className="title">評價</h6>
          <StarRating />
        </div> */}
        <div className="filterItem">
          <h6 className="title">其他篩選</h6>
          <div>
            <label>
              <input type="checkbox" checked={ecoin} onChange={checkUseEcoin} />
              可用e幣
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideFilter
