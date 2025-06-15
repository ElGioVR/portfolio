import React from "react";

interface LogoGZProps {
  color?: string; // Color principal del logo (blanco por defecto)
  bgColor?: string; // Color de fondo (negro por defecto)
  size?: number | string; // Tamaño (ancho/alto)
}

const LogoGZ: React.FC<LogoGZProps> = ({
  color = "#fff",
  bgColor = "#0A0A0A",
  size = 120,
}) => (
  <svg
    viewBox="0 0 1024 1024"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    style={{ display: "block" }}
  >
    <rect width="1024" height="1024" fill={bgColor} />
    <g>
      {/* Círculo exterior */}
      <circle cx="512" cy="512" r="384" stroke={color} strokeWidth="48" fill="none" />
      {/* G estilizada */}
      <path
        d="M768 512c0 141.4-114.6 256-256 256s-256-114.6-256-256 114.6-256 256-256c70.7 0 134.5 28.7 181.1 75.1H512v64h256V320h-64c-58.8-58.8-140-95.1-229-95.1-176.7 0-320 143.3-320 320s143.3 320 320 320 320-143.3 320-320h-64z"
        fill={color}
      />
      {/* Z estilizada */}
      <path
        d="M576 576h192l-128 128H384l128-160h-96v-64h256l-128 160z"
        fill={color}
      />
    </g>
  </svg>
);

export default LogoGZ;