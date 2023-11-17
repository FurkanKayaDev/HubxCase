import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M21.012 4.2c-.054.004-5.591.48-8.225-2a.41.41 0 00-.57 0c-2.634 2.48-8.167 2.004-8.225 2a.406.406 0 00-.317.108.408.408 0 00-.138.304v3.863c0 12.904 8.813 14.425 8.9 14.438.021.004.046.004.067.004.021 0 .042 0 .063-.005.087-.012 8.9-1.533 8.9-14.437V4.612a.415.415 0 00-.454-.412zm-4.058 9.358c0 .23-.187.417-.416.417H13.97v2.567c0 .229-.188.416-.417.416h-2.108a.418.418 0 01-.417-.416v-2.567H8.462a.418.418 0 01-.416-.417V11.45c0-.23.187-.417.416-.417h2.567V8.467c0-.23.188-.417.417-.417h2.108c.23 0 .417.187.417.417v2.566h2.567c.229 0 .416.188.416.417v2.108z"
        fill="#BDBDBD"
      />
    </Svg>
  );
}

export default SvgComponent;
