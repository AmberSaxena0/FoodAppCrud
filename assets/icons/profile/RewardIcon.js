import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function RewardIcon(props) {
  return (
    <Svg
      width={20}
      height={16}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18 16H2a2 2 0 01-2-2V2a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2zM2 8v6h16V8H2zm0-6v2h16V2H2zm9 10H4v-2h7v2z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export default RewardIcon;
