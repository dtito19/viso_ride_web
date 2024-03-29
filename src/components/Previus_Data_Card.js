import React,{useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import axios from 'axios';

import Title from './Title';



const PreviousDataCard=() =>{
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

    console.log(response.data.admin_total_count);
    let count = response.data.admin_total_count
    setCount(count);
    } catch (error) {
      console.log(error);
    }
    
    };

    useEffect(() => {
      fetchData();
    }, []);


  return (
    <React.Fragment>
      <Title>Ingizo kabla ya leo</Title>
      <Typography component="p" variant="h4">
      {count}
      </Typography>
     
    </React.Fragment>
  );
}

export default PreviousDataCard;