
import * as React from 'react';
import { DataGrid, GridActionsCellItem, GridRow } from '@mui/x-data-grid';
import clsx from "clsx";
import Box from '@mui/material/Box';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { red, } from '@mui/material/colors';


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



export default function DriverEntryListTable({driverList,handleDelete}) { 
          const [rows, setRows] = React.useState(driverList);


  const columns = React.useMemo(
    () => [
      { field: 'name', headerName:'Jina',  type: 'string', editable: true},
      { field: 'title', headerName:'Nafasi', type: 'string', editable: true},
      {field: 'address', headerName:'Anapoishi', editable: true},
      {field: 'street', headerName:'Mtaa', type: 'string',width: 120, hide: false, editable: true},
      { field: 'ward', headerName:'Kata', type: 'string', editable: true, hide: false,},
      { field: 'nida_number', headerName:'Namba Ya Nida', type: 'string', hide: false, editable: true},
      { field: 'license_number', headerName:'Namba Ya Leseni', type: 'string', hide: false, editable: true},
      { field: 'registration', headerName:'Namba Ya Pikipiki', type: 'string', hide: false, editable: true},
      { field: 'phone_number', headerName:'Namba Ya Simu', type: 'string', hide: true, editable: true},
      { field: 'jacket_number', headerName:'Namba Ya Jacketi', type: 'string', width: 140, editable: true},
      {field: 'Actions',type: 'actions',width: 80, renderCell: (params) => [
      
          <GridActionsCellItem
            icon={<DeleteForeverIcon sx={{ color: red[500] }} />}
            label="Delete"
            onClick={()=>handleDelete(params.id)}
          />,
        
          
        ],
      },
    ],
    [handleDelete],
  );

  return (
<div style={{ height: 600, width: '100%' }}>
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
        // justifyContent: "center",
        // alignItems: "center",
        // alignContent: "center"
      }}
    >
      <DataGrid 
      components={{ Row: CustomRow }}
      rowHeight={35}
      editMode="row"
      columns={columns} 
      rows={driverList??[]} 

      />
    </Box>
    </div>
  );
}
