import React from 'react'

export const NodeDesktopContainer = ({ className }) => {
  return (
    <svg
      className={className}
      width="72"
      height="68"
      viewBox="0 0 72 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_4549_81)">
        <path
          d="M65.2497 17.1125C68.1277 22.0974 69.5668 24.5898 70.3514 27.1752C71.7019 31.6249 71.7019 36.3752 70.3514 40.8248C69.5668 43.4102 68.1277 45.9026 65.2497 50.8875V50.8875C62.3717 55.8724 60.9327 58.3648 59.086 60.337C55.9077 63.7314 51.7939 66.1066 47.2651 67.1619C44.6338 67.775 41.7558 67.775 35.9997 67.775V67.775C30.2437 67.775 27.3657 67.775 24.7344 67.1619C20.2056 66.1066 16.0917 63.7314 12.9134 60.337C11.0668 58.3648 9.62774 55.8724 6.74972 50.8875V50.8875C3.87169 45.9026 2.43268 43.4102 1.64803 40.8248C0.29756 36.3752 0.29756 31.6248 1.64803 27.1752C2.43268 24.5898 3.87169 22.0974 6.74972 17.1125V17.1125C9.62774 12.1276 11.0668 9.63519 12.9134 7.66298C16.0917 4.2686 20.2056 1.89345 24.7344 0.838159C27.3657 0.225012 30.2437 0.225012 35.9997 0.225012V0.225012C41.7558 0.225012 44.6338 0.225013 47.2651 0.83816C51.7939 1.89345 55.9077 4.26861 59.086 7.66299C60.9327 9.63519 62.3717 12.1276 65.2497 17.1125V17.1125Z"
          fill="#01000F"
          fillOpacity="0.15"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_4549_81"
          x="-9.36523"
          y="-9.77499"
          width="90.7295"
          height="87.55"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4549_81" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_4549_81"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}

export const AppDesktopIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="27"
      height="6"
      viewBox="0 0 27 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.18919 3.09609L0 0.142883H10L13.6593 0.428014C18.4137 0.798478 22.9043 2.76161 26.4049 6.00002V6.00002H12.9909C9.82522 6.00002 6.742 4.98278 4.18919 3.09609Z"
        fill="black"
        fillOpacity="0.28"
      />
    </svg>
  )
}
