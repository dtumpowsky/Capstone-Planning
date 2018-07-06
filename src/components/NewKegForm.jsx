import React from 'react';

function NewKegForm(){

  let _name = null;
  let _brewery = null;
  let _type = null;
  let _price = null;
  let _alcContent = null;
  let _pintsLeft = 124;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: _name.value,
      brewery: _brewery.value,
      type: _type.value,
      price: _price.value,
      alcContent: _alcContent.value,
      pintsleft: 124,
    });
    _name.value;
    _brewery.value;
    _type.value;
    _price.value;
    _alcContent.value;
  }

  return (
    <div>
      <form>
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
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
