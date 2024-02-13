import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const Homecards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setData(result);
        console.log("results",result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((user) => (
        <Grid item xs={6} key={user.id}>
          <Card>
            <CardContent>
              <h6>Name: {user.name}</h6>
              <h6>Username: {user.username}</h6>
              <h6>Email: {user.email}</h6>
              <h6>Phone: {user.phone}</h6>
              <h6>Adress: {user.address.street}</h6>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Homecards;
