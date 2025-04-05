import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CrossIcon(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8 9.857l-5.571 5.571L.57 13.571 6.143 8 .57 2.429 2.43.57 8 6.143 13.571.57l1.857 1.858-5.57 5.57 5.57 5.572-1.857 1.857L8 9.857z"
        fill="#5A5A5A"
      />
    </Svg>
  );
}

export default CrossIcon;
