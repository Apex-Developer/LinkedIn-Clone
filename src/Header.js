import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';
import {useDispatch} from 'react-redux'
import { logout } from './features/userSlice';
import { auth } from './firebase';
import {useSelector} from 'react-redux'

function Header() {
  // const user = useSelector(selectUser);

  const dispatch = useDispatch()

  const logoutOfApp=()=>{
    dispatch(logout())
    auth.signOut()
    alert(" You are Logged Out ")
  }

  return (
    <div className="header">

      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />

        <div className="header__search">
        <SearchIcon/>
        <input type="text" placeholder="Search"/>
        </div>

      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccount} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption
        avatar={true} 
        title="Me"
        onClick={logoutOfApp} 
        />

      </div>

    </div>
  )
}

export default Header