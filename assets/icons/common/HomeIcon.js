import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeIcon(props) {
  return (
    <Svg
      width={21}
      height={24}
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19.688 24H1.313A1.302 1.302 0 010 22.709V10.33c0-.343.138-.671.385-.913L9.572.378a1.324 1.324 0 011.857 0l9.188 9.04c.246.241.384.57.383.913v12.378c0 .713-.588 1.291-1.313 1.291zM7.874 14.961h5.25v6.457h5.25V10.864L10.5 3.118l-7.875 7.747v10.553h5.25V14.96z"
        fill={props.color}
        fillOpacity={0.8}
      />
    </Svg>
  );
}

export default HomeIcon;
