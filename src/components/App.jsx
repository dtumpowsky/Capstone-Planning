import React from 'react';
import Header from './Header';
import Cache from './ScriptCache';
import GoogleApi from './GoogleApi';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Admin from './Admin';
import { v4 } from 'uuid';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  handleAddingNewKegToList(newKeg){
    var newKegId = v4();
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(kegId){
    this.setState({selectedKeg: kegId});
  }

  render() {
    return (
      <div className="container">
        <style global jsx >{`
        body {
          font-family: Helvetica;
          background-image: url('https://i.ytimg.com/vi/l1k8WgxPIFw/maxresdefault.jpg');
          background-repeat: no-repeat;
          background-size: 100% 390%;
        }
        a {
          color: #888;
          text-decoration: none;
        }
        table{
          color: white;
          font-size: 130%;
        }
        h2{
          color: white;
        }
      `}</style>
        <div className='jumbotron'>
          <Header/>
        </div>
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/admin' render={(props)=><Admin kegList={this.state.masterKegList}         currentRouterPath={props.location.pathname}
            onKegSelection={this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg}/>} />
          <Route path='/newkeg'render={()=><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />
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

Admin.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default App;
