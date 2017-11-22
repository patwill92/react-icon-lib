import React from 'react';

const style = {
  height: '1em',
  width: '1em',
  position: 'absolute',
  bottom: '-0.125em'
};

const svgStyle = {
  display: 'inline-flex',
  alignSelf: 'center',
  position: 'relative',
  height: '1em',
  width: '1em'
};

const MyIcon = props => {
  let icon = require('../../icons')[props.name];
  let {name, path, viewBox} = icon;
  let size = viewBox.split(' ');
  let width = size[2].slice(0, 2);
  let height = size[3].slice(0, 2);
  return (
    <span id='svg-icon' style={svgStyle}>
      <svg style={style} id={name} width={props.size ? width * (props.size / height) : width}
           height={props.size ? props.size : height} xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
        <path fill={props.color ? props.color : '#333'} d={path}/>
      </svg>
    </span>
  )
};

export default MyIcon