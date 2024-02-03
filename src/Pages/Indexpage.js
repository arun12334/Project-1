import React from 'react';
import backgroundimage from '../Asst/background1.jpg';
import { Link } from 'react-router-dom';


function Indexpage() {
  return (
    <div className="fullscreen-image-container">
      <div className="text-overlay">
        <h1>Welcome to My Page</h1>
      </div>
      <img src={backgroundimage} alt="Welcome to My Page" className="fullscreen-image" />
      <div className="button-container">
      <Link to='/newaccountcreate'> <button className="create-account-button">Create Account</button></Link>
       <Link to='/login'> <button className="sign-in-button">Sign In</button></Link>
      </div>
    </div>
  );
}

export default Indexpage;
