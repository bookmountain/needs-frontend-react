import React, { useState, useEffect } from 'react'
import CartItem from './HistoryItem'

function HistoryList(props) {
  const [historyItems, setHistoryItems] = useState([])

  useEffect(() => {
    const hisItem = JSON.parse(localStorage.getItem('state'))
      ? JSON.parse(localStorage.getItem('state'))
      : null
    if (hisItem) setHistoryItems(hisItem.cart)
  }, [])

  return (
    <div>
      <div className="d-flex">
        {historyItems &&
          historyItems.map((item, index) => <CartItem {...item} key={index} />)}
      </div>
    </div>
  )
}

export default HistoryList
