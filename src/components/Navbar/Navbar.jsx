import './Navbar.scss'
import MessengerPNG from '../../../src/MessengerIcon.png'

import { auth } from '../../firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from '../Login/Login.jsx'
import Logout from '../Logout/Logout.jsx'

function Navbar() {

  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <div className="navbar">
        <img src={MessengerPNG} alt="" />
        <h1 className="header">Messenger</h1>
        {
          //if logged in, show loggedout, else login
          user ? <Logout /> : <Login />
        }
    </div>
  )
}

export default Navbar