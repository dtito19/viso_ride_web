import React, { useState, useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { blue, grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { mainListItems,} from "./listItems";

import DriverEntryListTable from "../components/driver_entry_list";
import Title from "../components/Title";



const drawerWidth = 240;;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();



function RegisterDriverContent() {

  const [driverList, setDriverList] = useState([]);
  const [isError, setIsError] = useState({isError:false,message:""});
  const [isPhoneValid, setIsPhoneValid] =useState({isPhoneValid:false,message:""});
  const [isNidaValid, setIsNidaValid] =useState({isNidaValid:false,message:""});
  const [isLicenseValid, setIsLicenseValid] = useState({isLicenseValid:false,message:""});
  const [isPlateNumValid, setIsPlateNumValid] = useState({isPlateNumValid:false,message:""});
  const [station, setStation] = React.useState(JSON.parse(localStorage.getItem("stationData")));
  const [operatorId, setOperatorId] = useState(JSON.parse(localStorage.getItem("OperatorId")));
  const [updatedList, setupdatedList] = useState(driverList);

  console.log(station);
  console.log(operatorId);

  useEffect(() => {
    const driverList = JSON.parse(localStorage.getItem("driverList"));
    if (driverList) {
      setDriverList(driverList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("driverList", JSON.stringify(driverList));
  }, [driverList]);

  const navigate = useNavigate();


  const SubmitFormData = async() => {

    const operatorID = localStorage.getItem("OperatorId");
    console.log("operator",operatorID);

    const station = JSON.parse(localStorage.getItem("stationData"));
    console.log("stattion",station);

    const drivers = JSON.parse(localStorage.getItem("driverList"));
    let modifiedDrivers =[...drivers]
  

    const dataToDb = {
      operator_id:operatorID,
      ...station,
      drivers:modifiedDrivers.map(driver=> {
        const {id,...restInfo} = driver
        return {...restInfo}
      })
    }

    console.log("info",dataToDb);

    const res = await axios.post("http://44.204.62.92/Api", 
      {
        api:110,
        code:203,
        data:{
          ...dataToDb
            }
      }).catch((error) => console.log(error));

    const data = await res.data; 
    let dataCode = data.code;
    console.log(data.user_details.operator_id);
    if(dataCode === 300){
     alert("Incorrect Pin, Enter Correct Pin To Proceed");
    }
    else if(data.code === 200){
      navigate('/dashboard')
    }
    return data;
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    SubmitFormData();
    localStorage.clear()


  };

  const handleSave = (event) => {
    event.preventDefault();
    if(!isError.isError && !isPhoneValid.isPhoneValid && !isNidaValid.isNidaValid && !isLicenseValid.isLicenseValid && !isPlateNumValid.isPlateNumValid){

      const driver = {
        id: Math.random() * 10,
        name: event.target.fullname.value,
        title: event.target.title.value,
        address: event.target.address.value,
        street: event.target.street.value,
        ward: event.target.ward.value,
        nida_number: event.target.nida_number.value,
        license_number: event.target.license_number.value,
        registration: event.target.registration.value,
        phone_number: event.target.phone_number.value,
        jacket_number: event.target.jacket_number.value,
      };
     
      event.target.reset();
      localStorage.setItem("driverList", JSON.stringify([...driverList, driver]));
      setDriverList([...driverList, driver]);
      
       
    }
    else {
      alert("Jaza taarifa sahihi")
    }

  };


  const validatePhoneNumber = (number) => {
    const firstPart = number.substr(0, 1)
    if (number.length === 10 && firstPart === "0") {
        return true
    } else {
        return false
    }

}

const validatelicense_number = (number) => {
  // const firstPart = number.substr(0, 1)
  if (number.length === 10) {
      return true
  } else {
      return false
  }

}

const validateNationalID = (number) => {
  
  if (number.length === 20) {
      return true
  } else {
      return false
  }

}

const validatePlateNum = (event) => {
  String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
  const number =event.target.value
  const firstPart1 = number.substr(0, 2);
  const firstPart2 = number.substr(0, 1);
  if ((number.length === 8)  && (firstPart2 === "T" || firstPart2 ==="t")  ) { 
      event.target.value = number.replaceAt(0,"T")
      return true
  } 
  else if((number.length === 8) && (firstPart1 === "MC"  || firstPart1 === "mc")){
    event.target.value = number.replaceAt(0,"MC")
      return true
  }
  else {
    return false
  }


}


  const onChange = (event) => {
    if (event.target.name === "phone_number"){
      if ( !validatePhoneNumber(event.target.value)) {
        setIsPhoneValid({isPhoneValid:true,message:"Ingiza Namba sahihi ya simu"});
        
        console.log("correct")
      }else{
        setIsPhoneValid({isPhoneValid:false,message:""});
      }
    } 
     if (event.target.name === "license_number"){
      if( !validatelicense_number(event.target.value)){
        setIsLicenseValid({isLicenseValid:true,message:"Ingiza Namba sahihi ya leseni"});
      }else{
        setIsLicenseValid({isLicenseValid:false,message:""});
      }
     }

     if (event.target.name === "nida_number"){
      if( !validateNationalID(event.target.value)){
        setIsNidaValid({isNidaValid:true,message:"Ingiza Namba sahihi ya NIDA"});
      }else{
        setIsNidaValid({isNidaValid:false,message:""});
      }
     }

     if (event.target.name === "registration"){
      if( !validatePlateNum(event)){
        setIsPlateNumValid({isPlateNumValid:true,message:"Ingiza Namba sahihi ya pikipiki"});
      }else{
        setIsPlateNumValid({isPlateNumValid:false,message:""});
      }
     }

   
  };
 


  const handleDelete = (id) => {
    var newDrivers = [...driverList];
    setDriverList(newDrivers.filter((driver) => driver.id !== id));
  };

  const handleEditOpen = (clickedDriver) => {
    console.log(clickedDriver);
    const editOpen = {
      ...JSON.parse(localStorage.getItem("editOpen")),
      ...clickedDriver,
    };

    localStorage.setItem("editOpen", JSON.stringify(editOpen));

  };

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <IconButton sx={{ p: 0, bgcolor: blue[500] }}>
              <Avatar alt="Viso Ride" src="/static/apple-touch-icon.png" />
            </IconButton>
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, mx: "20px" }}
            >
              Sajili Dereva
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open Profile">
                <IconButton sx={{ p: 0, bgcolor: grey[100] }}>
                  <Avatar alt="Viso Ride" src="/static/apple-touch-icon.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean()}
              ></Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{mainListItems}</List>
        </Drawer>

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 1, mb: 4 }}>
            
          <Title>Java Taarifa Za Dereva</Title>
                  <form onSubmit={handleSave} sx={{ mt: 0, mb: 2 }}>
                 
                  <Grid container justifyContent="center" component={Paper}  elevation={3}  square>
                  <Grid
                    item
                    xs={6}
                   
                   
                      >
                  <Box
                    sx={{
                      my: 3,
                      mx: 3,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                >

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      size="small"
                      id="fullname"
                      label="Jina la Dereva"
                      name="fullname"
                      autoComplete="fullname"
                      autoFocus
                      placeholder="Viso ride"
                    />
                  
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      size="small"
                      id="title"
                      label="Nafasi"
                      name="title"
                      autoComplete="title"
                      autoFocus
                      placeholder="Mjumbe"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      size="small"
                      id="address"
                      label="Mahali Anapoishi"
                      name="address"
                      autoComplete="address"
                      autoFocus
                      placeholder="Kinondoni A"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      size="small"
                      id="street"
                      label="Mtaa"
                      name="street"
                      autoComplete="street"
                      autoFocus
                      placeholder="Mkwajuni"
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      size="small"
                      id="ward"
                      label="Kata"
                      name="ward"
                      autoComplete="ward"
                      autoFocus
                      placeholder="Kinondoni A"
                    />
                </Box>
                      
                      </Grid>
                      <Grid
                    item
                    xs={6}
                    square
                      >
                                 <Box
                  sx={{
                    my: 3,
                    mx: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >

                  <TextField
                      margin="normal"
                      required
                      fullWidth
                      size="small"
                      id="nida_number"
                      label="Namba Ya Nida"
                      name="nida_number"
                      placeholder="18881212111210000120"
                      autoComplete="nida_number"
                      onChange={onChange}
                      helperText={isNidaValid.message}
                      error={isNidaValid.isNidaValid}
                      autoFocus
                      inputProps={{
                        maxLength: 20,
                      }}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      type={"number"}
                      size="small"
                      id="license_number"
                      label="Namba Ya Leseni"
                      name="license_number"
                      autoComplete="license_number"
                      placeholder="4001234567"
                      onChange={onChange}
                      helperText={isLicenseValid.message}
                      error={isLicenseValid.isLicenseValid}
                      // inputProps={{
                      //   maxLength: 10,
                      // }}
                      InputProps={{ inputProps: { min: 0, maxLength: 10, } }}

                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      size="small"
                      id="registration"
                      label="Namba Ya Pikipiki"
                      name="registration"
                      placeholder="MC123DCV"
                      autoComplete="registration"
                      onChange={onChange}
                      helperText={isPlateNumValid.message}
                      error={isPlateNumValid.isPlateNumValid}
                      inputProps={{
                        maxLength: 8,
                      }}
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      type={"tel"}
                      size="small"
                      id="phone_number"
                      placeholder="0712345678"
                      label="Namba Ya Simu"
                      name="phone_number"
                      autoComplete="phone_number"
                      inputProps={{
                        maxLength: 10,
                      }}
                      autoFocus
                      helperText={isPhoneValid.message}
                      error={isPhoneValid.isPhoneValid}
                      onChange={onChange}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      size="small"
                      placeholder="012"
                      id="jacket_number"
                      label="Namba Ya Jacket"
                      name="jacket_number"
                      autoComplete="jacket_number"
                      autoFocus
                    />
                </Box>
                      
                      </Grid>

                      <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 0, mb: 1 }}
                      style={{maxWidth: '200px', maxHeight: '30px', minWidth: '50px', minHeight: '30px'}}

                    >
                      Save
                    </Button>
                  </Grid>
                    
                  </form>


                  <Grid
                    item
                    xs={12}
                    sm={8}
                    md={7}
                    component={Paper}
                    elevation={6}
                    square
                    >
                  <Paper
                    sx={{
                      p: 2,
                      mt:2,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                  <Title>Taarifa Za Dereva Kituo Cha {station.station}</Title>
                  {/* <Title>{driverList.ward}</Title> */}
                  <DriverEntryListTable
                    handleEditOpen={handleEditOpen}
                    handleDelete={handleDelete}
                    driverList={driverList}
                  />
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit
                  </Button>
                </Paper>
                </Grid>
              
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function RegisterDriverPage() {
  return <RegisterDriverContent />;
}
