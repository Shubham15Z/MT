import { Box, Button, TextField, Typography } from '@mui/material';
import '../styles/login.css';
import { useState } from 'react';
import { IMG_URL } from '../../constants/constant';
import { API } from '../../service/api';

const signupInitialValues = {
    name: '',
    username: '',
    password: ''
};

const Login = () => {

    const [account, setAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState('');

    const setLoginAccount = () => {
        account === 'signup' ? setAccount('login') : setAccount('signup');
    };

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value})
        // console.log(e.target.name,e.target.value);
    };

    const signupUser = async () => {
       let response = await API.userSignup(signup);
       if(response.isSuccess) {
        setError('');
        setSignup(signupInitialValues);
        setLoginAccount('login')
       } else {
            setError('Something went wrong! please try again later')
       }
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

                            { error && <Typography className='error-typo'>{error}</Typography>}
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
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='name' label='Enter Name'/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username' label='Enter Username'/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password' label='Enter Password'/>

                             { error && <Typography className='error-typo'>{error}</Typography>}   
                            <Button onClick={()=> signupUser()} variant="contained" className='signup-button'>SignUp</Button>
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
