document.addEventListener("DOMContentLoaded", () => {
  renderData();
});

const getData = () => {
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

  const yourUrl =
    "https://datos.comunidad.madrid/catalogo/api/action/datastore_search?id=1dd3e628-6f06-45e5-bb7b-36d6e6e557cf&limit=8474";

  return fetch(corsAnywhere + yourUrl, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    }),
  })
    .then((response) => response.json())
    .then((data) => data.result.records)
    .catch((err) => console.log(err));
};

const renderData = async () => {
  const desfibriladores = await getData();

  desfibriladores.forEach((desfibrilador) => {
    const {
      direccion_via_codigo,
      direccion_via_nombre,
      direccion_portal_numero,
      direccion_codigo_postal,
      horario_acceso,
    } = desfibrilador;
    console.log(desfibrilador);
  });
};
