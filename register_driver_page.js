// import React, { useState } from "react";
// import TextField from "@material-ui/core/TextField";
// import InputAdornment from "@material-ui/core/InputAdornment";

// const App = () => {
// const [mobile, setmobile] = useState("");
// const [isError, setIsError] = useState(false);

// return (
// 	<div
// 	style={{
// 		marginLeft: "40%",
// 	}}
// 	>
// 	<h2>Validate Mobile nuh in ReactJS?</h2>
// 	<TextField
// 		type="tel"
// 		error={isError}
// 		value={mobile}
// 		label="Enter Phone Number"
// 		onChange={(e) => {
// 		setmobile(e.target.value);
// 		if (e.target.value.length > 10) {
// 			setIsError(true);
// 		}
// 		}}
// 		InputProps={{
// 		startAdornment: <InputAdornment position="start">
// 			+91
// 			</InputAdornment>,
// 		}}
// 	/>
// 	<h3>Your Mobile Number is: +91 {mobile} </h3>
// 	</div>
// );
// };

// export default App;


// /////////////////
// <Grid
// item
// xs={12}
// sm={8}
// md={7}
// component={Paper}
// elevation={6}
// square
// >
// <Paper
//   sx={{
//     p: 2,
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   }}
// >
//   <Title>Jaza Taarifa Za Dereva Kituo Cha {station.station}</Title>
//   <Title>{driverList.ward}</Title>
//   <Driver_Entry_List_Table
//     handleEditOpen={handleEditOpen}
//     handleDelete={handleDelete}
//     driverList={driverList}
//   />
//   <Button
//     onClick={handleSubmit}
//     variant="contained"
//     sx={{ mt: 3, mb: 2 }}
//   >
//     Submit
//   </Button>
// </Paper>
// </Grid>





// const [sampleObject, setSampleObject] = useState({});
// useEffect(() => {
//   let sampleObject = {
// 	id: 1,
// 	name: "infinitbility"
//   };
//   setSampleObject(sampleObject);
// }, []);
// return (
//   <div className="App">
// 	<h1>Hello {sampleObject.name}</h1>
// 	<h2>Coding feels like fuel for my life!</h2>
//   </div>
// );
// }











// import  React,{useEffect, useState} from 'react';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import MuiAppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import MuiDrawer from '@mui/material/Drawer';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import Tooltip from '@mui/material/Tooltip';
// import { blue, grey } from '@mui/material/colors';
// import List from '@mui/material/List';
// import Menu from '@mui/material/Menu';
// import Avatar from '@mui/material/Avatar';
// import MenuIcon from '@mui/icons-material/Menu';
// import Divider from '@mui/material/Divider';
// import Typography from '@mui/material/Typography';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate} from 'react-router-dom';


// import Driver_Entry_List_Table from './src copy/components/driver_entry_list';
// import { mainListItems, secondaryListItems } from './src copy/pages/listItems';
// import Title from './src copy/components/Title';
// import data from './src copy/components/dummy_data.json';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Viso Team
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }



// const drawerWidth = 120;


// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       boxSizing: 'border-box',
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   }),
// );


// const theme = createTheme();

//   function RegisterDriverContent() {
//   const [driverList, setDriverList] = useState([]);
//   const [editFormData, setEditFormData] = useState([]);
//   const [editOpen, setEditOpen] = React.useState(false);
//   const [open, setOpen] = React.useState(true);


//   const toggleDrawer = () => {
//     setOpen(!open);
//   };



//   useEffect(() => {
// 		const driverList = JSON.parse(localStorage.getItem('driverList'));
// 		if (driverList) {
// 			setDriverList(driverList);
// 		}
// 	}, []);



// 	useEffect(() => {
// 		localStorage.setItem('driverList', JSON.stringify(driverList));
// 	}, [driverList]);

 


//   const navigate = useNavigate();

//   const handleSubmit = event => {
//     event.preventDefault();
  
//     // 👇️ redirect
//     navigate('/registerBoda', {replace: true});
//   };
  

//   const handleSave = (event) => {
//     event.preventDefault();
//     const driver ={
//       id:Math.random()*10,
//       name: event.target.fullname.value, 
//       position: event.target.fullname.value,
//       residence: event.target.position.value,
//       street: event.target.residence.value,
//       ward: event.target.street.value,
//       nationalID: event.target.ward.value,
//       licenseID: event.target.nationalID.value,
//       motorbikeNum: event.target.licenseID.value, 
//       phoneNum: event.target.motorbikeNum.value,
//       jacketNum: event.target.jacketNum.value,
//     } 

