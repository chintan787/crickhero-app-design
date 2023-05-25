import React from 'react';
import Svg, { Path } from "react-native-svg"

export default function FeedIcon(props) {
  return (
<Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M6 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM6 10a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 13a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7ZM6 18a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Z"
      fill={props.color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4Zm3-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
      fill={props.color}
    />
  </Svg>
  )
}
