import React from 'react';

function NewKegForm(){
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

export default NewKegForm;
