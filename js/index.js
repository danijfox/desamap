document.addEventListener("DOMContentLoaded", () => {
  getDesaData();
});

const getDesaData = () => {
  const url =
    "https://datos.comunidad.madrid/catalogo/dataset/35609dd5-9430-4d2e-8198-3eeb277e5282/resource/c38446ec-ace1-4d22-942f-5cc4979d19ed/download/desfibriladores_externos_fuera_ambito_sanitario.json";

  return fetch(url)
    .then((response) => response.json())
    .then((result) => console.log(result.data));
};
