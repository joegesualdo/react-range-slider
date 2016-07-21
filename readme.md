## react-range-slider [![Build Status](https://travis-ci.org/joegesualdo/react-range-slider.svg?branch=master)](https://travis-ci.org/joegesualdo/react-range-slider)
> A range slider implemented in React

## Install
```
$ npm install --save @joegesualdo/react-range-slider
```

![react-range-slider-demo](https://github.com/joegesualdo/react-range-slider/raw/master/demo.gif)

## Usage
```javascript
import RangeSlider from '@joegesualdo/react/range-slider'

<RangeSlider
  width={300}
  lineColor='blue'
  leftColor='black'
  rightColor='black'
  onStart={function(){console.log("Started!!!")}}
  onStop={function(){console.log("Stop!!!")}}
  onSlideMin ={function(pos){console.log(pos)}}
  onSlideMax ={function(pos){console.log(pos)}}
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
```

## Test
```
$ npm test
```
## Build
```
$ npm run build
```

## Related
- [react-slider](https://github.com/joegesualdo/react-slider) - A slider

## License
MIT © [Joe Gesualdo]()
