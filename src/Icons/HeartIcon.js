import React from "react";

function HeartIcon({ isSelected }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 256 256"
    >
      <g fill={isSelected ? "#D6493E" : "white"} strokeMiterlimit="10">
        <path
          d="M7.486 13.502c9.982-9.982 26.165-9.982 36.147 0L45 14.869c6.895 22.882 6.259 47.092 0 72.294L26.927 69.089l-19.44-19.44c-9.982-9.982-9.982-26.165-.001-36.147z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
        <path
          d="M82.514 13.502c-9.982-9.982-26.165-9.982-36.147 0L45 14.869v72.294L63.073 69.09l19.44-19.44c9.982-9.983 9.982-26.166.001-36.148z"
          transform="matrix(2.81 0 0 2.81 1.407 1.407)"
        ></path>
      </g>
    </svg>
  );
}

export default HeartIcon;
