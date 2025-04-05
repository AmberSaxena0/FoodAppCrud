import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function LocationIcon(props) {
  return (
    <Svg
      width={15}
      height={20}
      viewBox="0 0 15 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.5 20a32.53 32.53 0 01-3.75-3.922C2.036 13.954 0 10.793 0 7.78-.002 4.634 1.826 1.796 4.63.592 7.433-.612 10.66.054 12.806 2.28A7.873 7.873 0 0115 7.78c0 3.013-2.036 6.175-3.75 8.297A32.526 32.526 0 017.5 20zm0-17.774C4.543 2.23 2.146 4.714 2.143 7.78c0 1.296.564 3.538 3.252 6.872.662.82 1.365 1.604 2.105 2.349a30.802 30.802 0 002.106-2.346c2.686-3.338 3.251-5.58 3.251-6.875-.003-3.066-2.4-5.55-5.357-5.554zm0 8.887c-1.775 0-3.214-1.492-3.214-3.333 0-1.84 1.439-3.332 3.214-3.332s3.214 1.492 3.214 3.332c0 .884-.338 1.732-.941 2.357a3.157 3.157 0 01-2.273.976z"
        fill="#fff"
      />
    </Svg>
  );
}

export default LocationIcon;
