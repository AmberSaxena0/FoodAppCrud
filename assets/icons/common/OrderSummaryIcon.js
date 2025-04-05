import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function OrderSummaryIcon(props) {
  return (
    <Svg
      width={16}
      height={19}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M14 19H2c-1.105 0-2-.85-2-1.9V1.9C0 .85.895 0 2 0h7a.12.12 0 01.032.006c.01.003.02.004.03.005.088.006.175.022.259.049l.028.008a.99.99 0 01.359.217l6 5.7c.084.08.151.175.2.278.01.021.017.043.025.065l.009.025c.028.079.044.161.049.245a.143.143 0 00.007.025.113.113 0 01.002.027V17.1c0 1.05-.896 1.9-2 1.9zM2 1.9v15.2h12V7.6H9c-.552 0-1-.425-1-.95V1.9H2zm8 1.343V5.7h2.586L10 3.243z"
        fill="#fff"
      />
    </Svg>
  );
}

export default OrderSummaryIcon;
