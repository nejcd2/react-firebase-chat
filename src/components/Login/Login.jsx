import { signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../firebase.js'


import './Login.scss'

const googleLogin = () => {
  const provider = new GoogleAuthProvider()
  signInWithRedirect(auth, provider)
}

function Login() {
  return (
    <div className="login">
      <button className='loginButton' onClick={googleLogin}>Login</button>
    </div>
  )
}

export default Login