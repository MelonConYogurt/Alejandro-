import {Tecnologies} from "./tecnologiesData";

interface Svg {
  name: string;
  class: string;
  icon: any;
}

export interface Project {
  title: string;
  description: string;
  img: URL;
  tecnologies: Svg[];
  repo: URL;
  video: URL | string;
}

export const projects = [
  {
    title: "🚗 Renta de Autos",
    description:
      "⚙️ Plataforma innovadora para gestionar el alquiler de automóviles y reservas.",
    img: new URL(
      "https://res.cloudinary.com/divr5jb7h/image/upload/v1738798351/723_1x_shots_so_hkve5t.png"
    ),
    tecnologies: [
      Tecnologies.PYTHON,
      Tecnologies.NEXT,
      Tecnologies.TAILWIND,
      Tecnologies.GIT,
      Tecnologies.GITHUB,
      Tecnologies.POSTGRESQL,
      Tecnologies.SQLITE,
      Tecnologies.TYPESCRIPT,
      Tecnologies.FASTAPI,
      Tecnologies.CSS,
      Tecnologies.HTML,
      Tecnologies.REACT,
    ],
    repo: new URL("https://github.com/MelonConYogurt/cart-rent-backend"),
    video: new URL(
      "https://www.youtube.com/watch?v=28DdvMYnX4Q&t=3s&ab_channel=AlejandroVg"
    ),
  },
  {
    title: "📦 Inventario",
    description:
      "📈 Sistema integral para la gestión de inventarios y gráficos interactivos.",
    img: new URL(
      "https://res.cloudinary.com/divr5jb7h/image/upload/v1738798347/171_1x_shots_so_wkx804.png"
    ),
    tecnologies: [
      Tecnologies.PYTHON,
      Tecnologies.NEXT,
      Tecnologies.TAILWIND,
      Tecnologies.GIT,
      Tecnologies.GITHUB,
      Tecnologies.POSTGRESQL,
      Tecnologies.TYPESCRIPT,
      Tecnologies.FASTAPI,
      Tecnologies.CSS,
      Tecnologies.HTML,
      Tecnologies.REACT,
    ],
    repo: new URL("https://github.com/MelonConYogurt/inventory-react-app"),
    video: new URL(
      "https://www.youtube.com/watch?v=ZHEEwa6ybm0&ab_channel=AlejandroVg"
    ),
  },
  {
    title: "👟 Tienda Tennis",
    description:
      "🛍️ Ecommerce minimalista con API RESTful gestionada a través de Strapi.",
    img: new URL(
      "https://res.cloudinary.com/divr5jb7h/image/upload/v1738798348/64_1x_shots_so_bxgzky.png"
    ),
    tecnologies: [
      Tecnologies.NEXT,
      Tecnologies.TAILWIND,
      Tecnologies.GIT,
      Tecnologies.GITHUB,
      Tecnologies.POSTGRESQL,
      Tecnologies.TYPESCRIPT,
      Tecnologies.STRAPI,
      Tecnologies.CSS,
      Tecnologies.HTML,
      Tecnologies.REACT,
    ],
    repo: new URL("https://github.com/MelonConYogurt/e-commerce-frontend"),
    video: new URL(
      "https://www.youtube.com/watch?v=6odIauvyOmE&t=25s&ab_channel=AlejandroVg"
    ),
  },
  {
    title: "📝 Blog",
    description:
      "💡 Blog y portafolio moderno construido con Next.js, React y Strapi.",
    img: new URL(
      "https://res.cloudinary.com/divr5jb7h/image/upload/v1738798349/153_1x_shots_so_zo7mei.png"
    ),
    tecnologies: [
      Tecnologies.NEXT,
      Tecnologies.TAILWIND,
      Tecnologies.GIT,
      Tecnologies.GITHUB,
      Tecnologies.POSTGRESQL,
      Tecnologies.TYPESCRIPT,
      Tecnologies.STRAPI,
      Tecnologies.CSS,
      Tecnologies.HTML,
      Tecnologies.REACT,
    ],
    repo: new URL("https://github.com/MelonConYogurt/react-portfolio-blog-0"),
    video: new URL(
      "https://www.youtube.com/watch?v=PutSwK-Zsnc&t=2s&ab_channel=AlejandroVg"
    ),
  },
  {
    title: "📊 Tabla",
    description:
      "🔢 Tabla interactiva con filtrado avanzado y backend optimizado en SQL y FastAPI.",
    img: new URL(
      "https://res.cloudinary.com/divr5jb7h/image/upload/v1738798561/144_1x_shots_so_u9307m.png"
    ),
    tecnologies: [
      Tecnologies.PYTHON,
      Tecnologies.NEXT,
      Tecnologies.TAILWIND,
      Tecnologies.GIT,
      Tecnologies.GITHUB,
      Tecnologies.POSTGRESQL,
      Tecnologies.TYPESCRIPT,
      Tecnologies.FASTAPI,
      Tecnologies.CSS,
      Tecnologies.HTML,
      Tecnologies.REACT,
    ],
    repo: new URL(
      "https://github.com/MelonConYogurt/Tabla-paginada-y-filtrada-con-sql-python-react"
    ),
    video: new URL("https://www.youtube.com/watch?v=r6aSZQ_WMvU"),
  },
  {
    title: "🖥️ Inventario Desktop",
    description:
      "👨🏻‍💻 Aplicación de escritorio en Python para gestionar inventarios con SQLite y operaciones CRUD.",
    img: new URL(
      "https://res.cloudinary.com/divr5jb7h/image/upload/v1738798353/844_1x_shots_so_pepr5u.png"
    ),
    tecnologies: [
      Tecnologies.PYTHON,
      Tecnologies.GIT,
      Tecnologies.GITHUB,
      Tecnologies.SQLITE,
    ],
    repo: new URL(
      "https://github.com/MelonConYogurt/gui-python-inventarios-customtkinter"
    ),
    video: new URL(
      "https://www.youtube.com/watch?v=YBmZWNpgOa8&t=156s&ab_channel=AlejandroVg"
    ),
  },
  {
    title: "🕷️ Scraper",
    description:
      "🔍 Herramienta automatizada en Python para la extracción de datos.",
    img: new URL(
      "https://res.cloudinary.com/divr5jb7h/image/upload/v1738798348/251_1x_shots_so_hfovcy.png"
    ),
    tecnologies: [
      Tecnologies.PYTHON,
      Tecnologies.GIT,
      Tecnologies.GITHUB,
      Tecnologies.SQLITE,
    ],
    repo: new URL(
      "https://github.com/MelonConYogurt/gui-extraccion-data-customtkinter"
    ),
    video: new URL(
      "https://www.youtube.com/watch?v=Sy-Kcgu5nG0&t=216s&ab_channel=AlejandroVg"
    ),
  },
  {
    title: "🧾 Factura",
    description:
      "📄 API que genera facturas PDF a partir de datos en JSON usando FastAPI y Puppeteer.",
    img: new URL(
      "https://res.cloudinary.com/divr5jb7h/image/upload/v1738798351/732_1x_shots_so_hv0lfg.png"
    ),
    tecnologies: [
      Tecnologies.PYTHON,
      Tecnologies.GIT,
      Tecnologies.GITHUB,
      Tecnologies.SQLITE,
      Tecnologies.FASTAPI,
    ],
    repo: new URL("https://github.com/MelonConYogurt/api-html-pdf-generator"),
    video: "",
  },
];
