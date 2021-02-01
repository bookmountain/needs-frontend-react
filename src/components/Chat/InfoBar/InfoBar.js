import React from 'react'
import { GrClose } from 'react-icons/gr'
import './InfoBar.scss'

const InfoBar = (props) => {
  const { storeName, showChatToggle } = props
  return (
    <>
      <div className="infoBar">
        <h5>{storeName}</h5>
        <div className="close" onClick={showChatToggle}>
          <GrClose size={20} />
        </div>
      </div>
    </>
  )
}

export default InfoBar
