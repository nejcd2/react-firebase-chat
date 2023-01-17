import './App.scss';

import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

import Navbar from './components/Navbar/Navbar.jsx';
import Chat from './components/Chat/Chat.jsx';

function App() {

  //Login userja check
  const [user] = useAuthState(auth);
  console.log(user)

  return (
    <div className="app">
      <Navbar />
      <section className='container'>
        {user ? <Chat /> : 
        null}
      </section>
  </div>
  );
}

export default App;
