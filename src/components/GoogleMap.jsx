import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  textAlign: 'center',
  maxHeight: '90%',
  maxWidth: '85%',
};

class GoogleMap extends React.Component {

  render() {
    return (
      <div>
        <Map google={this.props.google} zoom={14} className='map-styles' style={style}>
          <Marker onClick={this.onMarkerClick} name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCzmdObLsLWto9B5Uy_eiKtlX95gZopT8w')
})(GoogleMap);
