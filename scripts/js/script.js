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
var MyLayer = L.tileLayer('../../tilesmap/{z]/{x}/{y}.png').addTo(map);
var atlas = L.imageOverlay('images/gtav.png', bounds);
var satellite = L.imageOverlay('images/GTAV_SATELLITE_8192x8192.png', bounds)
var road = L.imageOverlay('images/GTAV_ROADMAP_8192x8192.png', bounds)
map.fitBounds(bounds);
map.setMaxBounds(bounds)

// Load each layer from it's corresponding GeoJSON file
var ammunation = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/ammunation.png',
      iconSize: [48, 48], // size of the icon
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Ammu-Nation.json", function (data) {
  ammunation.addData(data).addTo(map);
});

var ammunationwrange = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/ammunationwrange.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Ammu-Nation with Range.json", function (data) {
  ammunationwrange.addData(data);
});

var barbershop = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/barbershop.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Barber Shop.json", function (data) {
  barbershop.addData(data);
});

var repair = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/repairshop.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Repair Shop.json", function (data) {
  repair.addData(data);
});

var clothing = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/clothingstore.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Clothing Stores.json", function (data) {
  clothing.addData(data);
});

var cablecar = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/cablecar.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Cable Car.json", function (data) {
  cablecar.addData(data);
});

var carwash = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/carwash.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Car Wash.json", function (data) {
  carwash.addData(data);
});

var tattooparlor = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/tattooparlor.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Tattoo Parlor.json", function (data) {
  tattooparlor.addData(data);
});

var tennis = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/tennis.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Tennis.json", function (data) {
  tennis.addData(data);
});

var fairride = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/fairride.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Fair Ride.json", function (data) {
  fairride.addData(data);
});

var golf = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/golf.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Golf.json", function (data) {
  golf.addData(data);
});

var hangerhelipad = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/hangerhelipad.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Hanger - Helipad.json", function (data) {
  hangerhelipad.addData(data);
});

var safehouse = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/safehouse.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Safehouse.json", function (data) {
  safehouse.addData(data);
});

var triathalon = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/triathalon.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Triathalon.json", function (data) {
  triathalon.addData(data);
});

var movietheater = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/movietheater.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Movie Theater.json", function (data) {
  movietheater.addData(data);
});

var stripclub = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/stripclub.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Strip Club.json", function (data) {
  stripclub.addData(data);
});

var race = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    //Create icon for marker
    var icn = L.icon({
      iconUrl: 'icons/race.png',
      iconSize: [48, 48],
    });
    var marker = L.marker(latlng, {
      icon: icn
    });
    marker.bindPopup("<font color=white><h4>" + feature.properties.name + '</h4>' + "<img src='" + feature.properties.imgname + "' class='popupImage'></font>");
    return marker;
  }
})
$.getJSON("geojson/Race.json", function (data) {
  race.addData(data);
});

//Create titles for each layer with mini icons to add to the Control
var overlay = {
  "<img src='icons/ammunation.png'align='center'width='30' height='30' /> Ammu-Nation": ammunation,
  "<img src='icons/ammunationwrange.png'align='center'width='30' height='30'/> Ammu-Nation w/ Gun Range": ammunationwrange,
  "<img src='icons/barbershop.png'align='center'width='30' height='30'/> Barber Shop": barbershop,
  "<img src='icons/repairshop.png'align='center'width='30' height='30'/> Repair Shop": repair,
  "<img src='icons/clothingstore.png'align='center'width='30' height='30'/> Clothing Store": clothing,
  "<img src='icons/cablecar.png'align='center'width='30' height='30'/> Cable Car": cablecar,
  "<img src='icons/carwash.png'align='center'width='30' height='30'/> Car Wash": carwash,
  "<img src='icons/movietheater.png'align='center'width='30' height='30'/> Movie Theater": movietheater,
  "<img src='icons/tattooparlor.png'align='center'width='30' height='30'/> Tattoo Parlor": tattooparlor,
  "<img src='icons/tennis.png'align='center'width='30' height='30'/> Tennis": tennis,
  "<img src='icons/fairride.png'align='center'width='30' height='30'/> Fair Ride": fairride,
  "<img src='icons/golf.png'align='center'width='30' height='30'/> Golf": golf,
  "<img src='icons/hangerhelipad.png'align='center'width='30' height='30'/> Hanger/Helipad": hangerhelipad,
  "<img src='icons/safehouse.png'align='center'width='30' height='30'/> Safehouse": safehouse,
  "<img src='icons/triathalon.png'align='center'width='30' height='30'/> Triathalon": triathalon,
  "<img src='icons/stripclub.png'align='center'width='30' height='30'/> Strip Club": stripclub,
  "<img src='icons/race.png'align='center'width='30' height='30'/> Race": race
};
//Create titles for each baselayer to add to the Control
var baseLayers = {
  "MyLayer": MyLayer,
  "Atlas": atlas,
  "Road": road,
  "Satellite": satellite
}

//Create Control layer and add to map
var over = L.control.layers(baseLayers, overlay, {
  collapsed: false,
  sortLayers: true
}).addTo(map);

/*    
const layer = L.titleLayer('tilesmap/{z}/{x}/{y}.png', {
    minZoom: 0,
    maxZoom: 5,
    noWrap: true,
    tms: false,
    reusrTiles: true
}).addTo(map);
 
//Add GTAV logo to lower left hand corner
L.Control.Watermark = L.Control.extend({
  onAdd: function(map) {
 
    var img = L.DomUtil.create('img', 'gtav');
    img.src = 'images/logo.png';
    img.style.width = '200px';
    return img;
  }
});
L.control.watermark = function(opts) {
  return new L.Control.Watermark(opts);
}
//Add logo to map
L.control.watermark({
  position: 'bottomleft'
}).addTo(map);
*/

//When the map's base layer is changed, change the color of the background
//to match the map
map.on('baselayerchange', function (layer) {
  if (layer.name == "Road") {
    document.getElementById("map").style.background = "#1862ad";
  }
  if (layer.name == "Satellite") {
    document.getElementById("map").style.background = "#143d6b";
  }
  if (layer.name == "Atlas") {
    document.getElementById("map").style.background = "#0fa8d2";
  }
});
