import React from 'react';
import Svg, { Path, Circle } from "react-native-svg"


export default function LookingIcon(props) {
  return (
    <Svg
    width={props.width}
    height={props.height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60.86 60.86"
    xmlSpace="preserve"
  >
    <Path
      style={{
        fill: props.color,
      }}
      d="M31.807 27.66c1.202.653 3.231.161 3.462-1.409.462-3.17 1.018-6.342.868-9.559-.142-3.024-4.854-3.038-4.712 0 .087 1.868-.076 3.707-.311 5.544-1.939-.768-3.88-1.554-5.287-3.087-.391-.427-.827-.649-1.263-.719-1.236-.717-3.058-.731-4.279.101-.03.006-.057.004-.088.012-3.032.728-6.071 1.067-9.188 1.094-3.037.025-3.04 4.737 0 4.711a47.212 47.212 0 0 0 6.064-.442c-1.542 2.967-3.047 5.953-4.433 8.997-.279.613-.384 1.189-.358 1.719a2.675 2.675 0 0 0-.221.84l-1.981 21.74c-.304 3.338 4.874 3.812 5.177.475l1.353-14.846c.339 4.188.68 8.373 1.018 12.562.272 3.344 5.453 2.922 5.183-.42L21.05 33.252c1.379-2.884 2.854-5.72 4.347-8.549 2.04 1.128 4.323 1.822 6.41 2.957z"
    />
    <Circle
      style={{
        fill: props.color,
      }}
      cx={26.4}
      cy={12.11}
      r={4.369}
    />
    <Path
      style={{
        fill: props.color,
      }}
      d="m37.956 10.355 14.173-6.123-.382-.724a1.92 1.92 0 0 0 .268-.979c0-1.012-.773-1.846-1.8-1.938L49.905 0 31.259 9.747l1.463 2.782 3.792-1.572-.043 27.961-9.612 21.097 1.072.488 8.537-18.735-.025 17.001h-1.824v1.517h5.072v-1.517h-1.807l.025-17.164 7.826 19.255 1.09-.441-8.912-21.934.043-28.13z"
    />
  </Svg>
  )
}
