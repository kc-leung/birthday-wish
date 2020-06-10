import React, { Component } from 'react';

import { items } from '../../data/constant';

import './Wishes.scss';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        setVisible(entry.isIntersecting);
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`wishesContent fade-in-section ${
        isVisible ? 'is-visible' : ''
      }`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default class Wishes extends Component {
  render() {
    return (
      <div className="wishesContainer">
        {items.map((data, index) => (
          <FadeInSection key={index}>
            {data.switch ? (
              <div className="item">
                <div className="description">{data.description}</div>
                <div className="image">{data.picture}</div>
              </div>
            ) : (
              <div className="item">
                <div className="image">{data.picture}</div>
                <div className="description">{data.description}</div>
              </div>
            )}
          </FadeInSection>
        ))}
      </div>
    );
  }
}
