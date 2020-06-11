import React, { Component } from 'react';

import Landing from '../Landing/Landing';
import Wishes from '../Wishes/Wishes';
import Footer from '../Footer/Footer';

import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Landing />
        <Wishes />
        <Footer />
      </div>
    );
  }
}
