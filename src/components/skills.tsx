import {Tecnologies} from "../data/tecnologiesData";
import BorderHighlight from "./BorderHighlight";

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
  return (
    <BorderHighlight
      id=""
      className="flex flex-col justify-center items-center border border-[#3d3d3d] p-10 rounded-md w-full max-w-[1720px] relative mx-auto"
    >
      <>
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
      </>
    </BorderHighlight>
  );
}

export default Skills;
