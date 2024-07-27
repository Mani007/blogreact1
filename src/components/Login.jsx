import { Box, Button, styled, TextField } from '@mui/material'
import React,{useState, useEffect, useRef} from 'react'
import Logo from '../openDatum.jpg'
function Login() {
    const [user,setUser] = useState('login');
    const Component = styled(Box)`
        width: auto;
        height: auto;
        margin: auto;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `

    const Image = styled('img')({
        width: '200px',
        height: '100px',
        margin: 'auto',
        display: 'flex',
        padding: '25px',
             
    })

    const Wrap = styled(Box)`
        padding: 25px 25px;
        
        display: flex;
        flex: 1;
        flex-direction: column;
       

    `

    const handleLogin = () => {
        
        setUser('login')
    }
    const handleSignup = () => {
        
        setUser('signup')
    }

  return (
      <>
      { user === 'login' ?
      <Component>
        <Box>

        <Image src={Logo} alt="OpenDatum Logo" />
            <Wrap>

          <TextField style={{marginTop:10}} name="email" placeholder='Email Address' label="Email" variant="standard" />
          <TextField style={{marginTop:10}} name="password" placeholder='Passowrd' type='password' label="Password" variant="standard" />
          <Button style={{marginTop:20}} variant="contained">Login</Button>
          <Button style={{marginTop:10}} variant="text" onClick={handleSignup}>Create an account </Button>
            </Wrap>
        </Box>
      </Component> 
      :  
      <Component>
        <Box>

        <Image src={Logo} alt="OpenDatum Logo" />
            <Wrap>

          <TextField style={{marginTop:10}} name="email" placeholder='Email Address' label="Email" variant="standard" />
          <TextField style={{marginTop:10}} name="password" placeholder='Passowrd' type='password' label="Password" variant="standard" />
          <TextField style={{marginTop:10}} name="repassword" placeholder='Confirm Passowrd' type='password' label="confirm Password" variant="standard" />
          <Button style={{marginTop:10}} variant="contained" >Register </Button>
          <Button style={{marginTop:20}} variant="text" onClick={handleLogin} >Already a user! Login here</Button>
            </Wrap>
        </Box>
      </Component>
}
      </>
  )
}

export default Login