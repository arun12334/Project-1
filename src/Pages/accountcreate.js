import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImg1 from '../Asst/background2.jpg';

const AccountCreate = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateInputs = () => {
    // Validate first name (at least 3 letters)
    if (firstName.length < 3) {
      toast.error('First name should be at least 3 letters.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return false;
    }

    // Validate last name (at least 1 letter)
    if (lastName.length < 1) {
      toast.error('Last name should be at least 1 letter.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email format.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return false;
    }

    // Validate password (at least 9 characters, one number, one letter, one special character)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
    if (!passwordRegex.test(password)) {
      toast.error('Password must have 8 character 1 special character.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return false;
    }

    // Validate password match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      return false;
    }

    return true;
  };

  const handleAccountCreate = () => {
    // Basic validation
    if (!validateInputs()) {
      return;
    }

    // TODO: Add logic to create account (e.g., API call)

    toast.success('Account created successfully.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  const isCreateAccountDisabled =
    !firstName || !lastName || !email || !password || !confirmPassword;

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImg1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <div className="top-right-corner">
          {/* Use Link component for the back button */}
          <Link to="/">
            <Button type="button"  variant="contained" color="primary">
              Back
            </Button>
          </Link>
        </div>
        
      <div className="create-account-page">
        <h1>Create Account</h1>
        <div className="input-field">
          <TextField
            fullWidth
            type="text"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <TextField
            fullWidth
            type="text"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <TextField
            fullWidth
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <TextField
            fullWidth
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-field">
          <TextField
            fullWidth
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="button-container1">
          <Button
            type="button"
            fullWidth
            onClick={handleAccountCreate}
            variant="contained"
            disabled={isCreateAccountDisabled}
          >
            Create Account
          </Button>
        </div>
        <div className="login-link">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default AccountCreate;
