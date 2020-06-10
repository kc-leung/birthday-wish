import React, { Component } from 'react';

import { items } from '../../data/constant';

import './Wishes.scss';

export default class Wishes extends Component {
  render() {
    return (
      <div className="wishesContainer">
        <div className="wishesContent">
          {items.map((data, index) => {
            return (
              <div key={index} className="item">
                <div className="image">{data.picture}</div>
                <div className="description">{data.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
