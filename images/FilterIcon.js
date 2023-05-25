import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function FilterIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 1920 1920"
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="m0 .011 741.97 984.808v673.566l502.665 251.332V984.82l675.332-896.544-88.154-66.308-697.508 925.891v783.345L852.301 1590.2V947.858L221.322 110.341h1262.289V.011z"
      fillRule="evenodd"
    />
  </Svg>
  )
}
