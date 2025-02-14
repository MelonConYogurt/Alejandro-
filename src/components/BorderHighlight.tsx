import React, {useState} from "react";

interface BorderHighlightProps {
  id: string;
  className: string;
  children: React.ReactNode;
}

export default function BorderHighlight({
  id = "#",
  children,
  className = "",
}: BorderHighlightProps) {
  const [opacity, setOpacity] = useState(0);
  const [position, setPosition] = useState({
    x: -1000,
    y: -1000,
  });

  function MouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  function handleFocus() {
    setOpacity(1);
  }

  function handleBlur() {
    setPosition({
      x: -1000,
      y: -1000,
    });
    setOpacity(0);
  }

  return (
    <div
      id={`${id}`}
      className={`${className}`}
      onMouseMove={(e) => MouseMove(e)}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
    >
      <div
        id="div-hidden"
        aria-hidden={true}
        className="h-full w-full border border-gray-400  rounded-md overflow-hidden absolute top-0 left-0 transition-opacity duration-300"
        style={{
          opacity,
          WebkitMaskImage: `radial-gradient(80% 50% at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
      ></div>
      {children}
    </div>
  );
}
