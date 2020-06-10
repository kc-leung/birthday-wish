import React, { Component } from 'react';

import { items } from '../../data/constant';
import video from '../../assets/test.mp4';

import './Landing.scss';

export default class Landing extends Component {
  render() {
    return (
      <div className="landingContainer">
        <div className="contentContainer">
          <video
            className="video"
            src={video}
            autoPlay={true}
            controls={true}
          />
          {items.map((data, index) => {
            return (
              <div className="itemContainer">
                {data.switch ? (
                  <div className="item" key={index}>
                    <div className="description">{data.description}</div>
                    <div className="image">{data.picture}</div>
                  </div>
                ) : (
                  <div className="item" key={index}>
                    <div className="image">{data.picture}</div>
                    <div className="description">{data.description}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
