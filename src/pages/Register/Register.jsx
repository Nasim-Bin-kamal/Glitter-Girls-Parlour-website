import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MyButton from '../../StyledComponent/MyButton';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <Container sx={{ m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ mx: 'auto', my: 10, p: 2, maxWidth: 400, backgroundColor: '#FFF8F5', borderRadius: 3 }}>
                    <Typography variant="h4" sx={{ m: 'auto', pb: 3, textAlign: 'center', color: '#F63E7B' }}>
                        Register Please
                    </Typography>
                    <form>
                        <TextField name="email" id="outlined-basic" label="Your Email" variant="outlined" fullWidth size="small" margin="dense" sx={{ backgroundColor: '#fff' }} />
                        <TextField name="password" id="outlined-basic" label="Password" variant="outlined" fullWidth size="small" margin="dense" sx={{ backgroundColor: '#fff' }} />
                        <TextField name="password2" id="outlined-basic" label="Confirm Password" variant="outlined" fullWidth size="small" margin="dense" sx={{ backgroundColor: '#fff' }} />
                        <MyButton sx={{ my: 2, mx: 'auto', width: '50%', display: 'flex' }}>Register</MyButton>
                    </form>
                    <Box sx={{ mx: 'auto', mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant="subtitle2" sx={{ my: 2 }}>Or Register With</Typography>
                        <Button variant="outlined" sx={{ borderRadius: 8, px: 3 }}>
                            <GoogleIcon sx={{ mr: 2 }} />
                            Continue With Google
                        </Button>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Already have an account? <NavLink style={{ color: '#F63E7B' }} to="/login">Login</NavLink>
                        </Typography>


                    </Box>
                </Box>
            </Container>
        </div >
    );
};

export default Register;