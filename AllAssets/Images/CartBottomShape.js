import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      width={props.width}
      height={props.height}
      viewBox="0 0 1462 670"
      {...props}>
      <Path
        d="M31.512 373.632L1302.581 13.205C1385.674-10.357 1462-1.311 1462 37.79v561.999c0 39.401-76.732 70.211-159.918 70.211H29.495C12.997 670 .089 657.126.2 641.247l1.601-230.564c.11-15.842 13.203-32.371 29.711-37.051z"
        fill="#fff"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
