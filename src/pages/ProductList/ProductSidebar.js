import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './ProductSideBar.scss'

const ProductSideBar = (props) => {
  const { categories, setSelectCategory, history } = props
  const [isActive, setIsActive] = useState({ CateIndex: null })

  const toggleClassLinkStyle = (index) => {
    setIsActive({ CateIndex: index })
  }

  return (
    <>
      <div className="allCategories" onClick={() => setSelectCategory('')}>
        所有分類
      </div>
      {categories.map((value, index) => {
        if (value.id <= 8) return
        return (
          <div
            className="classItem"
            key={index}
            style={{
              fontWeight: isActive.CateIndex === index ? '500' : '400',
              color: isActive.CateIndex === index ? ' #d44f44' : '#212529',
            }}
          >
            <div
              onClick={() => {
                toggleClassLinkStyle(index)
                setSelectCategory(index + 1)
                history.push(`/productlist/${value.name}`)
              }}
            >
              {value.name}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default withRouter(ProductSideBar)
