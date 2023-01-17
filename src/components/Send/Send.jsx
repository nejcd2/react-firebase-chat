import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import { useState } from 'react'
import { auth, db } from '../../firebase'

import SendPNG from '../../../src/sent.png'

import './Send.scss'

function Send({scroll}) {

  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
      e.preventDefault()
      if(input === '') {
        alert('Empty string')
        return
      }

      const {uid, displayName} = auth.currentUser
      await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
      })
      //cleara textfield
      setInput('')
      scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <form onSubmit={sendMessage} className='formClass'>
        <input value={input} onChange={(e)=> setInput(e.target.value)} className='inputClass' type="text" placeholder='Message'/>
        <button className='buttonClass' type='submit'>
        <img src={SendPNG} alt="" />
        </button>
    </form>
  )
}

export default Send
//    <img src={SendPNG} alt="" />