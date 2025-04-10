import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function TrackIcon(props) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M7.108 20.2L0 17.829V1.721l6.892 2.3L13.923 0 20 2.431v16.154l-5.923-2.37L7.109 20.2h-.001zM2 4.5v11.887l4 1.333V5.828L2 4.5zm10-1.1L8 5.688v11.7l4-2.288V3.4zm2.077-1.186L14 2.26v11.771l4 1.6V3.784l-3.923-1.57z"
        fill="#2E3A59"
      />
    </Svg>
  );
}

export default TrackIcon;
