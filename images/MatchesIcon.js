import React from 'react';
import Svg, { Path } from "react-native-svg";

export default function MatchesIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    xmlSpace="preserve"
    fill={props.color}
  >
    <Path d="M79.55 48.1h-15.6V48c-13.2 0-24 10.8-24 24v328h15.6V72.1c0-4.8 3.6-8.4 8.4-8.4h15.6c4.8 0 8.4 3.6 8.4 8.4V400h15.6V72.1c0-13.2-10.8-24-24-24zM336.05 48.1h-16.8V48c-13.2 0-24 10.8-24 24v328h16.8V72.1c0-4.8 2.4-8.4 7.2-8.4h16.8c3.6 0 7.2 3.6 7.2 8.4V400h16.8V72.1c0-13.2-10.8-24-24-24zM207.75 48.1h-15.6V48c-13.2 0-24 10.8-24 24v328h15.6V72.1c0-4.8 3.6-8.4 8.4-8.4h15.6c4.8 0 8.4 3.6 8.4 8.4V400h15.6V72.1c0-13.2-10.8-24-24-24zM64.05 32.4h24v7.2c0 4.8 3.6 8.4 8.4 8.4h79.1c4.8 0 8.4-3.6 8.4-8.4v-7.2h32.4v7.2c0 4.8 3.6 8.4 7.2 8.4h80.3c4.8 0 8.4-3.6 8.4-8.4v-7.2h24c10.8 0 10.8-16.8 0-16.8h-24V8.4c0-4.8-3.6-8.4-8.4-8.4h-80.3c-3.6 0-7.2 3.6-7.2 8.4v7.2h-32.4V8.4c0-4.8-3.6-8.4-8.4-8.4h-80.3c-3.6 0-7.2 3.6-7.2 8.4v7.2h-25.2c-10.8 1.2-9.6 16.8 1.2 16.8zm168-16.8h63.5v16.8h-63.5V15.6zm-128.2 0h64.7v16.8h-64.7V15.6z" />
  </Svg>
  )
}
