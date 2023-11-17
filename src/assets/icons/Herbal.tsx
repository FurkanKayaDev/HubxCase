import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={7}
      height={36}
      viewBox="0 0 7 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={36} height={35.6814} rx={8} fill="#000" fillOpacity={0.24} />
    </Svg>
  );
}

export default SvgComponent;
