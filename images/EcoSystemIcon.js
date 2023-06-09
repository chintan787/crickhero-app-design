import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function EcoSystemIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 0C9.89543 0 9 0.895431 9 2V3C7.34315 3 6 4.34315 6 6V20C6 21.6569 7.34315 23 9 23H15C16.6569 23 18 21.6569 18 20V6C18 4.34315 16.6569 3 15 3V2C15 0.895431 14.1046 0 13 0H11ZM13 3V2H11V3H13ZM10 5H14H15C15.5523 5 16 5.44772 16 6V9H8V6C8 5.44772 8.44772 5 9 5H10Z"
      fill={props.color}
    />
  </Svg>
  )
}
