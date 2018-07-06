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
    _name.value;
    _brewery.value;
    _type.value;
    _price.value;
    _alcContent.value;
    _pintsLeft.value;
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer name'/>
        <input
          type='text'
          id='brewery'
          placeholder='Brewery'/>
        <input
          type='text'
          id='type'
          placeholder='Type'/>
        <input
          type='text'
          id='price'
          placeholder='Price'/>
        <input
          type='text'
          id='alcContent'
          placeholder='Alcohot %'/>
        <input
          type='text'
          id='pintsLeft'
          placeholder='Pints in Keg'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
