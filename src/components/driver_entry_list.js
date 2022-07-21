
import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { red, blue } from '@mui/material/colors';
import data from './dummy_data.json';


export default function Driver_Entry_List_Table({driverList,handleDelete}) {
          // const [name, setName] = useState('');
          // const [city, setCity] = useState('');  
          const [rows, setRows] = React.useState(driverList);
          const [updatedState, setUpdatedState] = React.useState(false);



          const handleOnCellClick = (params) => {
            setUpdatedState(params);
          };


  const columns = React.useMemo(
    () => [
      { field: 'name', headerName:'Jina',  type: 'string', editable: true},
      { field: 'position', headerName:'Nafasi', type: 'string', editable: true},
      {field: 'residence', headerName:'Anapoishi', editable: true},
      {field: 'street', headerName:'Mtaa', type: 'string',width: 120, hide: false, editable: true},
      { field: 'ward', headerName:'Kata', type: 'string', editable: true, hide: false,},
      { field: 'nationalID', headerName:'Namba Ya Nida', type: 'string', hide: false, editable: true},
      { field: 'licenseID', headerName:'Namba Ya Leseni', type: 'string', hide: false, editable: true},
      { field: 'motorbikeNum', headerName:'Namba Ya Pikipiki', type: 'string', hide: false, editable: true},
      { field: 'phoneNum', headerName:'Namba Ya Simu', type: 'string', hide: true, editable: true},
      { field: 'jacketNum', headerName:'Namba Ya Jacketi', type: 'string', width: 140, editable: true},
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
      <DataGrid 
      sx={{ m: 2 }}
      editMode="row"
      columns={columns} 
      rows={driverList??[]} 
      // onEditRowsModelChange={handleEditOpen} 

      
      />
    </div>
  );
}
