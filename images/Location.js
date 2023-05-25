import React from 'react'
import Svg, { Path } from "react-native-svg"
export default function Location() {
  return (
    <Svg
    fill="#717880"
    width={15}
    height={15}
    viewBox="0 0 96 96"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path d="M48 0a36.04 36.04 0 0 0-36 36c0 32.508 30.938 57.633 32.25 58.688a6.013 6.013 0 0 0 7.5 0C53.063 93.632 84 68.507 84 36A36.04 36.04 0 0 0 48 0Zm0 81.95C40.418 74.706 24 56.636 24 36a24 24 0 0 1 48 0c0 20.637-16.418 38.707-24 45.95Z" />
    <Path d="M48 24a12 12 0 1 0 12 12 12.016 12.016 0 0 0-12-12Z" />
  </Svg>
  )
}
