import React,{useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} gutterBottom>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Viso Team
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();



export default function RegisterBoda() {
  let navigate = useNavigate(); 
  const [formValue, setFormValue] = useState({
                                             station: "",
                                             street: "",
                                             ward: "",
                                             district:"",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (values) => {
    values.preventDefault();
    
      let path = '/driverRegister'; 
    navigate(path);
    
  };

  const { station, street, ward, district } = formValue;



  return (
    <ThemeProvider theme={theme}>


      <Grid container component="main" justifyContent="center"
  alignItems="center" sx={{ height: '50vh', widht:'40' }}>
        <CssBaseline />
      
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
          
            <Typography component="h1" variant="h5">
              Java Taarifa za Kituo
            </Typography>
            <form onSubmit={handleSubmit} sx={{ mt: 0.5 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="station"
                label="Kituo"
                name="station"
                value={station}
                onChange={handleChange}
                autoComplete="station"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="street"
                label="Mtaa"
                name="street"
                autoComplete="street"
                autoFocus
                value={street}
                onChange={handleChange}
              />
               <TextField
                margin="normal"
                required
                fullWidth
                id="ward"
                label="Kata"
                name="ward"
                autoComplete="ward"
                autoFocus
                value={ward}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="district"
                label="Wilaya"
                name="district"
                autoComplete="district"
                autoFocus
                value={district}
                onChange={handleChange}
           
                
              />
              
              <Button
                fullWidth
                type='submit'
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Endelea
              </Button>
             
            
            </form>
          </Box>
          <Copyright/>
        </Grid>
        
      </Grid>
    </ThemeProvider>
  );
}