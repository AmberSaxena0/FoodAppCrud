import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function FacebookIcon(props) {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M0 9.557C.001 14.26 3.4 18.263 8.015 19v-6.68h-2.41V9.557h2.413V7.454c-.108-.996.23-1.99.923-2.71a3.34 3.34 0 012.66-1.017c.714.011 1.425.075 2.129.19v2.351h-1.2a1.368 1.368 0 00-1.13.374c-.301.29-.455.702-.417 1.12v1.795h2.632l-.42 2.763h-2.212V19c4.991-.794 8.491-5.38 7.965-10.438C18.42 3.505 14.05-.252 9.005.013 3.958.278 0 4.473 0 9.557z"
        fill="#F6F6F7"
      />
    </Svg>
  );
}

export default FacebookIcon;
