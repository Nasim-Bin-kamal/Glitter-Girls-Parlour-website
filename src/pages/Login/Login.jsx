import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import MyButton from '../../StyledComponent/MyButton';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});


    const handleOnBlur = (e) => {
        const newLoginData = { ...loginData };
        newLoginData[e.target.name] = e.target.value;
        setLoginData(newLoginData);

    }
    console.log(loginData);

    const handleUserLogin = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <Container sx={{ m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ mx: 'auto', my: 10, p: 2, maxWidth: 400, backgroundColor: '#FFF8F5', borderRadius: 3 }}>
                    <Typography variant="h4" sx={{ m: 'auto', pb: 3, textAlign: 'center', color: '#F63E7B' }}>
                        Login Please
                    </Typography>
                    <form onSubmit={handleUserLogin}>
                        <TextField
                            onBlur={handleOnBlur}
                            name="email"
                            type="email"
                            label="Your Email"
                            variant="outlined"
                            fullWidth
                            size="small"
                            margin="dense"
                            required
                            sx={{ backgroundColor: '#fff' }} />

                        <TextField
                            onBlur={handleOnBlur}
                            name="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            fullWidth
                            size="small"
                            margin="dense"
                            required
                            sx={{ backgroundColor: '#fff' }} />

                        <MyButton type="submit" sx={{ my: 2, mx: 'auto', width: '50%', display: 'flex' }}>Login</MyButton>
                    </form>
                    <Box sx={{ mx: 'auto', mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <Typography variant="subtitle2" sx={{ my: 2 }}>Or Login With</Typography>
                        <Button variant="outlined" sx={{ borderRadius: 8, px: 3 }}>
                            <GoogleIcon sx={{ mr: 2 }} />
                            Continue With Google
                        </Button>
                        <Typography variant="body2" sx={{ mt: 2 }}>
                            Don't have an account? <NavLink style={{ color: '#F63E7B' }}
                                to="/register">Create an account</NavLink>
                        </Typography>


                    </Box>
                </Box>
            </Container>
        </div >
    );
};

export default Login;