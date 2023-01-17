/* eslint-disable no-unused-vars */
import React from 'react'
import './Logout.scss'

import { auth } from '../../firebase.js'
import { signOut } from 'firebase/auth'

function Logout() {

  const signOut = () => {
    signOut(auth);  
}

  return (
    <button className="logout" onClick={() => auth.signOut()}>
        Logout
    </button>
  )
}

export default Logout