import React from 'react';
import Svg, { Path } from "react-native-svg"

export default function GraphIcon(props) {
  return (
    <Svg
    fill={props.color}
    width={props.height}
    height={props.width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="M6 13H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Zm-1 8H3v-6h2ZM22 9h-4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Zm-1 12h-2V11h2ZM14 1h-4a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Zm-1 20h-2V3h2Z" />
  </Svg>
  )
}
