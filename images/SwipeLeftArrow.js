import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function SwipeLeftArrow() {
  return (
    <Svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
   
  >
    <Path
      d="M11 16.25a.74.74 0 0 1-.53-.22L7 12.53a.75.75 0 0 1 0-1.06L10.47 8a.75.75 0 0 1 1.06 1l-3 3 3 3a.75.75 0 0 1 0 1.06.74.74 0 0 1-.53.19ZM16.5 16.25A.74.74 0 0 1 16 16l-3.5-3.5a.75.75 0 0 1 0-1.06L16 8a.75.75 0 0 1 1 1l-3 3 3 3a.75.75 0 0 1-.5 1.25Z"
      fill="#15B293"
    />
  </Svg>
  )
}
