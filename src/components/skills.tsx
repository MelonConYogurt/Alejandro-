import React, {useState} from "react";
import {Tecnologies} from "../data/tecnologiesData";

const SKILLS = [
  Tecnologies.ASTRO,
  Tecnologies.CSS,
  Tecnologies.FASTAPI,
  Tecnologies.GIT,
  Tecnologies.GITHUB,
  Tecnologies.HTML,
  Tecnologies.NEXT,
  Tecnologies.PYTHON,
  Tecnologies.POSTGRESQL,
  Tecnologies.SQLITE,
  Tecnologies.STRAPI,
  Tecnologies.REACT,
  Tecnologies.JAVASCRIPT,
  Tecnologies.VSCODE,
  Tecnologies.TAILWIND,
];

function Skills() {
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
    <article
      className="flex flex-col justify-center items-center border border-[#3d3d3d] p-10 rounded-md w-full max-w-[1720px] relative mx-auto"
      onMouseMove={(e) => MouseMove(e)}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}
    >
      <div
        id="div-hidden"
        aria-hidden={true}
        className="h-full w-full border border-gray-400  rounded-md overflow-hidden absolute top-0 left-0 pointer-events-none"
        style={{
          opacity,
          WebkitMaskImage: `radial-gradient(80% 50% at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
      ></div>

      <h2 className="text-xl text-gray-200 mb-10">
        Mis Herramientas y Tecnologías
      </h2>
      <div className="flex flex-wrap gap-8 justify-center w-full items-center">
        {Object.values(SKILLS).map((tech, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-2 hover:scale-110 transition-transform"
          >
            <div>
              <tech.icon className="w-10 h-10 sm:w-16 sm:h-16 " />
            </div>
            <div className="text-sm text-gray-200">{tech.name}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default Skills;
