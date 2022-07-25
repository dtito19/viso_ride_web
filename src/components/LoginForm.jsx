import React, { useRef, useEffect, useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import PinField from "react-pin-field";
import "./styles.css";
import Logo from './Logo';

import {
  Box,
  Button,
  Typography,
} from "@mui/material";



const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const inputRef = useRef(null);
  const from = location.state?.from?.pathname || "/";
  const [code, setCode] = useState("");
  const [completed, setCompleted] = useState(false);
  const [pin, setPin] = useState(new Array(4).fill(""));
  const ref = useRef([]);
  
 
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(code);
    // sendRequest();
  }


  const handleNavigation = event => {
    event.preventDefault();
  
    // 👇️ redirect
    navigate('/dashboard', {replace: true});
  };


  return (
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
       <Box 
          maxWidth={400}
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          justifyContent={"center"}
          boxShadow="5px 5px 10px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
          >
            <Logo />
            <Typography variant='h5' padding={3} textAlign="center" >Login To Your Account</Typography>
  
          <Box
             maxWidth={400}
             display="flex" 
             flexDirection="row" 
             alignItems="" 
             justifyContent={"space-between"}
            //  boxShadow="10px 10px 20px #ccc"
             padding={1}
             margin="auto"
             marginTop={1}
            //  borderRadius={5}
          
          >
              <PinField
                 ref={ref}
                  className="field-a"
                  length={4}
                  validate={/^[0-9]$/}
                  onChange={setCode}
                  onComplete={() => setCompleted(true)}
                  format={k => k.toUpperCase()}
                />
          </Box>

          <Button 
            type='submit'
            variant='contained'
            sx={{borderRadius: 3, marginTop: 3}} 
            color="warning">Login</Button>   
         
          </Box>

  
      </form>
  );
};

export default LoginForm;
