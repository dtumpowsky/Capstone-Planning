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
      price: '$' + _price.value,
      alcContent: _alcContent.value + '%',
      pintsLeft: _pintsLeft.value
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
      <style global jsx >{`
        body {
          background-image: url('https://i.ytimg.com/vi/l1k8WgxPIFw/maxresdefault.jpg');
          background-repeat: no-repeat;
          background-size: 100% 300%;
        }

        input {
          width: 300px;
          height: 40px;
        }
      `}</style>
      <form onSubmit={handleNewKegFormSubmission}>
        <div>
          <input
            type='text'
            id='name'
            placeholder='Beer name'
            required
            ref={(input) => {_name = input;}}/>
        </div>
        <div>
          <input
            type='text'
            id='brewery'
            placeholder='Brewery'
            required
            ref={(input) => {_brewery = input;}}/>
        </div>
        <div>
          <input
            type='text'
            id='type'
            placeholder='Type'
            required
            ref={(input) => {_type = input;}}/>
        </div>
        <div>
          <input
            type='text'
            id='price'
            placeholder='Price'
            required
            ref={(input) => {_price = input;}}/>
        </div>
        <div>
          <input
            type='text'
            id='alcContent'
            placeholder='Alcohol %'
            required
            ref={(input) => {_alcContent = input;}}/>
        </div>
        <div>
          <input
            type='text'
            id='pintsLeft'
            placeholder='Pints'
            required
            ref={(input) => {_pintsLeft = input;}}/>
          <div>
            <button className="btn btn-success"type='submit'>Add Keg</button>
          </div>
        </div>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
