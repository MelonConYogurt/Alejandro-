import BorderHighlight from "./BorderHighlight";

export default function Hero() {
  return (
    <BorderHighlight
      id={"hero"}
      className={
        "relative flex flex-col items-start justify-center w-full lg:w-fit sm:min-w-[380px]  h-[560px] min-h-[560px] border border-[#3d3d3d] p-10 rounded-md overflow-hidden"
      }
    >
      <div className="h-full w-full">
        <div className="flex flex-col justify-center items-center ">
          <img
            src="https://avatars.githubusercontent.com/u/141779507?v=4"
            alt="Alejandro Vélez Gómez"
            className="relative rounded-full h-[300px] w-[300px] min-w-[300px] mb-2"
          />
          <p className="font-semibold text-xl text-gray-200 mb-5">
            ¡Hey! Soy Alejandro ✌🏻
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-3xl mb-5 font-medium tracking-tighter  text-gray-200 ">
              Full Stack Developer
            </h1>
            <div className="flex flex-col gap-2 justify-center items-start">
              <div className="inline-flex justify-center items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-gray-200">Medellin, Colombia</p>
              </div>
              <div className="flex flex-row justify-center items-center gap-1">
                <div className="inline-flex items-center justify-center w-6 h-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                </div>
                <p className="text-gray-200">Disponible para trabajar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BorderHighlight>
  );
}
