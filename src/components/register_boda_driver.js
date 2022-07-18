import  React,{useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate} from 'react-router-dom';


import Driver_Entry_List_Table from '../pages/driver_entry_list';
import Title from '../pages/Title';
import data from './dummy_data.json';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Viso Team
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



// function preventDefault(event) {
//   event.preventDefault();
// }


const theme = createTheme();

export default function Boda_Driver_Register() {
  const [driverList, setDriverList] = useState([]);
  const [editFormData, setEditFormData] = useState([]);
  const [editOpen, setEditOpen] = React.useState(false);



  useEffect(() => {
		const driverList = JSON.parse(localStorage.getItem('driverList'));
		if (driverList) {
			setDriverList(driverList);
		}
	}, []);



	useEffect(() => {
		localStorage.setItem('driverList', JSON.stringify(driverList));
	}, [driverList]);

 


  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
  
    // 👇️ redirect
    navigate('/registerBoda', {replace: true});
  };
  

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

  const handleEditFormChange = (event) => {
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

   
    const newFormData = { ...editFormData };
    newFormData[driver] = driver;

    setEditFormData(newFormData);
  };


  const handleDelete=(id)=>{
    var newDrivers = [...driverList]
    setDriverList(
      newDrivers.filter((driver=>driver.id!==id))
    )
    
  };

  const handleEditOpen = (clickedDriver) => {
    console.log(clickedDriver);
    const editOpen = {
      ...JSON.parse(localStorage.getItem('editOpen')),
      ...clickedDriver
  };
    
    localStorage.setItem('editOpen', JSON.stringify(editOpen));

    // localStorage.setItem("editOpen",JSON.stringify([...driverList,clickedDriver]))
  };

  

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" mt={2} justifyContent="space-around" sx={{ height: '100vh' }}>
        <CssBaseline />
        
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 2,
              mx: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            
            
            <Title>Java Taarifa Za Dereva</Title>
            <Box component="form" noValidate onSubmit={handleSave} sx={{ mt: 0.5 }}>
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
             
              
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}  md={7} component={Paper} elevation={6} square>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                  <Driver_Entry_List_Table handleEditOpen={handleEditOpen}  handleDelete={handleDelete}  driverList ={driverList}/>
                  <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
                </Paper>
                
              </Grid>

             
              
      </Grid>
    </ThemeProvider>
  );
}