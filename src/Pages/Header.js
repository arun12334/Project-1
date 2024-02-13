import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import logo from '../Asst/logo.png'

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className='header'>
        <div className='logo'>
        <img src={logo} alt="Logo" ></img>
        </div>
        <div className='head_page'>
      <div className='pages'>
        <Button component={Link} to="/home" className={isActive('/home')}>
          Home
        </Button>
        <Button component={Link} to="/imports" className={isActive('/imports')}>
          Imports
        </Button>
        <Button component={Link} to="/exports" className={isActive('/exports')}>
          Exports
        </Button>
        <Button component={Link} to="/masters" className={isActive('/masters')}>
          Masters
        </Button>
        <Button component={Link} to="/"  >
          Logout
        </Button>
      </div>
      </div>
    </div>
  );
}

export default Header;
