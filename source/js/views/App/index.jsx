import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from 'components/Global/Menu';
import Dashboard from 'views/Dashboard';
import About from 'views/About';
import NotFound from 'views/NotFound';
import { routeCodes } from '../../routes';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }


  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <Menu />

        <div className='Page'>
          <Route exact path={ routeCodes.DASHBOARD } component={ Dashboard } />
          <Route path={ routeCodes.ABOUT } component={ About } />
          <Route path='*' component={ NotFound } />
        </div>
      </div>
    );
  }
}
