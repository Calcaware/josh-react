import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const RoverDetails = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { rover } = useParams();

  useEffect(() => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-12-3&api_key=DEMO_KEY';
    const formatedUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.toLocaleLowerCase()}/photos?earth_date=${formattedDate}&api_key=DEMO_KEY`
    axios.get(url)
      .then(response => {
        setPhotos(response.data.photos);
      })
      .catch(error => {
        console.error(error);
      });
  }, [selectedDate, rover]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Grid container spacing={2} style={{ padding: 20 }}>
      <Grid item xs={12}>
        <Card sx={{ backgroundColor: 'white', color: '#4b0082' }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {rover}
            </Typography>
            <Typography variant="subtitle1">
              Selected Date: {selectedDate.toISOString().split('T')[0]}
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid container spacing={2} style={{ padding: 20 }}>
                    <Grid item xs={12}>
                    <DatePicker
                        label="Select Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    </Grid>
                </Grid>
            </LocalizationProvider>
            <Button variant="contained" sx={{ marginLeft: 2 }} onClick={() => setSelectedDate(new Date())}>
              Today
            </Button>
          </CardContent>
        </Card>
      </Grid>
      {photos.map(photo => (
        <Grid item xs={12} sm={6} md={4} key={photo.id}>
          <Card sx={{ backgroundColor: 'white', color: '#4b0082' }}>
            <CardContent>
              <img src={photo.img_src} alt={photo.id} style={{ width: '100%' }} />
              <Typography variant="subtitle1">
                Rover: {photo.rover.name}
              </Typography>
              <Typography variant="subtitle1">
                Camera: {photo.camera.full_name}
              </Typography>
              <Typography variant="subtitle1">
                Earth Date: {photo.earth_date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RoverDetails;
