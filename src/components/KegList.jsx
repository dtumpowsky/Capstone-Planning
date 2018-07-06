import React from 'react';
import Keg from './Keg';
import { Link } from 'react-router-dom';

var masterKegList = [
  {
    name: 'Wonderland Trail',
    brewery: 'Two Beers',
    type: 'IPA',
    price: 7.00,
    alcContent: 8.0,
    pintsLeft: 124
  },
  {
    name: 'Tipsy Toboggan',
    brewery: 'Two Beers',
    type: 'Winter Ale',
    price: 9.00,
    alcContent: 6.50,
    pintsLeft: 124
  },
];

function KegList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.kegList).map(function(kegId) {
        var keg = props.kegList[kegId];
        return <Keg names={keg.names}
          location={keg.location}
          issue={keg.issue}
          formattedWaitTime={keg.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={kegId}
          onKegSelection={props.onKegSelection}
          kegId={kegId}/>;
      })}
    </div>
  );
}
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
          return <Keg names={keg.name}
            location={keg.brewery}
            issue={keg.type}
            price={keg.price}
            price={keg.alcContent}
            price={keg.price}
            currentRouterPath={props.currentRouterPath}
            key={kegId}
            onKegSelection={props.onKegSelection}
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
  kegId: PropTypes.string.isRequireds
};

export default KegList;
