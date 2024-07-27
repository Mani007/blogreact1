import React, { useState } from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { Box } from '@mui/material'
import styled from '@emotion/styled'

function Userreg() {
    const Loginpage = styled(Box)`
       display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
 
 
    `
    const Container = styled(Box)`
    display: flex;
justify-content: center;
align-items: center;
 height: 100vh;

 `

  return (
    <>
   <Container>
   <Loginpage>
    <Login/>
   </Loginpage>
   </Container>
    
   
    </>
  )
}

export default Userreg