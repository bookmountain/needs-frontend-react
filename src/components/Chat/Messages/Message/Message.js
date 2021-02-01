import React from 'react'

import './Message.scss'

const Message = ({ message: { user, text, time }, name }) => {
  let isSendByCurrentUser = false

  // const trimmedName = name.trim().toLowerCase()

  if (user === name) {
    isSendByCurrentUser = true
  }

  return isSendByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="timestamp">{time}</p>
      <div className="messageBox customersText">
        <p className="messageText ">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <p className="sendText">{user}</p>
      <div className="messageBox merchantText">
        <p className="messageText ">{text}</p>
      </div>
      <p className="timestamp">{time}</p>
    </div>
  )
}

export default Message
