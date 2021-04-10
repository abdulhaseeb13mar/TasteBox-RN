import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      //   width={1520}
      width={props.width}
      //   height={789}
      height={props.height}
      //   viewBox="0 0 1520 789"
      viewBox={`0 0 1520 789`}
      {...props}>
      <Path
        d="M100.196 1.743L1471.407 230.88c27.013 4.514 48.593 29.559 48.593 56.006v454.228c0 26.447-21.58 47.886-48.593 47.886H100.196C45.381 789 0 757.66 0 719V55C0 16.34 45.381-7.417 100.196 1.743z"
        fill="#513005"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
