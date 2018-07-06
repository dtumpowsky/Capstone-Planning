import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import KegDetail from './PintsLeft';


function Admin(props){
  let optionalSelectedKegContent = null;
  if (props.selectedKeg != null){
    optionalSelectedKegContent =  <PintsLeft selectedKeg={props.kegList[props.selectedKeg]}/>;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedKegContent}
      <KegList kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}
        onKegSelection={props.onKegSelection} />
    </div>
  );
}

Admin.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string
};

export default Admin;