//     localStorage.setItem("driverList",JSON.stringify([...driverList,driver]))
//     setDriverList([...driverList,driver])
   
//   };

//   const handleEditFormChange = (event) => {
//     event.preventDefault();
//     const driver ={
//       id:Math.random()*10,
//       name: event.target.fullname.value, 
//       position: event.target.fullname.value,
//       residence: event.target.position.value,
//       street: event.target.residence.value,
//       ward: event.target.street.value,
//       nationalID: event.target.ward.value,
//       licenseID: event.target.nationalID.value,
//       motorbikeNum: event.target.licenseID.value, 
//       phoneNum: event.target.motorbikeNum.value,
//       jacketNum: event.target.jacketNum.value,
//     }

   
//     const newFormData = { ...editFormData };
//     newFormData[driver] = driver;

//     setEditFormData(newFormData);
//   };


//   const handleDelete=(id)=>{
//     var newDrivers = [...driverList]
//     setDriverList(
//       newDrivers.filter((driver=>driver.id!==id))
//     )
    
//   };

//   const handleEditOpen = (clickedDriver) => {
//     console.log(clickedDriver);
//     const editOpen = {
//       ...JSON.parse(localStorage.getItem('editOpen')),
//       ...clickedDriver
//   };
    
//     localStorage.setItem('editOpen', JSON.stringify(editOpen));

//     // localStorage.setItem("editOpen",JSON.stringify([...driverList,clickedDriver]))
//   };

  

//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ display: 'flex' }}>
//       <Grid container component="main" mt={2} justifyContent="space-around" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <AppBar position="absolute" open={open}>
//           <Toolbar
//             sx={{
//               pr: '24px', // keep right padding when drawer closed
//             }}
//           >
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="open drawer"
//               onClick={toggleDrawer}
//               sx={{
//                 marginRight: '36px',
//                 ...(open && { display: 'none' }),
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
           
//             <IconButton sx={{ p: 0, bgcolor: blue[500]}}>
//                 <Avatar alt="Viso Ride" src="/static/viso_logo.png" />
//               </IconButton>
//             <Typography
//               component="h1"
//               variant="h6"
//               color="inherit"
//               noWrap
//               sx={{ flexGrow: 1 }}
//             >
//               Dashboard
//             </Typography>
           
//             <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open Profile">
//               <IconButton sx={{ p: 0, bgcolor: grey[100]}}>
//                 <Avatar alt="Remy Sharp" src="/static/viso_logo.png" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean()}
              
//             >
              
//             </Menu>
//           </Box>
//           </Toolbar>
//         </AppBar>
//         <Drawer variant="permanent" open={open}>
//           <Toolbar
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'flex-end',
//               px: [1],
//             }}
//           >
//             <IconButton onClick={toggleDrawer}>
//               <ChevronLeftIcon />
//             </IconButton>
//           </Toolbar>
//           <Divider />
//           <List component="nav">
//             {mainListItems}
//             {/* <Divider sx={{ my: 1 }} />
//             {secondaryListItems} */}
//           </List>
//         </Drawer>
//         <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 2,
//               mx: 2,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'flex-start',
//             }}
//           >
            
            
//             <Title>Java Taarifa Za Dereva</Title>
//             <Box component="form" noValidate onSubmit={handleSave} sx={{ mt: 0.5 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="fullname"
//                 label="Jina la Dereva"
//                 name="fullname"
//                 autoComplete="fullname"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="position"
//                 label="Nafasi"
//                 name="position"
//                 autoComplete="position"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="residence"
//                 label="Mahali Anapoishi"
//                 name="residence"
//                 autoComplete="residence"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="street"
//                 label="Mtaa"
//                 name="street"
//                 autoComplete="street"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="ward"
//                 label="Kata"
//                 name="ward"
//                 autoComplete="ward"
//                 autoFocus
//               />
//             <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="nationalID"
//                 label="Namba Ya Nida"
//                 name="nationalID"
//                 autoComplete="nationalID"
//                 autoFocus
//               />
//                <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="licenseID"
//                 label="Namba Ya Leseni"
//                 name="licenseID"
//                 autoComplete="licenseID"
//                 autoFocus
//               />
//                <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="motorbikeNum"
//                 label="Namba Ya Pikipiki"
//                 name="motorbikeNum"
//                 autoComplete="motorbikeNum"
//                 autoFocus
//               />
//                <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="phoneNum"
//                 label="Namba Ya Simu"
//                 name="phoneNum"
//                 autoComplete="phoneNum"
//                 autoFocus
//               />
//                 <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="jacketNum"
//                 label="Namba Ya Jacket"
//                 name="jacketNum"
//                 autoComplete="jacketNum"
//                 autoFocus
//               />
              
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Save
//               </Button>
             
              
//             </Box>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={8}  md={7} component={Paper} elevation={6} square>
//                 <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
//                   <Driver_Entry_List_Table handleEditOpen={handleEditOpen}  handleDelete={handleDelete}  driverList ={driverList}/>
//                   <Button
//                 onClick={handleSubmit}
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Submit
//               </Button>
//                 </Paper>
                
