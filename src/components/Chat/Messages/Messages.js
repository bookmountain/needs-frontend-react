import React, { useState, useEffect } from 'react'

import ScrollToBottom from 'react-scroll-to-bottom'
import axios from 'axios'
import Message from './Message/Message'

import './Messages.scss'

const Messages = ({ messages, name, storeName }) => {
  const [historyMessage, setHistoryMessage] = useState([])
  // get histroyMessage
  useEffect(() => {
    const getHistoryMsg = async () => {
      const url = 'http://localhost:5000/chat'
      const res = await axios(url)
      if (res) setHistoryMessage(res.data)
    }
    getHistoryMsg()
  }, [])

  return (
    <ScrollToBottom className="messages">
      {historyMessage.map((msg) => (
        <div
          key={msg.id}
          className={
            name === msg.to_name
              ? 'messageContainer justifyEnd'
              : 'messageContainer justifyStart'
          }
        >
          {name === msg.to_name ? (
            <p className="timestamp">{msg.time}</p>
          ) : null}
          <p className="sendText">{name === msg.to_name ? '' : msg.to_name}</p>
          <div
            style={{
              borderRadius:
                name === msg.to_name ? '20px 20px 0 20px' : '20px 20px 20px 0',
            }}
            className="messageBox merchantText"
          >
            <p className="messageText ">{msg.message}</p>
          </div>
          {name === msg.to_name ? null : (
            <p className="timestamp">{msg.time}</p>
          )}
        </div>
      ))}
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} storeName={storeName} />
        </div>
      ))}
    </ScrollToBottom>
  )
}

export default Messages
