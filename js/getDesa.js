let marker, map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 40.46323, lng: -3.6505348 },
  });

  const places = [
    [{ lat: 40.46323, lng: -3.6505348 }, "Canillas"],
    [{ lat: 40.4128661, lng: -3.7136256 }, "Plaza de la paja"],
    [{ lat: 40.4307436, lng: -3.7034788 }, "Puerta de Alcalá"],
  ];

  places.forEach(([position, title], i) => {
    marker = new google.maps.Marker({
      position,
      map,
      title: `${title}`,
    });
  });
  getPosition();
}

function getPosition() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    const watchPos = geoLoc.watchPosition(mapCenter, onError);
  } else {
    alert("Tu navegador no acepta geolocalización");
  }
}

function mapCenter(position) {
  const newPosition = {
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  };
  map.setCenter(newPosition);
  map.setZoom(18);
}
function onError(error) {
  console.error(error);
}
