import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import MyButton from '../../../StyledComponent/MyButton';

const TopBanner = () => {
    return (
        <div style={{backgroundColor:'#FFF8F5'}}>
            <Container>
                <Grid container spacing={2} sx={{mx:'auto',alignItems:'center'}}>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{m:'auto',p:3}}>
                        <Typography variant="h2" sx={{lineHeight:'5rem',fontWeight:900}}>
                        BEAUTY SALON FOR EVERY WOMEN
                        </Typography>
                        <Typography variant="body1" sx={{my:3, color:'text.secondary'}}>
                        At the Beauty Parlour, we believe in beauty with a conscience. We have created a salon that offers the highest quality hair services in a setting that is healthier for the environment, our guests and our staff.
                        </Typography>
                        <MyButton >Get an Appointment</MyButton>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{m:'auto',p:3}}>
                        <img src="https://i.ibb.co/gMV2mMp/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beau.png" alt="" width="100%" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default TopBanner;