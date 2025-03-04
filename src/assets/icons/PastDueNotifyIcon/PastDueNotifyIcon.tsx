import React from "react";

const PastDueNotifyIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12L12 8"
        stroke="#E25454"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="#E25454"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 16C12.2761 16 12.5 15.7761 12.5 15.5C12.5 15.2239 12.2761 15 12 15C11.7239 15 11.5 15.2239 11.5 15.5C11.5 15.7761 11.7239 16 12 16Z"
        fill="#E25454"
        stroke="#E25454"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PastDueNotifyIcon;
