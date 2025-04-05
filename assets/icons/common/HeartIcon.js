import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HeartIcon(props) {
  return (
    <Svg
      width={props.size || 25}
      height={props.size || 25}
      viewBox="0 0 16 14"
      fill={props.fill || 'none'}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        clipRule="evenodd"
        d="M7.995 2.437c-1.35-1.573-3.6-1.996-5.29-.556-1.691 1.44-1.93 3.849-.602 5.552 1.104 1.416 4.446 4.403 5.54 5.37.123.108.184.162.256.183.062.019.13.019.193 0 .071-.021.133-.075.255-.183 1.095-.967 4.436-3.954 5.54-5.37 1.328-1.703 1.12-4.127-.6-5.552-1.72-1.425-3.942-1.017-5.292.556z"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HeartIcon;
