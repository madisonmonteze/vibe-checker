import React from "react";

const SVG = ({
  style = {},
  fill = "none",
  stroke = "#000",
  strokeWidth = ".5",
  fontSize = "auto",
  width = "100%",
  height = "auto",
  className = "",
  viewBox="0 0 100 100"
}) => (
    <svg 
        width={width} 
        style={style}
        height={height} 
        viewBox={viewBox}
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={`svg-icon ${className || ""}`}
    >
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="questionMark" stroke={stroke} stroke-width={strokeWidth} fill="none" fill-rule="evenodd" font-size={fontSize} font-family="Sprat-RegularMedium, Sprat" letter-spacing="0.360000014" font-weight="400">
        <text id="?" fill={fill}>
            <tspan x="-3" y="52">?</tspan>
    </text>
    </g>
</svg>
);

export default SVG;