import React from 'react';
import { fetchNearbyTrails } from './../actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function TrailSearch({ dispatch }){
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(fetchNearbyTrails(input.value.trim()));

        console.log('Searched City:');
        console.log(input.value.trim());

        input.value = '';
      }}>
        <input placeholder="Set Distance" ref={node => {
          input = node;
        }}></input>
        <button>Search</button>
      </form>
    </div>
  );
}

TrailSearch.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(TrailSearch);
