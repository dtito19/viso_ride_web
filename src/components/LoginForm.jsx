import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PinField from "react-pin-field";
import CircularProgress from '@mui/material/CircularProgress';

import axios from "axios";
// import {useDispatch} from 'react-redux';

import "./styles.css";
import Logo from './Logo';

import {
  Box,
  Button,
  Typography,
} from "@mui/material";



const LoginForm = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [code, setCode] = useState("");
  const [completed, setCompleted] = useState(false);
  const ref = useRef([]);
  const [inputs, setInputs] = useState({otp: []});
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  const sendLogin = async(otp) => {
    setIsSubmitting(true);
    try {
      const res = await axios.post("http://44.204.62.92/Api", 
      {
        api:110,
        code:104,
        data:{
          otp: parseInt(otp)
            }
      })

      const data = await res.data; 
      console.log(data.code);
      let dataCode = data.code;
      console.log(dataCode);
      console.log(data.user_details.operator_id);
      localStorage.setItem("OperatorId", data.user_details.operator_id)
   
      if(dataCode === 200){
        navigate('/dashboard')
      }
      return data;

    } catch (error) {
      // console.log('Somhjvvvvvvvvvvvvvvvvvvvvvvvvvvvv')
      alert('Something went wrong try again');
      setIsSubmitting(false);     


      
    }


console.log(inputs.otp);
    
  }
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    let pinValues=""
    ref.current.forEach(input => ( pinValues = pinValues+input.value))
    console.log(pinValues);
   
    sendLogin(pinValues);
  }






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
                  // value={inputs.otp}
                  validate={/^[0-9]$/}
                  onChange={setCode}
                  onComplete={() => setCompleted(true)}
                  format={k => k.toUpperCase()}
                />
          </Box>

          {isSubmitting ? <CircularProgress color="warning" /> :         
           <Button 
            type='submit'
            variant='contained'
            sx={{borderRadius: 3, marginTop: 3}} 
            color="warning">Login</Button> }
   
         
          </Box>

  
      </form>
   
  );
};

export default LoginForm;