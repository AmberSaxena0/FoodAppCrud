import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowIcon(props) {
  return (
    <Svg
      width={8}
      height={13}
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.425 6.01L1.414 0 0 1.414l4.6 4.6L0 10.607l1.414 1.414L7.425 6.01z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export default ArrowIcon;
