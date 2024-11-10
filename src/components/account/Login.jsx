import { Box, Button, TextField, Typography } from '@mui/material';
import '../styles/login.css';
import { useState } from 'react';
import { IMG_URL } from '../../constants/constant';

const Login = () => {

    const [account, setAccount] = useState('login');

    const setLoginAccount = () => {
        account === 'signup' ? setAccount('login') : setAccount('signup');
    }

    return (
        <Box className="component">
            <Box>
                <img src={IMG_URL} alt='login' className='image'/>
                {
                    account === 'login' ?
                        <Box className='wrapper'>
                            <TextField variant='standard' label='Username'/>
                            <TextField variant='standard' label='Password'/>
                            <Button variant="contained" className='login-button'>Login</Button>
                            <Typography className='typo'>OR</Typography>
                            <Button variant='contained' className='signup-button'
                                onClick={() => setLoginAccount()}
                            >
                                Create an Account?
                            </Button>
                        </Box>
                    :
                        <Box className='wrapper'>
                            <TextField variant='standard' label='Enter Name'/>
                            <TextField variant='standard' label='Enter Username'/>
                            <TextField variant='standard' label='Enter Password'/>
                            <Button variant="contained" className='signup-button'>SignUp</Button>
                            <Typography className='typo'>OR</Typography>
                            <Button variant='contained' className='login-button'
                                onClick={() => setLoginAccount()}
                            >
                                Already have an Account?
                            </Button>
                        </Box>
                }
            </Box>
        </Box>
    )
}

export default Login;
