import StudyCard from "./cardStudies";
import {studies} from "../data/studiesData";
import BorderHighlight from "./BorderHighlight";

function Studies() {
  return (
    <BorderHighlight
      id="Estudios"
      className="relative flex flex-col justify-center items-center lg:justify-start border border-[#3d3d3d] p-10 rounded-md w-full lg:w-[380px] sm:min-w-[380px]"
    >
      <>
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
      </>
    </BorderHighlight>
  );
}

export default Studies;
