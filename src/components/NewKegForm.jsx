import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props){

  let _name = null;
  let _brewery = null;
  let _type = null;
  let _price = null;
  let _alcContent = null;
  let _pintsLeft = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: _name.value,
      brewery: _brewery.value,
      type: _type.value,
      price: _price.value,
      alcContent: _alcContent.value,
      pintsleft: _pintsLeft.value
    });
    _name.value = '';
    _brewery.value = '';
    _type.value = '';
    _price.value = '';
    _alcContent.value = '';
    _pintsLeft.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brewery'
          placeholder='Brewery'
          ref={(input) => {_brewery = input;}}/>
        <input
          type='text'
          id='type'
          placeholder='Type'
          ref={(input) => {_type = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <input
          type='text'
          id='alcContent'
          placeholder='Alcohol %'
          ref={(input) => {_alcContent = input;}}/>
        <input
          type='text'
          id='pintsLeft'
          placeholder='Pints'
          ref={(input) => {_pintsLeft = input;}}/>
        <button className="btn btn-info"type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
