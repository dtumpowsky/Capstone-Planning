import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Cache from './GoogleMaps/ScriptCache';
import GoogleApi from './GoogleMaps/GoogleApi';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import PropTypes from 'prop-types';
import Moment from 'moment';
import Admin from './Admin';
import { v4 } from 'uuid';


class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className='jumbotron'>
          <Header/>
        </div>
        <Switch>
          <Route exact path='/' />
          <Route component={Error404} />
        </Switch>
        <div style={{margin: '19px auto 0', width: 142}}>
          <a href="https://medium.com/" target="_blank">
            <div className="box">
            </div>
          </a>
        </div>
        <div>
          <Footer/>
        </div>

      </div>
    );
  }
}

export default App;
