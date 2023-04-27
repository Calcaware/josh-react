import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const RoverListing = () => {
  const [rovers, setRovers] = useState([]);

  useEffect(() => {
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=DEMO_KEY')
      .then(response => {
        setRovers(response.data.rovers);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Grid container spacing={2} style={{ padding: 20 }}>
      {rovers.map(rover => (
        <Grid item xs={12} sm={6} md={4} key={rover.id}>
          <Card sx={{ backgroundColor: 'white', color: '#4b0082' }}>
            <CardContent>
              <Typography variant="h5" component="h2">
              <a href={`/rover/details/${rover.name}`}>{rover.name}</a>
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', display: 'inline-flex' }}>
                Landing Date: &nbsp;
              </Typography>
              <Typography variant="subtitle1" sx={{ display: 'inline-flex' }}>
                {rover.landing_date}
              </Typography>
              <br />
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', display: 'inline-flex' }}>
                Launch Date: &nbsp;
              </Typography>
              <Typography variant="subtitle1" sx={{ display: 'inline-flex' }}>
                {rover.launch_date}
              </Typography>
              <br />
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', display: 'inline-flex'  }}>
                Total Photos: &nbsp;
              </Typography>
              <Typography variant="subtitle1" sx={{ display: 'inline-flex' }}>
                {rover.total_photos}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Cameras:
              </Typography>
              <Typography variant="subtitle1">
                {rover.cameras.map(camera => camera.full_name).join(', ')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RoverListing;
