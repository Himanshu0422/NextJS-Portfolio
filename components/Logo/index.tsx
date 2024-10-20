import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <svg
      id="logo"
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${styles.logo}`}
      width="253"
      height="262"
      viewBox="0 0 253 262"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <linearGradient id="gradient">
        <stop offset="5%" stopColor="#000000" />
        <stop offset="95%" stopColor="#2d3436" />
      </linearGradient>
      {/* Left vertical line */}
      <path
        d="M1.35156 1.32031V261.5H77.0469V1.32031H1.35156Z"
        className={styles.path}
        stroke="white"
        strokeWidth="0.5"
      />
      {/* Center shape, angled with thickness */}
      <path
        d="M87.0469 91.32031L165.484 111.32031L165.484 171.32031L87.0469 151.32031Z"
        className={styles.path}
        fill="white"
        stroke="white"
        strokeWidth="0.5"
      />
      {/* Right vertical line */}
      <path
        d="M175.484 1.32031V261.5H251.18V1.32031H175.484Z"
        className={styles.path}
        stroke="white"
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default Logo;