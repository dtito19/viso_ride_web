import React,{useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

import Title from './Title';
import axios from 'axios';



export default function TotalDrivers() {

  const [count, setCount] = useState();

  const fetchData = async () => {
    const operator_id = localStorage.getItem("OperatorId");
    console.log("operator",operator_id);
    try {
      const response = await axios.post("http://44.204.62.92/Api", 
    {
      api:110,
      code:205,
      data:{
        operator_id
          }
    })

    console.log(response.data.total_count);
    let count=response.data.total_count
    setCount(count);
    console.log(count);
    } catch (error) {
      console.log(error);
    }
    
    };

    useEffect(() => {
      fetchData();
    }, []);





  return (
    <React.Fragment>
      <Box 
      alignContent='center'
      alignItems='center'
      >
      <Title>Jumla</Title>
      <Typography component="p" variant="h4">
        {count}
      </Typography>
      </Box>
      
   
 
    </React.Fragment>
  );
}