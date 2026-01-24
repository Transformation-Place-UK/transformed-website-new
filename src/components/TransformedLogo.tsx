
export default function TransformedLogo({
  className,
  width,
  height,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 762 761"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
      className={className}
    >
      <g transform="matrix(1,0,0,1,-4681.882568,-437.906207)">
        <g
          id="logo"
          transform="matrix(0.85411,0,0,0.85411,3764.717949,-153.137845)"
        >
          <path
            d="M1502,991L1502,1052L1417.724,1136.276L1502.301,1220.853L1502.301,1284L1355.081,1136.781L1502,991Z"
            style={{ fill: "rgb(237,47,38)" }}
          />
          <g transform="matrix(-1,0,0,1,3040.382044,0)">
            <path
              d="M1502,991L1502,1052L1417.724,1136.276L1502.301,1220.853L1502.301,1284L1355.081,1136.781L1502,991Z"
              style={{ fill: "rgb(237,47,38)" }}
            />
          </g>
          <g transform="matrix(1.011231,0,0,1.022718,-17.577289,-25.830022)">
            <ellipse
              cx="1520.482"
              cy="1136.982"
              rx="44.518"
              ry="44.018"
              style={{ fill: "rgb(226,226,225)" }}
            />
          </g>
          <path
            d="M1298,1124L1231,1124L1520.182,834.818L1809.471,1124.106L1742,1124.106L1520.115,902.221L1298,1124Z"
            style={{ fill: "rgb(84,40,111)" }}
          />
          <g transform="matrix(1,0,0,-1,0,2273.923654)">
            <path
              d="M1298,1124L1231,1124L1520.182,834.818L1809.471,1124.106L1742,1124.106L1520.115,902.221L1298,1124Z"
              style={{ fill: "rgb(84,40,111)" }}
            />
          </g>
          <path
            d="M1520.482,692L1964.907,1136.424L1519.367,1581.964L1073.825,1136.422L1520.482,692ZM1520.312,760L1141.825,1136.502L1520.367,1514.964L1897.907,1136.503L1520.312,760Z"
            style={{ fill: "rgb(41,54,122)" }}
          />
        </g>
      </g>
    </svg>
  );
}
