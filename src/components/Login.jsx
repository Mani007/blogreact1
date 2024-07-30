import { Box, Button, styled, TextField } from '@mui/material'
import React,{useState, useEffect, useRef, useContext} from 'react'
import Logo from '../openDatum.jpg'
import { API } from '../apiservices/api';
import { DataContext } from '../context/DataProvider';
import { useNavigate } from 'react-router-dom';
function Login() {
   const navigate = useNavigate()
    const [input, setInput] = useState({
        email: '',
        password: '',
    })
    
    const {setUser} = useContext(DataContext)

    const Image = styled('img')({
        width: '200px',
        height: '100px',
        margin: 'auto',
        display: 'flex',
        padding: '25px',
             
    })

    

   

    const onInputChange = (e) =>{
       //e.preventDefault()
        //console.log(e.target.name,e.target.value);
        setInput({...input,[e.target.name]: e.target.value})
    }

    const handleLogin = async(e) => {
        e.preventDefault()
        //console.log(input)
            //Register logic and api call using axios and axios interceptors
           try {

               const result =await API.login(input)
               //console.log(result)
               // We can also store the access tokens in browser storage here
               if (result.isSuccess) {
                
                   sessionStorage.setItem('access_token', `Bearer ${result.data.accessToken}`)            
                   sessionStorage.setItem('refresh_token', `Bearer ${result.data.refreshToken}`)       
                   setUser({username: result.data.userName})    
                   navigate('/base') 
               }
            } catch (err) {
                console.log(err)
                navigate('/signup')             
 
            } 
       
    }

  return (
      <>
     
      {/* <Component> */}
        <Box style={{width: 'auto',
        height: 'auto',
        margin: 'auto',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',}}>

        <Image src={Logo} alt="OpenDatum Logo" />
        <form>
            <Box style={{
            padding: '25px 25px',
        
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
          }}>

            {/* <Wrap> */}

          <TextField id="1" style={{marginTop:10}} onChange={(e)=> onInputChange(e)} name="email"  placeholder='Email Address' label="Email" variant="outlined" />
          <TextField id="2" style={{marginTop:10}} onChange={(e)=> onInputChange(e)} name="password"  placeholder='Passowrd' type='password' label="Password" variant="outlined" autoComplete="off" />
          <Button style={{marginTop:20}} variant="contained" onClick={handleLogin}>Login</Button>
          <Button style={{marginTop:10}} variant="text" >Create an account </Button>
            {/* </Wrap> */}
            </Box>
        </form>
        </Box>
      {/* </Component>  */}
      </>
  )
}

export default Login