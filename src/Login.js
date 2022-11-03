import React, { useState } from 'react'
import "./Login.css"
import "firebase/compat/auth"
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'


function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [profilePic, setProfilePic] = useState("")
  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault()

    auth.signInWithEmailAndPassword(email, password)

      .then(userAuth => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL
        }))
      }) . catch(error => alert(error) )
  }

  const register = () => {
    if (!name) {
      return alert("Please enter a full name")
    }

    // Creating a user 
    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profilePic,
        })

          // Dispatch login action from userSlice 
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              }));
          });
      }).catch(error => alert(error));
  };


  return (
    <div className='login'>
      <img src="https://logos-world.net/wp-content/uploads/2020/06/Linkedin-Logo-2011.png" alt="" />

      <form>
        <input value={name} placeholder="Full name (required if registering)" type="text" onChange={(e) => setName(e.target.value)} />

        <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' type="text" />

        <input value={email} placeholder='Email' type="email" onChange={(e) => setEmail(e.target.value)} />

        <input value={password} placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)} />

        <button type='submit' onClick={loginToApp}>Sign In</button>

      </form>

      <p>
        Not a member? ("")
        <span className="login__register" onClick={register}>Register Now</span>

      </p>

    </div>
  )
}

export default Login