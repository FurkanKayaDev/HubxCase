import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={7}
      height={7}
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={3.5} cy={3.5} r={3} fill="#13231B" fillOpacity={0.25} />
    </Svg>
  );
}

export default SvgComponent;
