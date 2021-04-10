import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      width={props.width}
      height={props.height}
      viewBox="0 0 1286 30"
      {...props}>
      <Path d="M0 0l1286 28v2H0V0z" fill="#513005" fillRule="evenodd" />
    </Svg>
  );
}

export default SvgComponent;
