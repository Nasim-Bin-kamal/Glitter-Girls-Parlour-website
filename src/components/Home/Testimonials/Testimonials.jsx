import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import SingleTestimonial from '../../Shared/SingleTestimonial/SingleTestimonial';


const reviews = [
    {
        image: "https://i.ibb.co/6r5P3ZJ/Ellipse-90.png",
        name: "Nash Patrik",
        designation: "CEO, Manpol",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
        rating: 4
    },
    {
        image: "https://i.ibb.co/GkL35xk/Ellipse-91.png",
        name: "Edward Nash",
        designation: "MD, Manpol",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
        rating: 3
    },
    {
        image: "https://i.ibb.co/rsg8QZ9/Ellipse-92.png",
        name: "Hellen Lowe",
        designation: "HR, Manpol",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
        rating: 5
    }
];


const Testimonials = () => {
    return (
        <div>
            <Container sx={{ my: 10 }}>
                <Typography variant="h4" sx={{ pb: 5, textAlign: 'center', fontWeight: 500 }}>Testimonials</Typography>
                <Grid container spacing={4} sx={{ mb: 5 }}>
                    {
                        reviews?.map((review, i) => <SingleTestimonial key={i} review={review} />)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Testimonials;