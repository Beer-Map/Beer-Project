
var layers = {
  Heat: new L.LayerGroup(),
  Brewery_locations: new L.LayerGroup(),
  Cluster : new L.LayerGroup()
};

var overlays = {
  "Heat Map": layers.Heat,
  "Brewery Locations": layers.Brewery_locations,
  "Cluster Map": layers.Cluster
};

var myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 4,
  layers: [
    layers.Brewery_locations,
    layers.Heat,
    layers.Cluster]
});
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);





// d3.json("http://127.0.0.1:5000/alldata").then(function(data){
//   var lat = data.lat
//   var long = data.long
//   var name = data.name
//   var address = data.address
//   var city = data.city
//   var state = data.province
//   for(var i = 0; i<data.name.length; i++) {
//     L.marker([lat[i], long[i]])
//       .bindPopup("<h1>" + name[i] + "</h1> <hr> <h3>State: " + state[i] + "</h3><h3>City: " + city[i] + "</h3><h3>Address: " + address[i] + "</h3>")
//       .addTo(layers.Brewery_locations);
//   }
// });

d3.json("http://127.0.0.1:5000/alldata").then(function(data){
  var lat = data.lat
  var long = data.long
  var name = data.name
  var address = data.address
  var city = data.city
  var state = data.province
  var markers = L.markerClusterGroup();
  for (var i = 0; i < data.city.length; i++) {
    markers.addLayer(L.marker([lat,long]))
    .addTo(layers.Cluster);
    }
})
//   for(var i = 0; i<data.name.length; i++) {
//     L.marker([lat[i], long[i]])
//       .bindPopup("<h1>" + name[i] + "</h1> <hr> <h3>State: " + state[i] + "</h3><h3>City: " + city[i] + "</h3><h3>Address: " + address[i] + "</h3>")
//       .addTo(layers.Cluster);
//   }
// });


// d3.json("http://127.0.0.1:5000/alldata").then(function(data){
//   var lat = data.lat
//   var long = data.long
//   var name = data.name
//   var address = data.address
//   var city = data.city
//   var state = data.province
//   for(var i = 0; i<data.length; i++) {
//     L.markerClusterGroup([lat[i], long[i]])
//       .bindPopup("<h1>" + name[i] + "</h1> <hr> <h3>State: " + state[i] + "</h3><h3>City: " + city[i] + "</h3><h3>Address: " + address[i] + "</h3>")
//   }
//   myMap.addTo(layers.Cluster);
// });


// d3.json("http://127.0.0.1:5000/alldata").then(function(data){
//   var lat = data.lat
//   var long = data.long
//   var name = data.name
//   var address = data.address
//   var city = data.city
//   var state = data.province
//   var heatArray = [];
//   for(var i = 0; i<data.length; i++) {
//     var location = [lat[i], long[i]]
//     if (location) {
//       heatArray.push([location.coordinates[1], location.coordinates[0]]);
//     }
//   }
//   var heat = L.heatLayer(heatArray, {
//     radius: 20,
//     blur: 35
//   }).addTo(layers.Heat);
// });


L.control.layers(overlays).addTo(myMap);
// var coordinates = L.marker([lat[i], long[i]])
    
// beerMarkers.push(coordinates)}
// L.marker(coordinates)
//   .addTo(myMap);

// var marker = L.marker([data.lat[1], data.long[1]], {
//   draggable: true,
//   title: data.name[1]
// }).addTo(myMap);

// function createMarkers(beer_data){
//   function onEachFeauture(location){
//     layer.bindPopup("<h3>" + data.name +
//     "</h3><hr><p>" + data.city + "</p><p>" + data.address + "</p>");
//   }
//   var newMarker = L.marker([data.lat, data.long], )
// createMap(newMarker);
// }




