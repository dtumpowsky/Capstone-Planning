import React from 'react';
import { Link } from 'react-router-dom';

function TableHeader(){
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brewery</th>
            <th>Type</th>
            <th>Price</th>
            <th>Alc %</th>
            <th>Pints Left</th>
            <th>Admin</th>
            <th>
              <Link to="/newkeg">
                <button type='submit'>Add New Keg</button>
              </Link>
            </th>
          </tr>
        </thead>
      </table>  
    </div>
  );
}

export default TableHeader;
