import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImg from './Asst/background.jpg'; // Import the background image

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Check if the username and password are correct
    if (username === 'arun@gmail.com' && password === '7112') {
      toast.success('Login Successfully.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });

      // Redirect to the home page using Link
    } else {
      // Show an error toast message
      toast.error('Invalid username or password.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }
  };

  const isLoginDisabled = !username || !password;

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="login_page">
        <div className="top-right-corner">
          {/* Use Link component for the back button */}
          <Link to="/">
            <Button type="button" variant="contained" color="primary">
              Back
            </Button>
          </Link>
        </div>
        <h1>Login Page</h1>
        <div className="user_name">
          <TextField
            fullWidth
            type="text"
            label="Email"
            placeholder="Enter Your Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="user_name">
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter Your Password"
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="user_name">
          {/* Use Link component for the login button */}
          <Link to={username === 'arun@gmail.com' && password === '7112' ? '/home' : '#'}>
            <Button type="button" fullWidth onClick={handleLogin} variant="contained" disabled={isLoginDisabled}>
              Login
            </Button>
          </Link>
          <div className="user_name">
            <Button fullWidth color="error" variant="contained">
              Forgot Password
            </Button>
          </div>
        </div>
        <h4>_______Or Login With______</h4>
        <div className="social-icons">
          {/* Round icons for social media */}
          <IconButton component={Link} to="https://mail.google.com/" target="_blank">
            <MailOutlineIcon />
          </IconButton>
          <IconButton component={Link} to="https://fb.com/" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton component={Link} to="https://instagram.com/" target="_blank">
            <InstagramIcon />
          </IconButton>
          <IconButton component={Link} to="https://twitter.com/" target="_blank">
            <TwitterIcon />
          </IconButton>
        </div>
        <h5>don`t have an account ?</h5>
        <Link to='/newaccountcreate'  ><Button color="success" variant="contained" >Sign Up </Button></Link>

      </div>
    </div>
  );
};

export default Login;
