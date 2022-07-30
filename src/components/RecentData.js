import React,{useState, useEffect} from 'react';
import { DataGrid, GridRow } from '@mui/x-data-grid';
import clsx from "clsx";
import Box from '@mui/material/Box';
import axios from 'axios';

  function CustomRow(props) {
    const { className, index, ...other } = props;
  
    return (
      <GridRow
        index={index}
        className={clsx(className, index % 2 === 0 ? "odd" : "even")}
        {...other}
      />
    );
  }



export default function RecentEntryData() { 
          const [rows, setRows] = useState([]);


        //   const [blogs, setBlogs] = useState();

        const fetchData = async () => {
          const operator_id = localStorage.getItem("OperatorId");
          console.log("operator",operator_id);
          try {
            const response = await axios.post("http://44.204.62.92/Api", 
          {
            api:110,
            code:204,
            data:{
              operator_id
                }
          })


          console.log(response.data.bodabodas);
          let bodaList =[...response.data.bodabodas]
          bodaList= bodaList.map((item)=>{return {id:(Math.random()*10),...item}})

          setRows(bodaList);
          } catch (error) {
            console.log(error);
          }
          
         


          };
          useEffect(() => {
            fetchData();
          }, []);


  const columns = React.useMemo(
    () => [
      { field: 'name', headerName:'Jina',  type: 'string'},
      { field: 'title', headerName:'Nafasi', type: 'string'},
      {field: 'address', headerName:'Anapoishi'},
      {field: 'street', headerName:'Mtaa', type: 'string', },
      { field: 'ward', headerName:'Kata', type: 'string',  },
      { field: 'nida_number', headerName:'Nida', type: 'string'},
      { field: 'license_number', headerName:'Leseni', type: 'string'},
      { field: 'vehicle', headerName:'Pikipiki',valueGetter: (params) => params.row?.vehicle.vehicle_registration, type: 'string' },
      { field: 'phone_number', headerName:'Simu', type: 'string'},
      { field: 'jacket_number', headerName:'Jacketi', type: 'string'},
     
    ],
    
  );

  return (
<div style={{ height: '100%', width: '100%' }}>
    <Box
      sx={{
        height: 400,
        width: 1,
        "& .odd": {
          bgcolor: "#ccc"
        },
        "& .even": {
          bgcolor: "#eee"
        },

      }}
    >
      <DataGrid 
      components={{ Row: CustomRow }}
      rowHeight={35}
      columns={columns} 
      rows={rows} 

      />
    </Box>
    </div>
  );
}
