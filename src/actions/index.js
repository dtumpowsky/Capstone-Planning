import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export function fetchNearbyTrails(lat, long, dist) {
  return function (dispatch) {
    const localSongId = v4();
    lat = lat.replace(' ', '_');
    long = long.replace(' ', '_');
    dist = dist.replace(' ', '_');
    return fetch('https://www.mtbproject.com/data/get-trails?lat=' + lat + '&lon=' + long + '&maxDistance=' + dist + '&key=200318272-266e9e8a35469a0b10d3ac176dbbe112').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log('CHECK OUT THIS SWEET API RESPONSE:', json)
    });
  };
}
