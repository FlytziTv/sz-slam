import { ComponentPropsWithRef } from "react";

export const SZIcon = (
  props: ComponentPropsWithRef<"svg"> & { size_w?: number; size_h?: string }
) => {
  return (
    <svg
      width={props.size_w}
      height={props.size_h}
      viewBox="0 0 780 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1311_342)">
        <mask
          id="mask0_1311_342"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="780"
          height="240"
        >
          <path d="M780 0H0V240H780V0Z" fill="currentColor" />
        </mask>
        <g mask="url(#mask0_1311_342)">
          <mask
            id="mask1_1311_342"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="780"
            height="240"
          >
            <path d="M780 0H0V240H780V0Z" fill="currentColor" />
          </mask>
          <g mask="url(#mask1_1311_342)">
            <path
              d="M0 240H519.29C532.55 240 545.27 234.73 554.64 225.36L660 120H420L480 180H60L0 240Z"
              fill="currentColor"
            />
            <path
              d="M780 0L720 60H300L360 120H120L225.35 14.65C234.73 5.26999 247.45 0 260.71 0H780Z"
              fill="currentColor"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1311_342">
          <rect width="780" height="240" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};
