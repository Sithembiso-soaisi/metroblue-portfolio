import { Link } from "react-router-dom";

function MetroBlueLogo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="MetroBlue logo"
        role="img"
      >
        <rect width="42" height="42" rx="10" fill="#0D84C5" />

        <path
          d="M9 28L16 14L23 28"
          stroke="#FFFFFF"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M19 28L26 14L33 28"
          stroke="#47A342"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle cx="16" cy="14" r="2.5" fill="#47A342" />
        <circle cx="26" cy="14" r="2.5" fill="#FFFFFF" />
      </svg>

      <span className="text-2xl font-bold tracking-tight text-[#0D84C5]">
        Metro
        <span className="text-[#47A342]">Blue</span>
      </span>
    </Link>
  );
}

export default MetroBlueLogo;