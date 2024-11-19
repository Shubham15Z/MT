import { Box, Button, TextField, Typography } from '@mui/material';
import '../styles/login.css';
import { useState, useContext } from 'react';
import { IMG_URL } from '../../constants/constant';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: ''
};

const Login = ({isUserAuthenticated}) => {

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState('');

    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
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
        toggleAccount('login')
       } else {
            setError('Something went wrong! please try again later')
       }
    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
    };

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if(response.isSuccess) {
            setError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            
            setAccount({username: response.data.username, name: response.data.name});

            isUserAuthenticated(true);

            navigate('/');
        } else {
            setError('Something went wrong please try again later');
        }
    };

    return (
        <Box className="component">
            <Box>
                <img src={IMG_URL} alt='login' className='image'/>
                {
                    account === 'login' ?
                        <Box className='wrapper'>
                            <TextField variant='standard' value = {login.username} onChange={(e) => onValueChange(e)} name='username' label='Username'/>
                            <TextField variant='standard' value = {login.password} onChange={(e) => onValueChange(e)} name='password' label='Password'/>

                            { error && <Typography className='error-typo'>{error}</Typography>}
                            <Button variant="contained" onClick={() => loginUser()} className='login-button'>Login</Button>
                            <Typography className='typo'>OR</Typography>
                            <Button variant='contained' className='signup-button'
                                onClick={() => toggleSignup()}
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
                                onClick={() => toggleSignup()}
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
