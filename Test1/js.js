/*

    //Initialize Leaflet map
    var map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -3,
      maxZoom: 2,
      maxBoundsViscosity: 1.0,
      //zoomControl: false
    });

    //L.control.zoom({ position:'bottomleft' }).addTo(map);
    var bounds = [
      [0, 0],
      [8192, 8192]
    ];

    //Initialize each base layer
    var atlas = L.imageOverlay('images/gtav.png', bounds);
    atlas.addTo(map);  
    map.fitBounds(bounds);
    map.setMaxBounds(bounds)

    var overlay = {};

    //Create titles for each baselayer to add to the Control
    var baseLayers = {
      "MyLayer": MyLayer,
      "Atlas": atlas,
    }

    //Create Control layer and add to map
    var over = L.control.layers(baseLayers, overlay, {
      collapsed: false,
      sortLayers: true
    }).addTo(map);

*/

/*
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -3,
        maxZoom: 2,
        maxBoundsViscosity: 1,
        //zoomControl: false
    });

    var bounds = [[0, 0], [8192, 8192]];

    var atlas = L.imageOverlay('../images/gtav.png', bounds).addTo(map);
    map.fitBounds(bounds);
    map.setMaxBounds(bounds)

    L.control.layers({"Atlas": atlas}, {}, {collapsed: false}).addTo(map);

    document.getElementById("map").style.background = "#0fa8d2";
*/

/*

    const map = L.map('map', {}).setView([-20, -20], 2);

    var MyLayer = L.tileLayer('../tilesmap/{z}/{x}/{y}.png');
    MyLayer.addTo(map);

*/

//const map = L.map('map', {    crs: L.CRS.Simple,    minZoom: -3,    maxZoom: 2,    maxBoundsViscosity: 1,    }).setView([-20, -20], 2);

const map = L.map('map', {}).setView([0, 0], 0);

//var bounds = [[0, 0], [8192, 8192]];


var MyLayer = L.tileLayer('../tilesmap/{z}/{x}/{y}.png').addTo(map);
//var atlas = L.imageOverlay('../images/gtav.png', bounds).addTo(map);

//map.fitBounds(bounds);
//map.setMaxBounds(bounds)

document.getElementById("map").style.background = "#0fa8d2";

//L.control.layers({"Atlas": atlas}, {}, {collapsed: false}).addTo(map);