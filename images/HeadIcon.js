import React from 'react';
import Svg, { Path } from "react-native-svg"

export default function HeadIcon(props) {
  return (
    <Svg
    fill={props.color}
    height={props.height}
    width={props.width}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 488.02 488.02"
    xmlSpace="preserve"
  >
    <Path d="M265.374 0c-28.5 0-55.5 6.4-79.6 17.8-63.7 29.6-107.8 94-107.8 168.8v30.9l-38 72.5c-9.6 18.3-.5 33.3 20.1 33.3h17.9v68.9c0 21.5 17.6 39.2 39.2 39.2l53.8-8 .1 53.8v.4c.3 6.9 6.1 11.5 13.3 10.2l193.8-34.3c7.3-1.3 13.3-8.4 13.3-15.8V323.8c37.1-34.1 60.4-83 60.4-137.4-.1-103-83.6-186.4-186.5-186.4zm40.7 170.3c-18.8 32.6-37.6 65.2-56.5 97.8-.1.1-.2.2-.2.4-1.3 2.4-2.8 4.7-6 3.5-3.3-1.2-2.5-4.1-2.1-6.6 1.5-8.2 3-16.4 4.6-24.6 2.7-14.4 5.5-28.8 8.2-43.2.2-1.2.3-2.5.5-4.2-1.8-.1-3.3-.2-4.8-.2-10.6 0-21.3.1-31.9.1-6.3 0-7.7-2.6-4.6-8.1 18.8-32.6 37.6-65.2 56.5-97.8.1-.1.2-.2.2-.4 1.3-2.4 2.8-4.7 6-3.5 3.3 1.2 2.5 4.1 2.1 6.6-1.5 8.2-3 16.4-4.6 24.6-2.7 14.4-5.5 28.8-8.2 43.2-.2 1.2-.3 2.5-.5 4.2 1.8.1 3.3.2 4.8.2 10.6 0 21.3-.1 31.9-.1 6.3 0 7.8 2.6 4.6 8.1z" />
  </Svg>
  )
}
