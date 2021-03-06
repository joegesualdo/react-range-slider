import RangeSlider from './../index.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from '@joegesualdo/react-draggable';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minPos: 0,
      maxPos: 60,
    };
  }
  onSlideMin = (pos) => {
    this.setState({
      minPos: pos.value
    })
  }
  onSlideMax = (pos) => {
    this.setState({
      maxPos: pos.value
    })
  }
  render() {
    return (
      <div>
        <RangeSlider
          width={300}
          lineColor='blue'
          leftColor='black'
          rightColor='black'
          onStart={function(){console.log("Started!!!")}}
          onStop={function(){console.log("Stop!!!")}}
          minPosition={this.state.minPos}
          maxPosition={this.state.maxPos}
          onSlideMin ={this.onSlideMin}
          onSlideMax ={this.onSlideMax}
        >
          <div style={
            {
              border: '1px solid #aaa',
              background: '#fff',
              borderRadius: '100%',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              height: 24,
              outline: 'none',
              width: 24,
            }
          }></div>
        </RangeSlider>
      </div>
    )
  }
}

ReactDOM.render(
  <Test />,
  document.querySelector('#app')
);



