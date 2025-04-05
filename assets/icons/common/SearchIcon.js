import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SearchIcon(props) {
  return (
    <Svg
      width={24}
      height={23}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M21.955 23l-8.26-7.916c-3.674 2.503-8.736 1.89-11.646-1.409-2.91-3.3-2.697-8.185.491-11.24C5.727-.62 10.826-.825 14.27 1.963c3.444 2.789 4.083 7.641 1.47 11.162L24 21.04 21.955 23zM8.671 2.77c-2.74 0-5.105 1.844-5.662 4.415-.557 2.571.847 5.164 3.362 6.208 2.515 1.044 5.449.253 7.026-1.895 1.577-2.147 1.364-5.061-.51-6.977l.874.831-.986-.942-.017-.016A5.87 5.87 0 008.67 2.77z"
        fill={props.color}
        fillOpacity={0.6}
      />
    </Svg>
  );
}

export default SearchIcon;
