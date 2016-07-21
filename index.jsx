import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
import Slider from '@joegesualdo/react-slider';

const propTypes = {
  onStop: React.PropTypes.func,
  onStart: React.PropTypes.func,
  width: React.PropTypes.number,
  lineColor: React.PropTypes.string,
  onSlide: React.PropTypes.func,
  onSlideMin: React.PropTypes.func,
  onSlideMax: React.PropTypes.func,
  leftColor: React.PropTypes.string,
  rightColor: React.PropTypes.string,
};

const defaultProps = {
  width: 1000,
  lineColor: 'black',
  onSlide() { },
  onStart() { },
  onStop() { },

};

class TestComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Slider {...this.props} range>
        {this.props.children}
      </Slider>
    );
  }
}

TestComponent.propTypes = propTypes;
TestComponent.defaultProps = defaultProps;

export default TestComponent;
