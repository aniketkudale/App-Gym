import React from "react";
import "./styles.css";

function Loader({size}) {
  return (
    <svg
      className="loader"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#0081cb"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" /></svg>
  )
}

export default function App() {
  return (
    <Loader size={24} />
  );
}
