import { AppBar, Toolbar} from '@mui/material';
import '../styles/header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar className='app-bar'>
            <Toolbar className='container'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/login'>Logout</Link>
            </Toolbar>
        </AppBar>
        
    )
}

export default Header;