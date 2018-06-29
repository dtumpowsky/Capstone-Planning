import React from 'react';
import Keg from './Keg';

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
  {
    name: 'Wonderland Trail',
    brewery: 'Two Beers',
    type: 'IPA',
    price: 7.00,
    alcContent: 8.0,
    pintsLeft: 124
  }
];

function KegList(){
  return (
    <div>
      <table>
        <tbody>
          {masterKegList.map((keg, index) =>
            <Keg name={keg.name}
              brewery={keg.brewery}
              type={keg.type}
              price={keg.price}
              alcContent={keg.alcContent}
              pintsLeft={keg.pintsLeft}
              key={index}/>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default KegList;
