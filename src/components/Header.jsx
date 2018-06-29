import React from 'react';
import { Link } from 'react-router-dom';
import helpIcon from '../assets/images/help-icon.png';

function Header(){
  return (
    <div>
      <h1>Tap Room</h1>
      <Link to="/">Home</Link> | <Link to="/newkeg">Add New Keg</Link>
    </div>
  );
}

export default Header;
