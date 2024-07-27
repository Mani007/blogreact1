import { Box, Button, styled, TextField } from '@mui/material'
import React,{useState, useEffect, useRef} from 'react'
import Logo from '../openDatum.jpg'
function Signup() {
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

  return (
      <>
      <Component>
        <Box>

        <Image src={Logo} alt="OpenDatum Logo" />
            <Wrap>

          <TextField style={{marginTop:10}} name="email" placeholder='Email Address' label="Email" variant="standard" />
          <TextField style={{marginTop:10}} name="password" placeholder='Passowrd' type='password' label="Password" variant="standard" />
          <TextField style={{marginTop:10}} name="repassword" placeholder='Confirm Passowrd' type='password' label="confirm Password" variant="standard" />
          <Button style={{marginTop:10}} variant="contained" >Register </Button>
          <Button style={{marginTop:20}} variant="text" >Already a user! Login here</Button>
            </Wrap>
        </Box>
      </Component>
      </>
  )
}

export default Signup