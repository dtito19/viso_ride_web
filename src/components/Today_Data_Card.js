import React,{useState, useEffect} from 'react';
import {Typography, } from '@mui/material/';
import Title from './Title';
import axios from 'axios';


const TodayCard=() =>{
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

    console.log(response.data.admin_today_count);
    let count=response.data.admin_today_count
    setCount(count);
    console.log(count);
    } catch (error) {
      console.log(error);
    }
    
    };

    useEffect(() => {
      fetchData();
    }, []);


  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <React.Fragment>
      <Title variant='h4'>Ingizo la leo</Title>
      <Typography component="p" variant="h4">
        {count}
      </Typography>
      <Typography variant='h4' color="text.secondary" sx={{ flex: 1 }}>
        {date}
      </Typography>
     
    
    </React.Fragment>
  );
}

export default TodayCard;