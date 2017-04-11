import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { routeCodes } from '../../routes';

export default class Menu extends Component {

  render() {
    return (
      <div className='Menu'>
        <Link to={ routeCodes.DASHBOARD }>
          Dashboard
        </Link>
        <Link to={ routeCodes.ABOUT }>
          About
        </Link>
        <Link to='404'>
          404
        </Link>
      </div>
    );
  }
}
