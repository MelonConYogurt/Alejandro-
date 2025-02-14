import BorderHighlight from "./BorderHighlight";

function Information() {
  return (
    <BorderHighlight
      id="Habilidades"
      className="flex flex-col justify-center items-center border border-[#3d3d3d] p-10 rounded-md max-w-7xl relative w-full"
    >
      <div className="flex flex-col justify-center items-center gap-10 w-full">
        <div className="flex flex-row justify-between items-center w-full mb-5">
          <h2 className="text-xl text-gray-200">Habilidades y Servicios</h2>
        </div>
        <div className="flex flex-col xl:flex-row gap-10 lg:gap-4 w-full">
          <div className="flex flex-col gap-5 w-full xl:w-1/2">
            <div className="flex flex-row w-full gap-4">
              <div>
                <div className="flex justify-center items-center rounded-full w-12 h-12 bg-[#303030] text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-monitor-smartphone"
                  >
                    <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
                    <path d="M10 19v-3.96 3.15" />
                    <path d="M7 19h5" />
                    <rect width="6" height="10" x="16" y="12" rx="2" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-200">
                  Diseño Responsivo
                </h3>
                <p className="text-gray-300 text-sm w-full">
                  Creo sitios web que se adaptan perfectamente a todos los
                  dispositivos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div>
                <div className="flex justify-center items-center rounded-full w-12 h-12 bg-[#303030] text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-rocket"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-200">
                  Rendimiento Optimizado
                </h3>
                <p className="text-gray-300 text-sm">
                  Optimización de cada aspecto, tiempos de carga rápidos y una
                  experiencia fluida.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div>
                <div className="flex justify-center items-center rounded-full w-12 h-12 bg-[#303030] text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-chart-column"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-200">
                  Dashboards
                </h3>
                <p className="text-gray-300 text-sm">
                  Gráficos intuitivos para visualizar los datos mas relevantes.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-1/2">
            <h2 className="text-xl font-semibold mb-2 text-gray-200">
              Servicios
            </h2>
            <p className="text-sm mb-4 text-gray-300">
              Ofrezco soluciones tecnológicas a medida, incluyendo análisis de
              proyectos, desarrollo web y creación de aplicaciones de
              escritorio.
            </p>
            <p className="text-sm mb-4 text-gray-300">
              Desde la planificación hasta la implementación, te acompaño en
              cada etapa para asegurar resultados innovadores y eficientes.
            </p>
            <blockquote className="p-4 my-4 border-s-4 border-[#3d3d3d] bg-[#303030] rounded-lg w-fit">
              <p className="text-sm italic font-medium leading-relaxed text-gray-200">
                "Todo lo que una persona puede imaginar, otros pueden hacerlo
                realidad."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </BorderHighlight>
  );
}

export default Information;
