import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CartIcon(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.188 19a.562.562 0 100-1.125.562.562 0 000 1.125z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.188 18.875a.438.438 0 100-.875.438.438 0 000 .875zm-1.563-.438a1.563 1.563 0 113.125 0 1.563 1.563 0 01-3.125 0z"
        fill={props.color}
      />
      <Path
        d="M15.063 19a.562.562 0 100-1.125.562.562 0 000 1.125z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.063 18.875a.438.438 0 100-.875.438.438 0 000 .875zm-1.563-.438a1.563 1.563 0 113.125 0 1.563 1.563 0 01-3.125 0zM0 1a1 1 0 011-1h2.25a1 1 0 01.986.836l.424 2.539H19a1 1 0 01.976 1.217l-2.25 10.125a1 1 0 01-.976.783H5.5a1 1 0 01-.986-.836L2.403 2H1a1 1 0 01-1-1zm4.993 4.375L6.347 13.5h9.6l1.806-8.125H4.993z"
        fill={props.color}
      />
    </Svg>
  );
}

export default CartIcon;
