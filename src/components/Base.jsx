import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';

export default function ButtonUsage() {
  const [inter,setInter] = useState({
    input1:'',
    input2: '',
  });
  const interdis = (e) => {
    setInter({...inter, [e.target.name]:e.target.value});
  }
  // return <Button variant="contained">Hello world</Button>;
  return (
    <>
    <h1>The value of input is {inter.input1}</h1>
    <h1>The value of input111 is {inter.input2}</h1>
    <TextField variant='outlined' onChange={interdis} name='statement' placeholder='abc' label='some text'/>
    <TextField variant='outlined' onChange={interdis} name='statement1' placeholder='abc1' label='some text 1'/>
    </>
  )
}