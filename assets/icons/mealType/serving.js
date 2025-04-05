import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {COLORS} from '../../../src/utils/constants';

function FoodServing(props) {
  return (
    <Svg
      fill={COLORS.grey}
      height={25}
      width={25}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      {...props}>
      <Path d="M5.9 18l1.2 2.4c.2.4.5.6.9.6h17c.4 0 .7-.2.9-.6l1.2-2.4H5.9zM4 17H29c.6 0 1-.4 1-1s-.4-1-1-1h-1c-.2-5.3-4.1-9.7-9.1-10.8 0-.2.1-.4.1-.7C19 2.1 17.9 1 16.5 1S14 2.1 14 3.5c0 .3.1.5.1.7C9.1 5.3 5.3 9.7 5 15H4c-.6 0-1 .4-1 1s.4 1 1 1zM24.6 22.3c-.1-.2-.4-.3-.6-.3-.4 0-.7 0-1.1.1l-1.1 1.5C20.7 25.1 18.9 26 17 26h-3c-.6 0-1-.4-1-1s.4-1 1-1h3.5c.3-.3.5-.8.5-1.3v-.1c0-.4-.3-.6-.7-.6h-4c-2.4 0-4.3 1.1-5.4 2.8l-1.8 2.8c-.1.2-.1.5 0 .7l2 3.3c.1.2.2.3.4.3h.1c.1 0 .3 0 .4-.1 2.5-1.7 5.5-2.6 8.5-2.6 2.2 0 4.2-1.2 5.2-3.1l1.8-3.2c.2-.1.2-.4.1-.6z" />
    </Svg>
  );
}

export default FoodServing;
