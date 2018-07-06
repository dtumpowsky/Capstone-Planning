import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Tap Room</h1>
      <Link to="/">Home</Link>
      <button className='btn btn-success' type='submit'>jfdk</button>
    </div>
  );
}

export default Header;