//               </Grid>

             
              
//       </Grid>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default function RegisterDriverPage() {
//   return <RegisterDriverContent />;
// }





// import  React, {useState, useEffect} from 'react';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiDrawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Tooltip from '@mui/material/Tooltip';
// import TextField from '@mui/material/TextField';

// import Menu from '@mui/material/Menu';
// import Avatar from '@mui/material/Avatar';
// import { useNavigate } from 'react-router-dom';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import { blue, grey } from '@mui/material/colors';

// import { mainListItems, secondaryListItems } from './listItems';

// import Driver_Entry_List from '../components/driver_entry_list';
// import TodayCard from '../components/Today_Data_Card';
// import PreviousDataCard from '../components/Previus_Data_Card';
// import RegisterBoda from '../components/register_boda_station';
// import RegisterDriverForm from '../components/RegisterDriver';
// import Title from '../components/Title';
// import Driver_Entry_List_Table from '../components/driver_entry_list';
// import { Button } from '@mui/material';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Viso Team
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       boxSizing: 'border-box',
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   }),
// );

// const mdTheme = createTheme();

// function RegisterDriverContent() {

//     const [driverList, setDriverList] = useState([]);
//     const [editFormData, setEditFormData] = useState([]);
//     const [editOpen, setEditOpen] = React.useState(false);

//     useEffect(() => {
//           const driverList = JSON.parse(localStorage.getItem('driverList'));
//           if (driverList) {
//               setDriverList(driverList);
//           }
//       }, []);

//       useEffect(() => {
//           localStorage.setItem('driverList', JSON.stringify(driverList));
//       }, [driverList]);

//     const navigate = useNavigate();

//     const handleSubmit = event => {
//       event.preventDefault();

//       // 👇️ redirect
//       navigate('/registerBoda', {replace: true});
//     };

//     const handleSave = (event) => {
//       event.preventDefault();
//       const driver ={
//         id:Math.random()*10,
//         name: event.target.fullname.value,
//         position: event.target.fullname.value,
//         residence: event.target.position.value,
//         street: event.target.residence.value,
//         ward: event.target.street.value,
//         nationalID: event.target.ward.value,
//         licenseID: event.target.nationalID.value,
//         motorbikeNum: event.target.licenseID.value,
//         phoneNum: event.target.motorbikeNum.value,
//         jacketNum: event.target.jacketNum.value,
//       }

//       localStorage.setItem("driverList",JSON.stringify([...driverList,driver]))
//       setDriverList([...driverList,driver])

//     };

//     const handleEditFormChange = (event) => {
//       event.preventDefault();
//       const driver ={
//         id:Math.random()*10,
//         name: event.target.fullname.value,
//         position: event.target.fullname.value,
//         residence: event.target.position.value,
//         street: event.target.residence.value,
//         ward: event.target.street.value,
//         nationalID: event.target.ward.value,
//         licenseID: event.target.nationalID.value,
//         motorbikeNum: event.target.licenseID.value,
//         phoneNum: event.target.motorbikeNum.value,
//         jacketNum: event.target.jacketNum.value,
//       }

//       const newFormData = { ...editFormData };
//       newFormData[driver] = driver;

//       setEditFormData(newFormData);
//     };

//     const handleDelete=(id)=>{
//       var newDrivers = [...driverList]
//       setDriverList(
//         newDrivers.filter((driver=>driver.id!==id))
//       )

//     };

