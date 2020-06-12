import React, { Component } from 'react';
import collageImg from '../../assets/collage.jpg';
import './Wishes.scss';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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
  constructor(props) {
    super(props);

    this.state = {
      activate: false,
      fireworks: false,
      buttonMove: false,
    };

    this.buttonStyle = {};
  }

  onClickButton = () => {
    this.setState({
      activate: true,
      fireworks: true,
    });

    setTimeout(() => {
      this.setState({
        fireworks: false,
      });
    }, 20000);
  };

  buttonMove = () => {
    this.setState({
      buttonMove: !this.state.buttonMove,
    });

    this.buttonStyle = {
      left: Math.random() * 400 + 'px',
      right: Math.random() * 400 + 'px',
      transition: 'all .1s',
    };
  };

  render() {
    return (
      <div className="wishesContainer">
        {this.state.fireworks === true && (
          <div class="pyro">
            <div class="before"></div>
            <div class="after"></div>
          </div>
        )}

        <FadeInSection>
          <div className="title">
            <span>
              I want to take this opportunity to ask you a question...
            </span>
            <span>Would you like to be my Girlfriend???</span>
          </div>
          <div className="buttonContainer">
            <button className="big-button" onClick={() => this.onClickButton()}>
              YES
            </button>
            <button
              ref={this.buttonRef}
              className="big-button"
              style={this.buttonStyle}
              onMouseOver={() => {
                this.buttonMove();
              }}
            >
              NO
            </button>
          </div>
        </FadeInSection>

        {this.state.activate === true && (
          <div className="contentContainer">
            <div className="imageBox">
              <img src={collageImg} className="image" alt="" />
            </div>
            <div className="description">
              I want to spend the rest of my life with you because each day
              beside you is a day of joy and excitement. Thank you for being
              part of my life Erika 😊 I Love You 😍
            </div>
          </div>
        )}
      </div>
    );
  }
}
