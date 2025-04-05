import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function InviteIcon(props) {
  return (
    <Svg
      width={20}
      height={15}
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M2 15H0a6 6 0 0112 0h-2a4 4 0 00-8 0zm15-3h-2V9h-3V7h3V4h2v3h3v2h-3v3zM6 8a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 102 2.09v.4V4a2 2 0 00-2-2z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export default InviteIcon;
