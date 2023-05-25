import React from 'react';
import Svg, { Path } from "react-native-svg"

export default function AboutIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 128 128"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.color}
  >
    <Path d="M64 1C29.3 1 1 29.3 1 64s28.3 63 63 63 63-28.3 63-63S98.7 1 64 1zm0 118C33.7 119 9 94.3 9 64S33.7 9 64 9s55 24.7 55 55-24.7 55-55 55z" />
    <Path d="M60 54.5h8v40h-8zM60 35.5h8v8h-8z" />
  </Svg>
  )
}
