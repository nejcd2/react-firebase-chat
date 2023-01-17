import {useState, useEffect, useRef} from 'react'
import { db } from '../../firebase.js'
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore'

import Message from '../Message/Message'
import './Chat.scss'
import Send from '../Send/Send.jsx'

function Chat() {

  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    //Firestore query
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const Unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = []
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id})
      })
      setMessages(messages)
    });
    return () => Unsubscribe();
  }, []);

  return (
    <>
      <main className='chat'>
        {messages && messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </main>
      { }
      <div className="bottomPart">
      <Send scroll={scroll}/>
      <span ref={scroll}></span>
      </div>
    </>
  )
}

export default Chat