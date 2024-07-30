import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../openDatum.jpg'
//import MenuIcon from '@mui/icons-material/Menu';
function Header() {
    
  return (
    <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{
        backgroundColor: '#3f51b5',
        color: 'white'
      }} position="static">
        <Toolbar>
         
        <img style={{
        width: '50px',
        height: '50px',
       
        display: 'flex',
        padding: '10px',
             
    }} src={Logo} alt="OpenDatum Logo" />
          <Button style={{
            marginLeft: '90%',
          }} variant="contained">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header