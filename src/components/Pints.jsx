import React from 'react';
import PropTypes from 'prop-types';

function PintsLeft(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedKeg.names}</h1>
      <h4><em>{props.selectedKeg.pintsLeft}</em></h4>
      <hr/>
    </div>
  );
}

PintsLeft.propTypes = {
  selectedKeg: PropTypes.object
};

export default PintsLeft;
