import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { v4 } from 'uuid';
import GoogleMap from './GoogleMap';


class App extends React.Component {

  render() {
    return (
      <div className="container">
        <div className='jumbotron'>
          <Header/>
        </div>
        <div>
          <GoogleMap/>
        </div>
        <div>
          <Footer/>
        </div>
        <Switch>
          <Route exact path='/' />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}


export default App;
