import React, { useState } from 'react'
import { AiOutlineVerticalAlignTop, AiOutlineMessage } from 'react-icons/ai'
import { useSelector } from 'react-redux'

// Chat component
import Chat from './Chat/Chat'
import './Chat/Chat.scss'

const FixedButtons = () => {
  const isLogin = useSelector((state) => state.authentication.loggedIn)

  const [showChat, setShowChat] = useState(false)
  const showChatToggle = () => {
    showChat ? setShowChat(false) : setShowChat(true)
  }

  return (
    <>
      <div className="fixedBtn">
        <div className="toTop">
          <AiOutlineVerticalAlignTop
            size="28px"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
        {isLogin ? (
          <div className="toSupport">
            <AiOutlineMessage
              onClick={() => showChatToggle(showChatToggle)}
              to={`/products/`}
              size="25px"
            />
          </div>
        ) : null}
      </div>
      <div>{showChat ? <Chat showChatToggle={showChatToggle} /> : null}</div>
    </>
  )
}

export default FixedButtons
