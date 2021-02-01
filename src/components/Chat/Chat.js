import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'

import './Chat.scss'

import InfoBar from './InfoBar/InfoBar'
import Input from './Input/Input'
import Messages from './Messages/Messages'

import Axios from 'axios'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const ENDPOINT = 'http://localhost:5000'

let socket

const Chat = (props) => {
  const { showChatToggle } = props
  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const name = useSelector((state) => state.authentication.user.user.username)
  const storeName = searchParams.get('room')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [image, setImage] = useState('')

  // set connect room between customer and merchant
  const room = storeName

  useEffect(() => {
    socket = io(ENDPOINT)

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error)
      }
    })
  }, [ENDPOINT])

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((messages) => [...messages, message])
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''))
    }
  }

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    const url = 'http://localhost:5000'
    const res = await Axios.post(url, data)
  }

  return (
    <div className="outerContainer">
      <div className="chat">
        <InfoBar storeName={storeName} showChatToggle={showChatToggle} />
        <Messages
          messages={messages}
          name={name}
          storeName={storeName}
          image={image}
        />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
          uploadImage={uploadImage}
        />
      </div>
    </div>
  )
}
export default Chat
