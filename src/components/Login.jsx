import { Box, Button, styled, TextField } from '@mui/material'
import React,{useState, useEffect, useRef} from 'react'
import Logo from '../openDatum.jpg'
function Login() {
    const Component = styled(Box)`
        width: 400px;
        
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `
  return (
      <>
      <Component>
        <img src={Logo} alt="OpenDatum Logo" />
          <div>Login</div>
          <TextField name="email" placeholder='Email Address' label="Email" variant="standard" />
          <TextField name="password" placeholder='Passowrd' type='password' label="Password" variant="standard" />
          <Button variant="contained">Login</Button>
          <Button variant="text">Create an account </Button>
      </Component>
      </>
  )
}

export default Login