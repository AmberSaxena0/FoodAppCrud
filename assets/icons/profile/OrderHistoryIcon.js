import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function OrderHistoryIcon(props) {
  return (
    <Svg
      width={19}
      height={16}
      viewBox="0 0 19 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.833.35a7.65 7.65 0 00-7.648 7.5H.47l.256.256 3.225 3.225.047.094.093.186.147-.147 3.367-3.358.257-.256H5.152a5.679 5.679 0 015.681-5.533A5.679 5.679 0 0116.517 8a5.679 5.679 0 01-5.684 5.683 5.636 5.636 0 01-4.01-1.672l-.106-.107-.106.107-1.184 1.183-.106.106.106.106a7.612 7.612 0 005.406 2.244 7.65 7.65 0 000-15.3zM10 4.517h-.15V8.919l.073.043 3.542 2.1.128.076.077-.127.642-1.067.078-.13-.13-.076L11.4 8.04V4.517H10z"
        fill="#2E3A59"
        stroke="#2E3A59"
        strokeWidth={0.3}
      />
    </Svg>
  );
}

export default OrderHistoryIcon;
