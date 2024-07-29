import { Box, Button, styled, TextField } from '@mui/material'
import React,{useState, useEffect, useRef} from 'react'
import Logo from '../openDatum.jpg'
import { API } from '../apiservices/api';
function Signup() {
  const [input, setInput] = useState({
    email: '',
    password: '',
    repassword: '',
})
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
    const onInputChange = (e) =>{
      //e.preventDefault()
       console.log(e.target.name,e.target.value);
       setInput({...input,[e.target.name]: e.target.value})
   }
   const handleRegister = () => {
    //e.preventDefault()
    if(input.password === input.repassword){
        //Register logic and api call using axios and axios interceptors
        
        API.userSignUp({email: input.email, password: input.password})
        //setUser('login')
    }else{
        alert('Passwords do not match')
    }
}
  return (
      <>
      <Component>
        <Box>

        <Image src={Logo} alt="OpenDatum Logo" />
        <form> 

            <Wrap>
          <TextField style={{marginTop:10}} name="email" onChange={onInputChange} placeholder='Email Address' label="Email" variant="standard" />
          <TextField style={{marginTop:10}} name="password" placeholder='Passowrd' type='password' label="Password" variant="standard" autoComplete='off' />
          <TextField style={{marginTop:10}} name="repassword" placeholder='Confirm Passowrd' type='password' label="confirm Password" variant="standard" autoComplete='off'/>
          <Button style={{marginTop:10}} variant="contained" >Register </Button>
          <Button style={{marginTop:20}} variant="text" onClick={() => handleRegister()}>Already a user! Login here</Button>
            </Wrap>
        </form>
        </Box>
      </Component>
      </>
  )
}

export default Signup