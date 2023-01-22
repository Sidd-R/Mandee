import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Search({setSearch}) {
  return (
    // <Autocomplete
    //   disablePortal
    //   id="combo-box-demo"
    //   options={top100Films}
    //   sx={{ width: 300 }}
    //   renderInput={(params) => 
        <TextField  label="search" onChange={(e) => setSearch(e.target.value)}
            style={{"width":"500px"}} />
    //   style={{"width":"500px",}}
    // />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'vegetables', year: 1994 },
  { label: 'rice', year: 1972 },
  { label: 'fruits', year: 1974 },
  { label: 'millet', year: 2008 },
  { label: 'maize', year: 1957 },
  { label: "pulses", year: 1993 },
  
];
