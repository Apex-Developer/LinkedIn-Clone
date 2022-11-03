import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Login from './Login'
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { login, logout, selectUser } from './features/userSlice'
import { useDispatch } from 'react-redux'
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl: userAuth.profileURL,
          })
        )
      } else {
        // user is logged Out

        dispatch(logout())
      }
    })

  }, [])



  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (

        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}

    </div>
  );
}

export default App;