//     const handleEditOpen = (clickedDriver) => {
//       console.log(clickedDriver);
//       const editOpen = {
//         ...JSON.parse(localStorage.getItem('editOpen')),
//         ...clickedDriver
//     };

//       localStorage.setItem('editOpen', JSON.stringify(editOpen));

//       // localStorage.setItem("editOpen",JSON.stringify([...driverList,clickedDriver]))
//     };

//   const [open, setOpen] = React.useState(true);
//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   return (
//     <ThemeProvider theme={mdTheme}>
//       <Box sx={{ display: 'flex' }}>
//       <Grid container component="main" mt={2} justifyContent="space-around" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <AppBar position="absolute" open={open}>
//           <Toolbar
//             sx={{
//               pr: '24px', // keep right padding when drawer closed
//             }}
//           >
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="open drawer"
//               onClick={toggleDrawer}
//               sx={{
//                 marginRight: '36px',
//                 ...(open && { display: 'none' }),
//               }}
//             >
//               <MenuIcon />
//             </IconButton>

//             <IconButton sx={{ p: 0, bgcolor: blue[500]}}>
//                 <Avatar alt="Viso Ride" src="/static/viso_logo.png" />
//               </IconButton>
//             <Typography
//               component="h1"
//               variant="h6"
//               color="inherit"
//               noWrap
//               sx={{ flexGrow: 1 }}
//             >
//               Dashboard
//             </Typography>

//             <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open Profile">
//               <IconButton sx={{ p: 0, bgcolor: grey[100]}}>
//                 <Avatar alt="Remy Sharp" src="/static/viso_logo.png" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean()}

//             >

//             </Menu>
//           </Box>
//           </Toolbar>
//         </AppBar>
//         <Drawer variant="permanent" open={open}>
//           <Toolbar
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'flex-end',
//               px: [1],
//             }}
//           >
//             <IconButton onClick={toggleDrawer}>
//               <ChevronLeftIcon />
//             </IconButton>
//           </Toolbar>
//           <Divider />
//           <List component="nav">
//             {mainListItems}
//             {/* <Divider sx={{ my: 1 }} />
//             {secondaryListItems} */}
//           </List>
//         </Drawer>
//         <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 2,
//               mx: 2,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'flex-start',
//             }}
//           >

//             <Title>Java Taarifa Za Dereva</Title>
//             <form   onSubmit={handleSave} sx={{ mt: 0.5 }}>
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="fullname"
//                 label="Jina la Dereva"
//                 name="fullname"
//                 autoComplete="fullname"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="position"
//                 label="Nafasi"
//                 name="position"
//                 autoComplete="position"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="residence"
//                 label="Mahali Anapoishi"
//                 name="residence"
//                 autoComplete="residence"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="street"
//                 label="Mtaa"
//                 name="street"
//                 autoComplete="street"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="ward"
//                 label="Kata"
//                 name="ward"
//                 autoComplete="ward"
//                 autoFocus
//               />
//             <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="nationalID"
//                 label="Namba Ya Nida"
//                 name="nationalID"
//                 autoComplete="nationalID"
//                 autoFocus
//               />
//                <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="licenseID"
//                 label="Namba Ya Leseni"
//                 name="licenseID"
//                 autoComplete="licenseID"
//                 autoFocus
//               />
//                <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="motorbikeNum"
//                 label="Namba Ya Pikipiki"
//                 name="motorbikeNum"
//                 autoComplete="motorbikeNum"
//                 autoFocus
//               />
//                <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="phoneNum"
//                 label="Namba Ya Simu"
//                 name="phoneNum"
//                 autoComplete="phoneNum"
//                 autoFocus
//               />
//                 <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 size='small'
//                 id="jacketNum"
//                 label="Namba Ya Jacket"
//                 name="jacketNum"
//                 autoComplete="jacketNum"
//                 autoFocus
//               />

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Save
//               </Button>

//             </form>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={8}  md={7} component={Paper} elevation={6} square>
//                 <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
//                   <Driver_Entry_List_Table handleEditOpen={handleEditOpen}  handleDelete={handleDelete}  driverList ={driverList}/>
//                   <Button
//                 onClick={handleSubmit}
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Submit
//               </Button>
//                 </Paper>

//               </Grid>

//       </Grid>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default function RegisterDriverPage() {
//   return <RegisterDriverContent />;
// }

