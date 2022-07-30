import React from 'react';
import { Box, TextField, Button } from '@mui/material';




const registerForm = () => {



  const handleSave = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (
    
   
      <><TextField
          margin="normal"
          required
          fullWidth
          size='small'
          id="fullname"
          label="Jina la Dereva"
          name="fullname"
          autoComplete="fullname"
          autoFocus /><TextField
              margin="normal"
              required
              fullWidth
              size='small'
              id="position"
              label="Nafasi"
              name="position"
              autoComplete="position"
              autoFocus /><TextField
              margin="normal"
              required
              fullWidth
              size='small'
              id="residence"
              label="Mahali Anapoishi"
              name="residence"
              autoComplete="residence"
              autoFocus /><TextField
              margin="normal"
              required
              fullWidth
              size='small'
              id="street"
              label="Mtaa"
              name="street"
              autoComplete="street"
              autoFocus /><TextField
              margin="normal"
              required
              fullWidth
              size='small'
              id="ward"
              label="Kata"
              name="ward"
              autoComplete="ward"
              autoFocus /><TextField
              margin="normal"
              required
              fullWidth
              size='small'
              id="nationalID"
              label="Namba Ya Nida"
              name="nationalID"
              autoComplete="nationalID"
              autoFocus /><TextField
              margin="normal"
              required
              fullWidth
              size='small'
              id="licenseID"
              label="Namba Ya Leseni"
              name="licenseID"
              autoComplete="licenseID"
              autoFocus /><TextField
              margin="normal"
              required
              fullWidth
              size='small'
              id="motorbikeNum"
              label="Namba Ya Pikipiki"
              name="motorbikeNum"
              autoComplete="motorbikeNum"
              autoFocus /><TextField
              margin="normal"
              required
              fullWidth
              size='small'
              id="phoneNum"
              label="Namba Ya Simu"
              name="phoneNum"
              autoComplete="phoneNum"
              autoFocus /><TextField
              margin="normal"
              required
              fullWidth
              size='small'
              id="jacketNum"
              label="Namba Ya Jacket"
              name="jacketNum"
              autoComplete="jacketNum"
              autoFocus /></>
      
    
     
     
  )
}

export default registerForm;