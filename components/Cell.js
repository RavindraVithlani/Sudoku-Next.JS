import React from 'react';
import { TextField, Grid } from '@mui/material';

const Cell = ({ value, readonly, onChange, group }) => {
  const handleChange = (event) => {
    if (event.target.value!=='0'){
      onChange(event.target.value, event.target.getAttribute('data-group'), event.target);
    }
   
  };

  // Determine background color based on the group
  const backgroundColor = (group % 2 === 0) ? 'rgb(226 190 249)' : 'rgb(176 62 247)';
  const textColor = (group % 2 === 0) ? 'black' : 'white'; 
  return (
    <Grid item xs={1}>
      <TextField
        variant="outlined"
        fullWidth
        type="text"
        inputProps={{
          pattern: '[1-9]',
          style: {
            textAlign: 'center',
            backgroundColor: backgroundColor, 
            color: textColor, // Apply text color
            borderRadius: '5px',
            cursor:'pointer',
          },
          "data-group": group,
          maxLength:1,
          autoComplete: 'off',
        }}
        value={value || ''}
        onChange={handleChange}
        disabled={readonly}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent', // Inherit the color of the border
              margin: '0',
            }
          }
        }}
      />
    </Grid>
  );
};

export default Cell;
