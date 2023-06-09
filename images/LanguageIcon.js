import React from 'react'
import Svg, { Path } from "react-native-svg"

export default function LanguageIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.color}
  >
    <Path
      d="M30 3H14v5h2V5h14c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1H17v7h-5.3L8 27.9V25H5c-.6 0-1-.4-1-1V13c0-.6.4-1 1-1h13v-2H5c-1.7 0-3 1.3-3 3v11c0 1.7 1.3 3 3 3h1v5.1l6.3-5.1H19v-7h11c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3z"
      className="clr-i-outline clr-i-outline-path-1"
    />
    <Path
      d="M6.2 22.9h2.4l.6-1.6h3.1l.6 1.6h2.4L11.9 14H9.5l-3.3 8.9zm4.5-6.4 1 3.1h-2l1-3.1z"
      className="clr-i-outline clr-i-outline-path-2"
    />
    <Path
      d="M20 17c1.1 0 2.6-.3 4-1 1.4.7 3 1 4 1v-2s-1 0-2.1-.4c1.2-1.2 2.1-3 2.1-5.6V8h-3V6h-2v2h-3v2h5.9c-.2 1.8-1 2.9-1.9 3.6-.6-.5-1.2-1.2-1.6-2.1h-2.1c.4 1.3 1 2.3 1.8 3.1-1 .4-1.9.4-2.1.4v2z"
      className="clr-i-outline clr-i-outline-path-3"
    />
    <Path fill="none" d="M0 0h36v36H0z" />
  </Svg>
  )
}
