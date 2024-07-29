import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function ButtonUsage() {
  const [inter,setInter] = useState('');
  const interdis = (e) => {
    setInter(e.target.value);
  }
  // return <Button variant="contained">Hello world</Button>;
  return (
    <>
    <h1>The value of input is {inter}</h1>
    <TextField variant='outlined' onChange={interdis} name='statement' placeholder='abc' label='some text'/>
    </>
  )
}