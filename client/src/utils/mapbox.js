mapboxgl.accessToken =
  "pk.eyJ1IjoiYXBwc29sbyIsImEiOiJjbDA5dmptYWowaGcwM2lwOTY0dGxlOWp3In0.kulAfdlLVedrwX0Yh0qruQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/satellite-v9", // style URL
  center: [-80.8058375, 35.4136675], // starting position [lng, lat]
  zoom: 16, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

let wells = [
    {
        name: "MW-01",
        coord: [-80.8071362, 35.4150158],
        type: "Monitoring Well",
        color: "#034efc",
    },
    {
        name: "MW-02",
        coord: [-80.8077347, 35.4148722],
        type: "Monitoring Well",
        color: "#034efc",
    },
    {
        name: "MW-03",
        coord: [-80.8062991611111, 35.4153004333333],
        type: "Monitoring Well",
        color: "#034efc",
    },
    {
        name: "MW-04",
        coord: [-80.8077609, 35.4147390111111],
        type: "Monitoring Well",
        color: "#034efc",
    },
    {
        name: "MW-05",
        coord: [-80.8071658305555, 35.4153602972222],
        type: "Monitoring Well",
        color: "#034efc",
    },
    {
        name: "MW-06",
        coord: [-80.807502325, 35.4152348583333],
        type: "Monitoring Well",
        color: "#034efc",
    },
    {
        name: "RW-01",
        coord: [-80.8061025861111, 35.4136199027778],
        type: "Recovery Well",
        color: "#fc034e",
    },
    {
        name: "RW-02",
        coord: [-80.8061641361111, 35.4135512222222],
        type: "Recovery Well",
        color: "#fc034e",
    },
]
function createCutomeMarker(color) {
  let el = document.createElement("div");
  el.style.width = `8px`;
  el.style.height = `8px`;
  el.style.backgroundColor = color;
  el.style.borderRadius = "100%";
  el.style.border = "solid #FFF";
  return el;
}

for (let i = 0; i < wells.length; i++) {
  let customMarker = createCutomeMarker(wells[i].color);

  let marker = new mapboxgl.Marker(customMarker)
    .setLngLat(wells[i].coord)
    .setPopup(
      new mapboxgl.Popup({ offser: 25 }).setHTML(
        `<h3>${wells[i].type}</h3><p>${wells[i].name}</p>`
      )
    )
    .addTo(map);
}
