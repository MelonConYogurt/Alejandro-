import type {Project} from "../data/projectsData";
import BorderHighlight from "./BorderHighlight";

export default function CardProject({data}: {data: Project}) {
  return (
    <BorderHighlight
      id=""
      className="relative flex flex-col justify-between border border-[#3d3d3d] p-4 rounded-md h-36"
    >
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="text-lg font-bold mb-1 text-gray-200 line-clamp-1">
            {data.title}
          </h2>
          <p className="text-sm text-gray-300/90 mb-2 line-clamp-2">
            {data.description}
          </p>
        </div>
        <div className="w-full overflow-x-auto scroll-behavior: smooth">
          <ul className="flex flex-row gap-2 select-none mb-2">
            {data.tecnologies.map((tech, index) => (
              <li
                key={index}
                className="flex flex-row gap-1 justify-center items-center bg-[#262626] text-gray-200 border border-[#2c2c2c] px-2 py-0.5 rounded-sm text-xs whitespace-nowrap"
              >
                <tech.icon className="w-3 h-3" />
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute top-2 right-2 flex gap-2">
        <a
          href={data.repo.toString()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="GitHub Repository"
        >
          <svg
            viewBox="0 0 256 250"
            width="1.25rem"
            height="1.25rem"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
          </svg>
        </a>
        <a
          href={data.video.toString()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="YouTube Video"
        >
          <svg
            viewBox="0 0 256 180"
            width="1.25rem"
            height="1.25rem"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
              fill="red"
            />
            <path
              fill="#FFF"
              d="m102.421 128.06 66.328-38.418-66.328-38.418z"
            />
          </svg>
        </a>
      </div>
    </BorderHighlight>
  );
}
