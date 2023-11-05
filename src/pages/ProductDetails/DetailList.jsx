import React from 'react';
import { List, ListItem, Typography } from '@mui/material';

const DetailsList = ({ details }) => {
  const detailsList = details?.split('. ');

  return (
    <List sx={{ listStyleType: 'disc', paddingLeft: '5px' }}>
      {detailsList?.map((item, index) => (
        <ListItem key={index} sx={{ marginBottom: '10px',fontSize:{
            xs:'md', sm:'md'
        } }}>
          <Typography variant="body1">{item}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default DetailsList;
