import React from 'react';
import Svg, { Path } from "react-native-svg"

export default function LeftArrow() {
  return (
    <Svg
    width={25}
    height={25}
    viewBox="0 -6.5 38 38"
    xmlns="http://www.w3.org/2000/svg"

  >
    <Path
      d="M11.188.58.675 11.004l-.088.082c-.352.349-.557.809-.587 1.352l.002.183c.025.43.19.842.514 1.21l.123.127L11.188 24.42c.78.773 2.041.773 2.822 0a1.985 1.985 0 0 0 0-2.822l-7.284-7.224H36c1.102 0 1.999-.889 1.999-1.99a1.995 1.995 0 0 0-2-1.992H6.96l7.05-6.99a1.985 1.985 0 0 0 0-2.822 2.005 2.005 0 0 0-2.822 0Z"
      fill="#fff"
      fillRule="nonzero"
    />
  </Svg>
  )
}
