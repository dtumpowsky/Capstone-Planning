import React from 'react';
import Keg from './Keg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brewery</th>
            <th>Type</th>
            <th>Price</th>
            <th>Alc %</th>
            <th>Pints Left</th>
            <th>
              <Link to="/admin">
                <button type='submit'>Admin</button>
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <td>
            {Object.keys(props.kegList).map(function(kegId) {
              var keg = props.kegList[kegId];
              return <Keg name={keg.name}
                currentRouterPath={props.currentRouterPath}
                onKegSelection={props.onKegSelection}
                key={kegId}
                kegId={kegId}/>;
            })}
          </td>
          <td>
            {Object.keys(props.kegList).map(function(kegId) {
              var keg = props.kegList[kegId];
              return <Keg brewery={keg.brewery}
                currentRouterPath={props.currentRouterPath}
                onKegSelection={props.onKegSelection}
                key={kegId}
                kegId={kegId}/>;
            })}
          </td>
          <td>
            {Object.keys(props.kegList).map(function(kegId) {
              var keg = props.kegList[kegId];
              return <Keg type={keg.type}
                currentRouterPath={props.currentRouterPath}
                onKegSelection={props.onKegSelection}
                key={kegId}
                kegId={kegId}/>;
            })}
          </td>
          <td>
            {Object.keys(props.kegList).map(function(kegId) {
              var keg = props.kegList[kegId];
              return <Keg price={keg.price}
                currentRouterPath={props.currentRouterPath}
                onKegSelection={props.onKegSelection}
                key={kegId}
                kegId={kegId}/>;
            })}
          </td>
          <td>
            {Object.keys(props.kegList).map(function(kegId) {
              var keg = props.kegList[kegId];
              return <Keg alcContent={keg.alcContent}
                currentRouterPath={props.currentRouterPath}
                onKegSelection={props.onKegSelection}
                key={kegId}
                kegId={kegId}/>;
            })}
          </td>
          <td>
            {Object.keys(props.kegList).map(function(kegId) {
              var keg = props.kegList[kegId];
              return <Keg pintsLeft={keg.pintsLeft}
                currentRouterPath={props.currentRouterPath}
                onKegSelection={props.onKegSelection}
                key={kegId}
                kegId={kegId}/>;
            })}
          </td>
        </tbody>
      </table>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string,
  onNewKegCreation: PropTypes.func
};

export default KegList;
