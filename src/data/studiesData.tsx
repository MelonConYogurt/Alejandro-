export interface Study {
  title: string;
  date: string;
  status: string;
  institution: string;
  certificate: string;
}

export const studies: Study[] = [
  {
    title: "Carrera de desarrollo de software",
    date: "2024-09-14",
    status: "En proceso",
    institution: "Corporación Universitaria Remington",
    certificate: "",
  },
  {
    title: "Carrera de técnica sistemas.",
    date: "2024-09-13",
    status: "Finalizado",
    institution: "CTMA",
    certificate: "/certificados/CTMA.pdf",
  },
];
