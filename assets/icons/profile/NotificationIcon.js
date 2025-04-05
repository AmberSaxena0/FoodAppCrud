import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function NotificationIcon(props) {
  return (
    <Svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8 20a2 2 0 01-2-2h4a2 2 0 01-2 2zm8-3H0v-2l2-1V8.5c0-3.462 1.421-5.707 4-6.32V0h3a4.955 4.955 0 00-1 3c0 .251.019.502.056.751H8A3.6 3.6 0 004.875 5.2 5.692 5.692 0 004 8.5V15h8V8.5c0-.211-.007-.414-.021-.6a5.043 5.043 0 002.006.007c.011.211.015.412.015.6V14l2 1v2zM13 6a3 3 0 110-6 3 3 0 010 6z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export default NotificationIcon;
