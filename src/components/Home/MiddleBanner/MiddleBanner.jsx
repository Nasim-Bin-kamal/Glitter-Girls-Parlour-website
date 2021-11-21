import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const MiddleBanner = () => {
    const style = {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor:'#FFF8F5'

    }
    return (
        <div style={style}>
            <Container>
                <Grid container spacing={2} sx={{mx:'auto', alignItems:'center'}}>
                    <Grid item xs={12} md={6} lg={6} sx={{mx:'auto',p:3}}>
                        <img src="https://i.ibb.co/f2Swx4n/engin-akyurt-g-m8-EDc4-X6-Q-unsplash-1.png" alt="" width="100%"/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} sx={{mx:'auto',p:3}}>
                        <Typography variant="h4" sx={{fontWeight:500}}>
                        Let us handle your skin <span style={{color:'#F63E7B'}}>Professionally</span>
                        </Typography>
                        <Typography variant="body1" sx={{color:'text.secondary',py:3}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa illum, velit vel aperiam quos! Incidunt itaque porro voluptas illum, laborum corporis quisquam voluptatum quidem aut quia fuga quam facilis 
                        </Typography>
                        <Grid container spacing={5}>
                            <Grid item>
                                <Typography variant="h4" sx={{color:'#F63E7B'}}>500+</Typography>
                                <Typography variant="subtitle1" sx={{fontWeight:500}}>Happy Customer</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h4" sx={{color:'#F63E7B'}}>16+</Typography>
                                <Typography variant="subtitle1" sx={{fontWeight:500}}>Total Service</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default MiddleBanner;