import * as React from 'react';
import Svg, { Defs, ClipPath, Path, G, Text, TSpan } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */
export const Logo = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={353.472}
    height={64.665}
    viewBox="69.268 137.721 353.472 64.665"
  >
    <Defs>
      <ClipPath id="a">
        <Path
          d="M0 0h135v26H0z"
          className="a"
          style={{
            fill: '#7d40e7',
            stroke: '#707070',
          }}
          transform="translate(30 19)"
        />
      </ClipPath>
    </Defs>
    <G
      className="b"
      style={{
        clipPath: 'url(#a)',
      }}
      transform="matrix(2.86198 0 0 2.86198 -19.004 78.47)"
    >
      <Text
        className="c"
        style={{
          whiteSpace: 'pre',
          fill: '#7d40e7',
          fontFamily: 'Helvetica-BoldOblique,Helvetica',
          fontSize: 17,
          fontStyle: 'italic',
          fontWeight: 700,
          letterSpacing: '.561px',
          lineHeight: '27.2px',
          perspectiveOrigin: '42.1719px 2px',
        }}
        transform="translate(70.156 38.471)"
      >
        <TSpan x={0} y={0}>
          FRETECH
        </TSpan>
      </Text>
      <Path
        d="M32.952 15.415H10.581a.666.666 0 0 0 0 1.332h22.371a.666.666 0 0 0 0-1.332ZM34.639 11.623H13.954a.641.641 0 0 0 0 1.281h20.685a.641.641 0 0 0 0-1.281ZM30.555 7.869H8.184a.666.666 0 0 0 0 1.331h22.371a.666.666 0 0 0 0-1.331Z"
        className="d"
        style={{
          fill: '#7d40e7',
        }}
        transform="translate(30.828 20.558)"
      />
      <Path
        d="M9.781 22.739a5.866 5.866 0 0 1-5.859-5.859 3.062 3.062 0 0 1 .043-.5 5.86 5.86 0 0 1 1.91-11.4c.186 0 .373.008.558.026A5.733 5.733 0 0 1 12.178.145a5.877 5.877 0 0 1 5.74 4.679.755.755 0 1 1-1.48.3 4.36 4.36 0 0 0-4.261-3.471 4.243 4.243 0 0 0-4.3 4.272.755.755 0 0 1-1.035.7l-.149-.059a4.351 4.351 0 0 0-1.663 8.545.754.754 0 0 1 .549 1.037l-.064.15-.026.133a2.345 2.345 0 0 0-.059.448 4.351 4.351 0 0 0 8.375 1.653.755.755 0 1 1 1.4.574 5.837 5.837 0 0 1-5.424 3.633Z"
        className="d"
        style={{
          fill: '#7d40e7',
        }}
        transform="translate(30.828 20.558)"
      />
    </G>
  </Svg>
);
