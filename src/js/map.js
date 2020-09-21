// import { json_2020_LASAN_Ecotopes_0 } from "./data/2020_LASAN_Ecotopes_0.js";
import { json_LA_River_v2_no_mz_2 } from "../data/LA_River_v2_no_mz_2.js";
import { json_watershed_1 } from "../data/watershed_1.js";
import L from "leaflet";

export function initMap() {
  var map = L.map("map", {
    zoomControl: true,
    maxZoom: 28,
    minZoom: 1,
    initialZoom: 7,
  }).fitBounds([
    [33.679246670913905, -118.6974911092205],
    [34.45898102165338, -117.94488821092733],
  ]);
  map.attributionControl.setPrefix(
    '<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>'
  );

  return map;
}

export function createImageLayer(rasterFile) {
  var imgBounds = [
    [33.75434896789, -118.72052904751999],
    [34.400436624200005, -117.94987526768],
  ];
  return new L.imageOverlay(rasterFile, imgBounds);
}

// function style_2020_LASAN_Ecotopes_0_0() {
//   return {
//     opacity: 1,
//     color: "rgba(35,35,35,1.0)",
//     dashArray: "",
//     lineCap: "butt",
//     lineJoin: "miter",
//     weight: 1.0,
//     fill: true,
//     fillOpacity: 1,
//     fillColor: "rgba(243,166,178,1.0)",
//     interactive: false,
//   };
// }
// var layer_2020_LASAN_Ecotopes_0 = new L.geoJson(json_2020_LASAN_Ecotopes_0, {
//   style: style_2020_LASAN_Ecotopes_0_0,
// });
// map.addLayer(layer_2020_LASAN_Ecotopes_0);

export function createRiverLayer() {
  var style = {
    opacity: 1,
    color: "rgba(19,133,255,1.0)",
    dashArray: "",
    lineCap: "square",
    lineJoin: "bevel",
    weight: 1.0,
    fillOpacity: 0,
    interactive: false,
  };

  return new L.geoJson(json_LA_River_v2_no_mz_2, {
    style: style,
  });
}

export function createWatershedLayer() {
  var style = {
    opacity: 1,
    color: "rgba(35,35,35,1.0)",
    dashArray: "",
    lineCap: "butt",
    lineJoin: "miter",
    weight: 1.0,
    fill: true,
    fillOpacity: 0.5,
    fillColor: "rgba(255,231,199,1.0)",
    interactive: false,
  };

  return new L.geoJson(json_watershed_1, {
    style: style,
  });
}
