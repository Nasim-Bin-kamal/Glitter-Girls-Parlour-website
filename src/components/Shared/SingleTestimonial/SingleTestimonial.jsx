import { Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';



const SingleTestimonial = ({ review }) => {
    const { image, name, designation, desc, rating } = review || {};

    return (
        <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ mx: 'auto', p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={image} alt="" width="25%" />
                    <Box sx={{ px: 2 }}>
                        <Typography variant="h6">{name}</Typography>
                        <Typography variant="subtitle2">{designation}</Typography>
                    </Box>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', py: 2 }}>
                    {desc}
                </Typography>
                <Rating value={rating} readOnly />
            </Paper>
        </Grid>
    );
};

export default SingleTestimonial;