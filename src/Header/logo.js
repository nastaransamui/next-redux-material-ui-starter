import React from 'react';

const LogoSvg = props => {
  return(
    <svg
    id="Layer_1"
    enableBackground="enable-background:new 0 0 481.6 503.6;"
    viewBox="0 0 481.6 503.6"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path fill={props.downColor} d="M469.4,292.9L270.9,491.4c-16.3,16.3-42.9,16.3-59.2,0L13.3,292.9C-3,276.6-3,250,13.3,233.7L211.7,35.3
		c16.3-16.3,42.9-16.3,59.2,0l198.4,198.4C485.7,250,485.7,276.6,469.4,292.9z"/>
    <path fill={props.MainColor} d="M468.3,269.9L269.9,468.3c-16.3,16.3-42.9,16.3-59.2,0L12.2,269.9c-16.3-16.3-16.3-42.9,0-59.2L210.6,12.2
		c16.3-16.3,42.9-16.3,59.2,0l198.4,198.4C484.6,226.9,484.6,253.6,468.3,269.9z"/>
    <g>
      <path 
      fill={props.alphabet} 
      stroke={props.alphabet}
      strokeWidth={20}
      strokeMiterlimit={10}
      d="M114.9,339.3V183h19.5v139H207v17.3H114.9z"/>
      <path 
      fill={props.alphabet} 
      stroke={props.alphabet}
      strokeWidth={20}
      strokeMiterlimit={10}
      d="M248,289.6v-79.2h18.5v78.1c0,23,12.9,37.5,36.8,37.5c23.9,0,37-14.5,37-37.5v-78.1h18.5v79.2
			c0,31.9-18.8,52.5-55.6,52.5C266.5,342.1,248,321.3,248,289.6z"/>
    </g>
    </g>
  </svg>

  )
};

export default LogoSvg;