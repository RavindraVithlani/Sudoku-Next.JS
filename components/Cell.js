import React from 'react';
import { TextField, Grid } from '@mui/material';

const Cell = ({ value, readonly, onChange, group }) => {
  const handleChange = (event) => {
    onChange(event.target.value, event.target.getAttribute('data-group'), event.target);
  };

  // Determine background color based on the group
  const backgroundColor = (group % 2 === 0) ? 'rgb(226 190 249)' : 'rgb(176 62 247)';
  const textColor = (group % 2 === 0) ? 'black' : 'white'; // Ensure text color is readable
  const borderColor = (group % 2 !== 0) ? 'rgb(176 62 247)' : 'rgb(226 190 249)';
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
            backgroundColor, // Apply background color
            color: textColor, // Apply text color
            borderRadius: '5px',
            cursor:'pointer'
          },
          "data-group": group,
          maxLength:1,
        }}
        value={value || ''}
        onChange={handleChange}
        disabled={readonly}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent', // Inherit the color of the border
              margin: '0',
              borderRadius: '10px',
              
            }
          }
        }}
      />
    </Grid>
  );
};

export default Cell;
