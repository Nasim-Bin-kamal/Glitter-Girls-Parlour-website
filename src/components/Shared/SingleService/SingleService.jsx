import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const SingleService = ({service}) => {
    const{serviceName,price,image,desc}= service || {};
    const style={
        margin:'0px auto',
        padding:'30px',
        display:"flex",
        flexDirection:'column',
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:"#fff",

    }
    return (
            <Grid item xs={12} md={6} lg={4}>
                <Paper elevation={2} style={style}>
                    <img src={image} alt="" width="25%"/>
                    <Typography variant="h6" sx={{py:1}}>
                        {serviceName}
                    </Typography>
                    <Typography variant="subtitle1" sx={{color:'#F63E7B',fontWeight:700}}>
                        ${price}
                    </Typography>
                    <Typography variant="body">
                        {desc}
                    </Typography>
                </Paper>
            </Grid>    
    );
};

export default SingleService;