import type {Study} from "../data/studiesData";

export default function StudyCard({study}: {study: Study}) {
  return (
    <li className="mb-10 ms-6">
      <div className="flex flex-row items-center">
        <span className="absolute flex items-center justify-center w-3 h-3 bg-gray-200 rounded-full -start-1.5 ring-4 ring-[#303030]"></span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-200">
          {study.title}
        </h3>
      </div>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-300">
        Realizado {study.date}
      </time>
      <span
        className={`${
          study.status === "Finalizado"
            ? "bg-green-100 text-green-800"
            : "bg-blue-100 text-blue-800"
        } text-sm font-medium px-2.5 py-0.5 rounded-sm `}
      >
        {study.status}
      </span>
      <p className="mb-4 text-base font-normal  text-gray-300">
        {study.institution}
      </p>
      {study.certificate !== "" ? (
        <a
          href={study.certificate}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-200 border-b border-gray-50"
        >
          <svg
            className="w-3.5 h-3.5 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
          </svg>{" "}
          Descargar certificado
        </a>
      ) : (
        <></>
      )}
    </li>
  );
}
