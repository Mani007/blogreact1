import { Box, Button, styled, TextField } from '@mui/material'
import React,{useState, useEffect, useRef} from 'react'
import Logo from '../openDatum.jpg'
import { API } from '../apiservices/api';
function Login() {
    const [user,setUser] = useState('login');
    const [input, setInput] = useState({
        email: '',
        password: '',
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

   

    const onInputChange = (e) =>{
       //e.preventDefault()
        //console.log(e.target.name,e.target.value);
        setInput({...input,[e.target.name]: e.target.value})
    }

    const handleLogin = async() => {
        //e.preventDefault()
        console.log(input)
            //Register logic and api call using axios and axios interceptors
           try {

               const result =await API.login({input})
               console.log(result)           
            } catch (err) {
                console.log(err)
                
 
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

          <TextField id="1" style={{marginTop:10}} onChange={(e)=> onInputChange(e)} name="email" value={input.email} placeholder='Email Address' label="Email" variant="outlined" />
          <TextField id="2" style={{marginTop:10}} onChange={(e)=> onInputChange(e)} name="password" value={input.password} placeholder='Passowrd' type='password' label="Password" variant="outlined" autoComplete="off" />
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