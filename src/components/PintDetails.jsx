import React from 'react';
import PropTypes from 'prop-types';

function PintDetails(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedKeg.name}</h1>
      <h4><em>{props.selectedKeg.pintsLeft} pints until tapped</em></h4>
      <hr/>
    </div>
  );
}

PintDetails.propTypes = {
  selectedKeg: PropTypes.object
};

export default PintDetails;
