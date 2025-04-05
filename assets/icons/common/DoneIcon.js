import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function DoneIcon(props) {
  return (
    <Svg
      width={220}
      height={220}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M110.011 220C49.281 219.933.067 170.724 0 110v-2.2C1.21 47.35 50.986-.792 111.449.01c60.462.802 108.944 50.248 108.549 110.709-.395 60.461-49.519 109.269-109.987 109.281zM59.516 105.49L44.004 121l44.005 44 88.009-88-15.512-15.62-72.497 72.49-28.493-28.38z"
        fill="#FF640D"
      />
    </Svg>
  );
}

export default DoneIcon;
