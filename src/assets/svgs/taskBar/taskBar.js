export const TaskBarLine = ({ className }) => {
  return (
    <svg
      className={className}
      width="1002"
      height="2"
      viewBox="0 0 1002 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L1001 0.999913"
        stroke="url(#paint0_linear_3721_689)"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3721_689"
          x1="1"
          y1="1.5"
          x2="1001"
          y2="1.49991"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="0.2" stopColor="white" />
          <stop offset="0.8" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0.04" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const ClockSpliteLine = ({ className }) => {
  return (
    <svg
      className={className}
      width="2"
      height="42"
      viewBox="0 0 2 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L1 41"
        stroke="url(#paint0_linear_3721_790)"
        strokeOpacity="0.1"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3721_790"
          x1="1.5"
          y1="1"
          x2="1.5"
          y2="41"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#141228" stopOpacity="0" />
          <stop offset="0.25" stopColor="#141228" />
          <stop offset="0.5" stopColor="#141228" />
          <stop offset="0.75" stopColor="#141228" />
          <stop offset="1" stopColor="#141228" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
