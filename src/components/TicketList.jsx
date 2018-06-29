import React from 'react';
import Ticket from './Ticket';

var masterKegList = [
  {
    name: 'Wonderland Trail',
    brewery: 'Two Beers',
    type: 'IPA',
    price: '$7.00',
    alcContent: '8.0%',
    pintsLeft: 124
  },
  {
    name: 'Tipsy Toboggan',
    brewery: 'Two Beers',
    type: 'Winter Ale',
    price: '$9.00',
    alcContent: '6.50%',
    pintsLeft: 124
  },
  {
    name: 'Wonderland Trail',
    brewery: 'Two Beers',
    type: 'IPA',
    price: '$7.00',
    alcContent: '8.0%',
    pintsLeft: 124
  }
];

function KegList(){
  return (
    <div>
      <hr/>
      {masterTicketList.map((Keg, index) =>
        <Ticket name={keg.name}
          brewery={keg.brewery}
          type={keg.type}
          price={keg.price}
          alcContent={keg.alcContent}
          pintsLeft={keg.pintsLeft}
          key={index}/>
      )}
    </div>
  );
}

export default KegList;
