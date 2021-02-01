import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiFillMessage } from 'react-icons/ai'
// import { connect } from 'react-redux'
// import { login } from '../../actions/index'
import { useDispatch, useSelector } from 'react-redux'

import Chat from './Chat'

const Join = (props) => {
  const [showChat, setShowChat] = useState(false)
  // const [room, setRoom] = useState('商家')

  const showChatToggle = () => {
    showChat ? setShowChat(false) : setShowChat(true)
  }

  return (
    <>
      {showChat ? <Chat /> : ''}
      <div
        className="customChat"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '20px',
          zIndex: '2',
          cursor: 'pointer',
        }}
        onClick={() => showChatToggle(showChatToggle)}
        // to={`/chat?name=${username}&room=123`}
      >
        <AiFillMessage size={50} />
      </div>
    </>
  )
}

export default Join
