import { Box, Button, styled, TextField } from '@mui/material'
import React,{useState, useEffect, useRef} from 'react'
import Logo from '../openDatum.jpg'
import { API } from '../apiservices/api';
function Signup() {
  const signUpInitial = {
    email: '',
    password: '',
    repassword: '',
}
  const [inputval, setInputVal] = useState(signUpInitial)
    const Component = styled(Box)({
        width: 'auto',
        height: 'auto',
        margin: 'auto',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      })

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
       setInputVal({...inputval,[e.target.name]: e.target.value})
   }
   const handleRegister = async(e) => {
    try {

      e.preventDefault()
      let res = await API.userSignUp({email: inputval.email, password: inputval.password})
    } catch (err) {
      console.log(err)
    }
   // if(inputval.password === inputval.repassword){
        //Register logic and api call using axios and axios interceptors
        
        // API.userSignUp({email: inputval.email, password: inputval.password})
        //setUser('login')
   // }else{
     //   alert('Passwords do not match')
   // }
}
  return (
      <>
      {/* Styled component and CSS classes are not good for the component operations */}
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
          <TextField style={{marginTop:10,  margin: 'auto',}} name="email" onChange={onInputChange}  placeholder='Email Address' label="Email" variant="outlined" />
          <TextField style={{marginTop:10,  margin: 'auto',}} name="password" onChange={onInputChange} placeholder='Passowrd' type='password' label="Password" variant="outlined" autoComplete='off' />
          <TextField style={{marginTop:10,  margin: 'auto',}} name="repassword" onChange={onInputChange} placeholder='Confirm Passowrd' type='password' label="confirm Password" variant="outlined" autoComplete='off'/>
          <Button style={{marginTop:10}} variant="contained" onClick={(e) => handleRegister(e)} >Register </Button>
          <Button style={{marginTop:20}} variant="text" >Already a user! Login here</Button>
            {/* </Wrap> */}
          </Box>
        </form>
        </Box>
      {/* </Component> */}
      </>
  )
}

export default Signup