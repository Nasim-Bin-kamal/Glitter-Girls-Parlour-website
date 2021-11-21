import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MyButton from '../../../StyledComponent/MyButton';
import SingleService from '../../Shared/SingleService/SingleService';
import services from './TopServicesData';

const TopServices = () => {
    return (
        <div>
             <Container sx={{py:5}}>
                 <Typography variant="h4" sx={{mx:'auto', py:3, textAlign:'center'}}>
                     Our Awesome <span style={{color:'#F63E7B'}}>Services</span>
                 </Typography>
                 <Grid container spacing={4} sx={{ py:5}}>
                     {
                         services?.map((service,i)=><SingleService key={i} service={service} />)
                     }
                     
                 </Grid>
                 <Box sx={{pb:5,display:'flex', alignItems:'center',justifyContent:'center'}}>
                 <MyButton>Explore More</MyButton>
                 </Box>
             </Container>
        </div>
    );
};

export default TopServices;