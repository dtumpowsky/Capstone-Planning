import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

export class Container extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    };
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiComponent({
  apiKey: AIzaSyCzmdObLsLWto9B5Uy_eiKtlX95gZopT8w
})(Container);