// import React, { useState, useEffect } from "react";
// import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiDrawer from "@mui/material/Drawer";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Tooltip from "@mui/material/Tooltip";
// import Menu from "@mui/material/Menu";
// import Avatar from "@mui/material/Avatar";
// import TextField from "@mui/material/TextField";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Link from "@mui/material/Link";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import { blue, grey } from "@mui/material/colors";
// import { useNavigate } from "react-router-dom";

// import { mainListItems, secondaryListItems } from "./listItems";

// import Driver_Entry_List_Table from "../components/driver_entry_list";
// import Title from "../components/Title";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Viso Team
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const drawerWidth = 150;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   "& .MuiDrawer-paper": {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     boxSizing: "border-box",
//     ...(!open && {
//       overflowX: "hidden",
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       width: theme.spacing(7),
//       [theme.breakpoints.up("sm")]: {
//         width: theme.spacing(9),
//       },
//     }),
//   },
// }));

// const mdTheme = createTheme();

// function RegisterDriverContent() {
//   const [driverList, setDriverList] = useState([]);
//   const [editFormData, setEditFormData] = useState([]);
//   const [editOpen, setEditOpen] = React.useState(false);
//   const [stationData, setStationData] = React.useState({});

//   useEffect(() => {
//     const driverList = JSON.parse(localStorage.getItem("driverList"));
//     if (driverList) {
//       setDriverList(driverList);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("driverList", JSON.stringify(driverList));
//   }, [driverList]);

//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const station = JSON.parse(localStorage.getItem("stationData"));
//     const drivers = JSON.parse(localStorage.getItem("driverList"));
//     setStationData({
//       ...station,
//       driver_list: drivers,
//     });
//     console.log("info", stationData);

//     // 👇️ redirect
//     // navigate('/registerStation', {replace: true});
//   };

//   const handleSave = (event) => {
//     event.preventDefault();
//     const driver = {
//       id: Math.random() * 10,
//       name: event.target.fullname.value,
//       position: event.target.fullname.value,
//       residence: event.target.position.value,
//       street: event.target.residence.value,
//       ward: event.target.street.value,
//       nationalID: event.target.ward.value,
//       licenseID: event.target.nationalID.value,
//       motorbikeNum: event.target.licenseID.value,
//       phoneNum: event.target.motorbikeNum.value,
//       jacketNum: event.target.jacketNum.value,
//     };

//     localStorage.setItem("driverList", JSON.stringify([...driverList, driver]));
//     setDriverList([...driverList, driver]);
//   };

//   const handleEditFormChange = (event) => {
//     event.preventDefault();
//     const driver = {
//       id: Math.random() * 10,
//       name: event.target.fullname.value,
//       position: event.target.fullname.value,
//       residence: event.target.position.value,
//       street: event.target.residence.value,
//       ward: event.target.street.value,
//       nationalID: event.target.ward.value,
//       licenseID: event.target.nationalID.value,
//       motorbikeNum: event.target.licenseID.value,
//       phoneNum: event.target.motorbikeNum.value,
//       jacketNum: event.target.jacketNum.value,
//     };

//     const newFormData = { ...editFormData };
//     newFormData[driver] = driver;

//     setEditFormData(newFormData);
//   };

//   const handleDelete = (id) => {
//     var newDrivers = [...driverList];
//     setDriverList(newDrivers.filter((driver) => driver.id !== id));
//   };

//   const handleEditOpen = (clickedDriver) => {
//     console.log(clickedDriver);
//     const editOpen = {
//       ...JSON.parse(localStorage.getItem("editOpen")),
//       ...clickedDriver,
//     };

//     localStorage.setItem("editOpen", JSON.stringify(editOpen));

//     // localStorage.setItem("editOpen",JSON.stringify([...driverList,clickedDriver]))
//   };

//   const [open, setOpen] = React.useState(true);
//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   return (
//     <ThemeProvider theme={mdTheme}>
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <AppBar position="absolute" open={open}>
//           <Toolbar
//             sx={{
//               pr: "24px", // keep right padding when drawer closed
//             }}
//           >
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="open drawer"
//               onClick={toggleDrawer}
//               sx={{
//                 marginRight: "36px",
//                 ...(open && { display: "none" }),
//               }}
//             >
//               <MenuIcon />
//             </IconButton>

//             <IconButton sx={{ p: 0, bgcolor: blue[500] }}>
//               <Avatar alt="Viso Ride" src="/static/apple-touch-icon.png" />
//             </IconButton>
//             <Typography
//               component="h1"
//               variant="h4"
//               color="inherit"
//               noWrap
//               sx={{ flexGrow: 1, mx: "20px" }}
//             >
//               Dashboard
//             </Typography>

//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title="Open Profile">
//                 <IconButton sx={{ p: 0, bgcolor: grey[100] }}>
//                   <Avatar alt="Viso Ride" src="/static/apple-touch-icon.png" />
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: "45px" }}
//                 id="menu-appbar"
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean()}
//               ></Menu>
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <Drawer variant="permanent" open={open}>
//           <Toolbar
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "flex-end",
//               px: [1],
//             }}
//           >
//             <IconButton onClick={toggleDrawer}>
//               <ChevronLeftIcon />
//             </IconButton>
//           </Toolbar>
//           <Divider />
//           <List component="nav">{mainListItems}</List>
//         </Drawer>

