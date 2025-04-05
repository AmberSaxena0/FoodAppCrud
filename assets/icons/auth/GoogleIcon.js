import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function GoogleIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.935 7.3v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.28 5.28 0 010-10.559 5.166 5.166 0 013.29 1.178l2.6-2.6a8.929 8.929 0 10-5.89 15.635c4.467 0 8.53-3.249 8.53-8.934a7.469 7.469 0 00-.2-1.625l-8.33.001z"
        fill="#F6F6F7"
      />
    </Svg>
  );
}

export default GoogleIcon;
