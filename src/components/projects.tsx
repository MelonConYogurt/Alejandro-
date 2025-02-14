import {motion} from "framer-motion";
import {projects} from "../data/projectsData";
import CardProject from "./cardProject";

interface ProjectProps {
  quantity: number;
  largePage: boolean;
}

export default function AllProjects({
  quantity = 6,
  largePage = false,
}: ProjectProps) {
  return (
    <section
      id="Proyectos"
      className={`flex flex-col justify-start items-center border border-[#3d3d3d] p-5 rounded-md max-w-7xl ${
        largePage ? "h-full" : "h-[560px] min-h-[560px]"
      } overflow-y-auto`}
    >
      <div className="flex flex-row justify-between items-center w-full mb-5  text-gray-200">
        <h2>Proyectos</h2>
        <a
          href={largePage ? "/" : "/projects"}
          className="inline-flex justify-center items-center gap-2"
        >
          {largePage ? "Volver atrás" : "Ver todos"}
          {largePage ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M9 14 4 9l5-5" />
              <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.1rem"
              height="1.1rem"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          )}
        </a>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5">
        {projects.slice(0, quantity).map((project, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.1}}
          >
            <CardProject data={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
