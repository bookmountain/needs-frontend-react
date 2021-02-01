import React from 'react'
import './Input.scss'
import { RiSendPlaneFill } from 'react-icons/ri'
import { AiOutlinePicture } from 'react-icons/ai'

const Input = (props) => {
  const { setMessage, sendMessage, message, uploadImage } = props

  return (
    <>
      <form className="form">
        <button className="fab fab_camera">
          <AiOutlinePicture size={30} />
        </button>
        <textarea
          type="text"
          placeholder="給對方的訊息..."
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={(event) =>
            event.key === 'Enter' ? sendMessage(event) : null
          }
        />
        <button className="fab fab_send" onClick={(e) => sendMessage(e)}>
          <RiSendPlaneFill size={30} />
        </button>
      </form>
    </>
  )
}

export default Input
