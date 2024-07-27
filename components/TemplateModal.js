import React, { useState, useEffect } from 'react';
import { Modal, Button, List, ListItem, ListItemText } from '@mui/material';

const TemplateModal = ({ open, onClose, onSelect }) => {
    const [templates, setTemplates] = useState({});
    useEffect(() => {
          setTemplates(JSON.parse(localStorage.getItem('sudokuTemplates')) || {})
      }, []);

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ padding: '20px', backgroundColor: 'white', margin: '20px auto', maxWidth: '400px' }}>
        <h2>Select a Template</h2>
        <List>
          {Object.keys(templates).map((name) => (
            <ListItem button key={name} onClick={() => onSelect(name)}>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
};

export default TemplateModal;
