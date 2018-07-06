import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import NewKegControl from './NewKegControl';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Admin from './Admin';
import { v4 } from 'uuid';

class App() extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  handleAddingNewTicketToList(newTicket){
    var newTicketId = v4();
    var newMasterTicketList = Object.assign({}, this.state.masterTicketList, {
      [newTicketId]: newTicket
    });
    newMasterTicketList[newTicketId].formattedWaitTime = newMasterTicketList[newTicketId].timeOpen.fromNow(true);
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleChangingSelectedTicket(ticketId){
    this.setState({selectedTicket: ticketId});
  }

  render() {
    return (
      <div className="container">
        <style global jsx >{`
          body {
            font-family: Helvetica;
          }
          a {
            color: #888;
            text-decoration: none;
          }
        `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' component={KegList} />
          <Route path='/newkeg'render={()=><NewTicketControl onNewKegCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />
        </Switch>
        <div style={{margin: '19px auto 0', width: 142}}>
          <a href="https://medium.com/" target="_blank">
            <div className="box">
            </div>
          </a>
        </div>
      </div>
    );
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func;
}

export default App;
