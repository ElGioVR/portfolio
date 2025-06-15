"use client";
import "../../i18n";


// AnimatedBackground Component
export default function AnimatedBackground({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 items-center justify-center">
      <svg
        width="950"
        height="950"
        viewBox="0 0 950 960"
        className="absolute"
        style={{
          left: "50%",
          top: "15%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
          filter: "blur(60px)",
          opacity: darkMode ? 0.6 : 0.2,
          pointerEvents: "none",
          zIndex: 0,
          color: darkMode ? "#4c1869" : "#a537e0",
        }}
      >
        <ellipse>
          <animate attributeName="cx" values="450;600;450" dur="8s" repeatCount="indefinite" />
          <animate attributeName="cy" values="450;300;450" dur="8s" repeatCount="indefinite" />
          <animate attributeName="rx" values="300;200;300" dur="8s" repeatCount="indefinite" />
          <animate attributeName="ry" values="300;350;300" dur="8s" repeatCount="indefinite" />
          <animate attributeName="fill" values="url(#lava1);url(#lava2);url(#lava1)" dur="8s" repeatCount="indefinite" />
        </ellipse>
        <ellipse>
          <animate attributeName="cx" values="600;300;600" dur="10s" repeatCount="indefinite" />
          <animate attributeName="cy" values="300;600;300" dur="10s" repeatCount="indefinite" />
          <animate attributeName="rx" values="120;200;120" dur="10s" repeatCount="indefinite" />
          <animate attributeName="ry" values="180;120;180" dur="10s" repeatCount="indefinite" />
          <animate attributeName="fill" values="url(#lava2);url(#lava3);url(#lava2)" dur="10s" repeatCount="indefinite" />
        </ellipse>
        <ellipse>
          <animate attributeName="cx" values="300;700;300" dur="12s" repeatCount="indefinite" />
          <animate attributeName="cy" values="700;200;700" dur="12s" repeatCount="indefinite" />
          <animate attributeName="rx" values="100;180;100" dur="12s" repeatCount="indefinite" />
          <animate attributeName="ry" values="160;100;160" dur="12s" repeatCount="indefinite" />
          <animate attributeName="fill" values="url(#lava3);url(#lava1);url(#lava3)" dur="12s" repeatCount="indefinite" />
        </ellipse>
      </svg>
    </div>
  );
}