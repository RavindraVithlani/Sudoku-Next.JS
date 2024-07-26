import React, { useState, useContext } from 'react';
import { Snackbar, Alert } from '@mui/material';

export const SnackbarContext = React.createContext();

const SnackBarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: ''
  });

  const showSnackbar = (message, type, color,time) => {
    setSnackbar({
      open: true,
      message,
      type,
      color,
      time
    });

    setTimeout(() => {
      setSnackbar({ ...snackbar, open: false });
    }, 2000); // Show for 2000ms
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      <Snackbar
  open={snackbar.open}
  autoHideDuration={2000}
  onClose={() => setSnackbar({ ...snackbar, open: false })}
>
<Alert
  onClose={() => setSnackbar({ ...snackbar, open: false })}
  severity={snackbar.type}
  sx={{ 
    width: '100%', 
    backgroundColor: snackbar.color, 
    color: 'white',
    '& .MuiAlert-icon': {
      color: 'white'
    }
  }}
>
  {snackbar.message}
</Alert>
</Snackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackBarProvider;

export const useSnackbar = () => {
    return useContext(SnackbarContext);
  };
