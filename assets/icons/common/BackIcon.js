import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function BackIcon(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 35 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G filter="url(#filter0_d_207_4244)">
        <Path
          d="M12.617 8.8l5.805-5.698L15.25 0 4 11l11.25 11 3.172-3.102-5.805-5.698H31V8.8H12.617z"
          fill="#2E3A59"
          fillOpacity={0.8}
          shapeRendering="crispEdges"
        />
      </G>
    </Svg>
  );
}

export default BackIcon;
