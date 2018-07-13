import React from 'react';
import ReactDOM from 'react-dom';
import apiKey from './../../.env';
import Map from './Map.jsx';


class GoogleApiComponent extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    };
    return (
      <div style={style}>
        <Map google={this.props.google}
        />
      </div>
    );
  }
}

export default GoogleApiComponent({
  apiKey: apiKey
})(Container);
