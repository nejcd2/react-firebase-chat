import React from 'react'
import { auth } from '../../firebase';
import './Message.scss'

function Message({message}) {

  const messageCheckId = message.uid === auth.currentUser.uid ? `sentMessage` : `receivedMessage`

  return (
    <div className={`message ${messageCheckId}`}>
       <span className='name'>{message.name}</span>   
       <p>{message.text}</p>
    </div>
  )
}

export default Message

//   <p className='name'>{message.name}</p>   