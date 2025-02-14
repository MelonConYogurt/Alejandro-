import React, {useState} from "react";
import StudyCard from "./cardStudies";
import {studies} from "../data/studiesData";

function Studies() {
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
    <section
      id="Estudios"
      className="relative flex flex-col justify-center items-center lg:justify-start border border-[#3d3d3d] p-10 rounded-md w-full min-w-[380px] lg:w-fit "
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
      <div className="flex flex-row justify-center items-center w-full mb-10 text-gray-200">
        <h2 className="text-xl text-center">Educación</h2>
      </div>
      <div className="flex flex-col justify-center items-start w-1/2 lg:w-full">
        <ol className="relative border-s border-gray-200">
          {studies.map((study, index) => (
            <StudyCard key={index} study={study} />
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Studies;
