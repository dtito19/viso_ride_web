import React, {useState, useEffect} from 'react';

import { Button, CssBaseline, Grid, TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material';

import Title from './Title';

const RegisterDriverForm = () => {
    const [driverList, setDriverList] = useState([]);


    useEffect(() => {
		const driverList = JSON.parse(localStorage.getItem('driverList'));
		if (driverList) {
			setDriverList(driverList);
		}
	}, []);



	useEffect(() => {
		localStorage.setItem('driverList', JSON.stringify(driverList));
	}, [driverList]);



    const handleSave = (event) => {
        event.preventDefault();
        const driver ={
          id:Math.random()*10,
          name: event.target.fullname.value, 
          position: event.target.fullname.value,
          residence: event.target.position.value,
          street: event.target.residence.value,
          ward: event.target.street.value,
          nationalID: event.target.ward.value,
          licenseID: event.target.nationalID.value,
          motorbikeNum: event.target.licenseID.value, 
          phoneNum: event.target.motorbikeNum.value,
          jacketNum: event.target.jacketNum.value,
        } 
    
        localStorage.setItem("driverList",JSON.stringify([...driverList,driver]))
        setDriverList([...driverList,driver])
       
      };


  return (
    <ThemeProvider >
      
      
      <Grid container mt={2} justifyContent="space-around" sx={{ height: '100vh' }}>
      <Title>Java Taarifa Za Dereva</Title>
        <CssBaseline />
        <form onSubmit={handleSave} sx={{ display: 'flex' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                size='small'
                id="fullname"
                label="Jina la Dereva"
                name="fullname"
                autoComplete="fullname"
                autoFocus
                // error={formError && fullname.length === 0}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                size='small'
                id="position"
                label="Nafasi"
                name="position"
                autoComplete="position"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                size='small'
                id="residence"
                label="Mahali Anapoishi"
                name="residence"
                autoComplete="residence"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                size='small'
                id="street"
                label="Mtaa"
                name="street"
                autoComplete="street"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                size='small'
                id="ward"
                label="Kata"
                name="ward"
                autoComplete="ward"
                autoFocus
              />
            <TextField
                margin="normal"
                required
                fullWidth
                size='small'
                id="nationalID"
                label="Namba Ya Nida"
                name="nationalID"
                autoComplete="nationalID"
                autoFocus
              />
               <TextField
                margin="normal"
                required
                fullWidth
                size='small'
                id="licenseID"
                label="Namba Ya Leseni"
                name="licenseID"
                autoComplete="licenseID"
                autoFocus
              />
               <TextField
                margin="normal"
                required
                fullWidth
                size='small'
                id="motorbikeNum"
                label="Namba Ya Pikipiki"
                name="motorbikeNum"
                autoComplete="motorbikeNum"
                autoFocus
              />
               <TextField
                margin="normal"
                required
                fullWidth
                size='small'
                id="phoneNum"
                label="Namba Ya Simu"
                name="phoneNum"
                autoComplete="phoneNum"
                autoFocus
              />
                <TextField
                margin="normal"
                required
                fullWidth
                size='small'
                id="jacketNum"
                label="Namba Ya Jacket"
                name="jacketNum"
                autoComplete="jacketNum"
                autoFocus
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
              </form>    
              
      </Grid>
      
    </ThemeProvider>
  );
}

export default RegisterDriverForm