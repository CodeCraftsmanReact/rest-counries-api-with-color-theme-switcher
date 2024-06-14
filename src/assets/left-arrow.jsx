import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-line"
    data-name="Flat Line"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M21 12H3"
      style={{
        fill: "none",

        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <path
      d="m6 9-3 3 3 3"
      data-name="primary"
      style={{
        fill: "none",

        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
)
export default SvgComponent