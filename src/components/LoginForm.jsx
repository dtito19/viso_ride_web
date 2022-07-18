import React, { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import PinInput from 'react-pin-input';

import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};


// { setAuth }
const LoginForm = () => {
  const navigate = useNavigate();


  
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleNavigation = event => {
    event.preventDefault();
  
    // 👇️ redirect
    navigate('/dashboard', {replace: true});
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: true,
    },
    validationSchema: LoginSchema,
    onSubmit: () => {
      console.log("submitting...");
      setTimeout(() => {
        console.log("submited!!");
        // setAuth(false);
        // navigate(from, { replace: true });
      }, 2000);
    },
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } =
    formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleNavigation}>
        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
            justifyContent="center"
            alignItems="center"
          >
  

            <PinInput 
                length={4} 
                initialValue=""
                justifyContent="space-between"
                secret 
                onChange={(values, index) => {}} 
                type="numeric" 
                inputMode="number"
                style={{padding: '40px'}}  
                inputStyle={{borderColor: 'grey'}}
                inputFocusStyle={{borderColor: 'blue'}}
                onComplete={(values, index) => {}}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />

         
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
   

            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}

            >
              {isSubmitting ? "loading..." : "Login"}
            </LoadingButton>
          </Box>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
