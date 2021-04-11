import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {H_W} from '../../TbFrequentUsage/TbResponsive';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      width={props.width}
      height={props.height}
      viewBox="0 0 956 1165"
      // viewBox={`0 0 ${H_W.width * 1.1} ${H_W.height * 0.6}`}
      {...props}>
      <Path
        d="M120.157.826l734.818 84.55c56.065 6.451 100.941 56.364 100.838 111.542l-1.627 868.543c-.103 54.979-45.061 99.539-101.019 99.539H119.883C54.023 1165 0 1115.86 0 1055.23V97.231C0 36.358 54.147-6.77 120.157.826z"
        fill="#513005"
        fillRule="evenodd"
      />
    </Svg>
  );
}

export default SvgComponent;
