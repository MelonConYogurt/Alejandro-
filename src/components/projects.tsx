import {projects} from "../data/projectsData";
import CardProject from "./cardProject";

export default function AllProjects() {
  return (
    <section
      id="Proyectos"
      className="flex flex-col justify-start items-center border border-[#3d3d3d] p-5 rounded-md max-w-7xl h-[560px] min-h-[560px] min-w-[380px] overflow-y-auto"
    >
      <div className="flex flex-row justify-between items-center w-full mb-5  text-gray-200">
        <h2>Proyectos</h2>
        <a href="">Ver mas</a>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5">
        {projects.slice(0, 6).map((project, index) => (
          <CardProject key={index} data={project} />
        ))}
      </div>
    </section>
  );
}
