import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import PintDetails from './PintDetails';
import { Link } from 'react-router-dom';


function Admin(props){
  let optionalSelectedKegContent = null;
  if (props.selectedKeg != null){
    optionalSelectedKegContent =  <PintDetails selectedKeg={props.kegList[props.selectedKeg]}/>;
  }
  return (
    <div>
      <style global jsx >{`
        body {
          background-image: url('https://i.ytimg.com/vi/l1k8WgxPIFw/maxresdefault.jpg');
          background-repeat: no-repeat;
          background-size: 100% 310%;
        }
      `}</style>
      <h2>Admin</h2>
      <Link to="/newkeg">
        <button className='btn btn-success' type='submit'>Add Keg</button>
      </Link>
      {optionalSelectedKegContent}
      <KegList kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}
        onKegSelection={props.onKegSelection}/>
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string,
  onNewKegCreation: PropTypes.func
};

export default Admin;
