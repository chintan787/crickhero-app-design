import React from 'react';
import Svg, { G, Path } from "react-native-svg";

export default function ShareIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.color}
  >
    <G data-name="Layer 2">
      <Path fill="none" d="M0 0h48v48H0z" data-name="invisible box" />
      <Path
        d="m31.2 14.2 9.8 9.9-9.8 9.8v-7.1L27 27c-6.8.3-12 1-16.1 2.4 3.6-3.8 9.3-6.8 16.7-7.5l3.6-.3v-7.4M28.3 6a1.2 1.2 0 0 0-1.1 1.3v10.6C12 19.4 2.2 29.8 2 40.3c0 .6.2 1 .6 1s.7-.3 1.1-1.1c2.4-5.4 7.8-8.5 23.5-9.2v9.7a1.2 1.2 0 0 0 1.1 1.3.9.9 0 0 0 .8-.4l16.5-16.5a1.5 1.5 0 0 0 0-2L29.1 6.4a.9.9 0 0 0-.8-.4Z"
        data-name="Q3 icons"
      />
    </G>
  </Svg>
  )
}
