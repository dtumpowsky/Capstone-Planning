import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <style jsx>{`
      div {
        background-color: #A0FEFF;
      }
      div:hover {
        background-color: #FFCCA0;
      }
    `}</style>
      <th>{props.name}</th>
      <td>{props.brewery}</td>
      <td>{props.type}</td>
      <td>${props.price}.00</td>
      <td>{props.alcContent}</td>
      <td>{props.pintsLeft}%</td>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcContent: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired
};

export default Keg;
