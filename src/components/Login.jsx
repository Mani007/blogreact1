import { Box, Button, styled, TextField } from '@mui/material'
import React,{useState, useEffect, useRef} from 'react'
import Logo from '../openDatum.jpg'
import { API } from '../apiservices/api';
function Login() {
    const [user,setUser] = useState('login');
    const [input, setInput] = useState({
        email: '',
        password: '',
        repassword: '',
        youremail: '',
        yourpassword: '',
        
    
    })
    //const [repass, setRePass] = useState(null)
    // const [passMatch, setPassMatch] = useState(null)
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

    const onInputChange = (e) =>{
       e.preventDefault()
        console.log(e.target.name,e.target.value);
        setInput({...input,[e.target.name]: e.target.value})
    }

    const handleRegister = () => {
        //e.preventDefault()
        if(input.password === input.repassword){
            //Register logic and api call using axios and axios interceptors
            
            API.userSignUp({email: input.email, password: input.password})
            setUser('login')
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
            
          <TextField style={{marginTop:10}} onChange={(e)=> onInputChange(e)} name="youremail" value={input.youremail} placeholder='Email Address' label="Email" variant="standard" />
          <TextField style={{marginTop:10}} onChange={(e)=> onInputChange(e)} name="yourpassword" value={input.yourpassword} placeholder='Passowrd' type='password' label="Password" variant="standard" autoComplete="off" />
          <Button style={{marginTop:20}} variant="contained">Login</Button>
          <Button style={{marginTop:10}} variant="text" >Create an account </Button>
            </Wrap>
        </form>
        </Box>
      </Component> 
      </>
  )
}

export default Login