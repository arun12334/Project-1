import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import Header from './Header';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Homecards from './sub-pages/Homecards';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function Home() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();



  return (
    <div >
      <Header />

      <Card sx={{ minWidth: 275 }} className='dashboard'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <div className='dashboard-content'>
              <div className='dashboard-text'>
                <h1 sx={{ fontSize: 20, verticalAlign: 'text-bottom' }}>Dashboard</h1>
              </div>
              <div className='dashboard-icons'>
                <EventIcon sx={{ fontSize: 20, verticalAlign: 'text-bottom', color: 'blue' }} /> {formattedDate}
                <AccessTimeIcon sx={{ fontSize: 20, verticalAlign: 'text-bottom', marginLeft: 1, color: 'blue' }} /> {formattedTime}
              </div>
            </div>
          </Typography>
        </CardContent>
      </Card>
 <div className='name_datas'>
       <Homecards />
       </div>
    </div>
  
  );
}

export default Home;
