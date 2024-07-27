import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

function Userreg() {
    const [user,setUser]=useState('login')
  return (
    <>
    {user === 'login'? <Login/>:<Signup/>}
   
   
    </>
  )
}

export default Userreg