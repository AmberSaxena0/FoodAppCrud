import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SignOutIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16 18H2a2 2 0 01-2-2v-4h2v4h14V2H2v4H0V2a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zm-8-5v-3H0V8h8V5l5 4-5 4z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export default SignOutIcon;