//         <Box
//           component="main"
//           sx={{
//             backgroundColor: (theme) =>
//               theme.palette.mode === "light"
//                 ? theme.palette.grey[100]
//                 : theme.palette.grey[900],
//             flexGrow: 1,
//             height: "100vh",
//             overflow: "auto",
//           }}
//         >
//           <Toolbar />
//           <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//             <Grid
//               container
//               mt={2}
//               justifyContent="space-around"
//               sx={{ height: "100vh" }}
//             >
//               <Grid
//                 item
//                 xs={12}
//                 sm={8}
//                 md={5}
//                 component={Paper}
//                 elevation={6}
//                 square
//               >
//                 <Box
//                   sx={{
//                     my: 2,
//                     mx: 2,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "flex-start",
//                   }}
//                 >
//                   <Title>Java Taarifa Za Dereva</Title>
//                   <form onSubmit={handleSave} sx={{ mt: 0.5 }}>
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       size="small"
//                       id="fullname"
//                       label="Jina la Dereva"
//                       name="fullname"
//                       autoComplete="fullname"
//                       autoFocus
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       size="small"
//                       id="position"
//                       label="Nafasi"
//                       name="position"
//                       autoComplete="position"
//                       autoFocus
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       size="small"
//                       id="residence"
//                       label="Mahali Anapoishi"
//                       name="residence"
//                       autoComplete="residence"
//                       autoFocus
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       size="small"
//                       id="street"
//                       label="Mtaa"
//                       name="street"
//                       autoComplete="street"
//                       autoFocus
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       size="small"
//                       id="ward"
//                       label="Kata"
//                       name="ward"
//                       autoComplete="ward"
//                       autoFocus
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       size="small"
//                       id="nationalID"
//                       label="Namba Ya Nida"
//                       name="nationalID"
//                       autoComplete="nationalID"
//                       autoFocus
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       size="small"
//                       id="licenseID"
//                       label="Namba Ya Leseni"
//                       name="licenseID"
//                       autoComplete="licenseID"
//                       autoFocus
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       size="small"
//                       id="motorbikeNum"
//                       label="Namba Ya Pikipiki"
//                       name="motorbikeNum"
//                       autoComplete="motorbikeNum"
//                       autoFocus
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       size="small"
//                       id="phoneNum"
//                       label="Namba Ya Simu"
//                       name="phoneNum"
//                       autoComplete="phoneNum"
//                       autoFocus
//                     />
//                     <TextField
//                       margin="normal"
//                       required
//                       fullWidth
//                       size="small"
//                       id="jacketNum"
//                       label="Namba Ya Jacket"
//                       name="jacketNum"
//                       autoComplete="jacketNum"
//                       autoFocus
//                     />

//                     <Button
//                       type="submit"
//                       fullWidth
//                       variant="contained"
//                       sx={{ mt: 3, mb: 2 }}
//                     >
//                       Save
//                     </Button>
//                   </form>
//                 </Box>
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 sm={8}
//                 md={7}
//                 component={Paper}
//                 elevation={6}
//                 square
//               >
//                 <Paper
//                   sx={{
//                     p: 2,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Driver_Entry_List_Table
//                     handleEditOpen={handleEditOpen}
//                     handleDelete={handleDelete}
//                     driverList={driverList}
//                   />
//                   <Button
//                     onClick={handleSubmit}
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2 }}
//                   >
//                     Submit
//                   </Button>
//                 </Paper>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default function RegisterDriverPage() {
//   return <RegisterDriverContent />;
// }