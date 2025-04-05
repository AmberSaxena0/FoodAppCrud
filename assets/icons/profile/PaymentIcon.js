import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function PaymentIcon(props) {
  return (
    <Svg
      width={20}
      height={16}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M18 16H2a2 2 0 01-2-2V2a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2zM2 2v12h16V2H2zm11.5 10a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm-4 0a2.5 2.5 0 010-5c.543 0 1.07.18 1.5.512a2.476 2.476 0 000 3.975c-.43.332-.957.512-1.5.513z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export default PaymentIcon;
