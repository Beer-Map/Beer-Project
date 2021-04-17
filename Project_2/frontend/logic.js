
var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 13
  });
  


L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

d3.json("http://127.0.0.1:5000/beers").then(function(data){
    createFeatures(data.features);
    for (var i = 0; i < data.length; i++) {
        var latitude = lat[i];
        var longitude = long[i]; 
        if (location) {
          L.marker([latitude, longitude]).addTo(myMap);
        }
    }
});

// function createFeatures (data)
    
    
//     var myMap = L.map("map", {
//         center: [45.52, -122.67],
//         zoom: 13
//       });
    
    
//     L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//         tileSize: 512,
//         maxZoom: 18,
//         zoomOffset: -1,
//         id: "mapbox/satellite-v9",
//         accessToken: API_KEY
//       }).addTo(myMap);
      
//       // Create a new marker
//       // Pass in some initial options, and then add it to the map using the addTo method
      

      
      
//     var marker = new Array();

//       for (var i=0; i<data.length; i++){
//           coordinates = [lat[i], long[i]]
//           marker.push(coordinates)
//       }
      
//     }).addTo(myMap);
      
//       // Binding a pop-up to our marker
//       marker.bindPopup("Hello There!");


  


// })



// // d3.json("http://localhost:5000/beers").then(function(data){
// //     function styleInfo(feature){
// //         return {
// //             opacity: 1,
// //             fillOpacity: 1,
// //             fillColor: getColor(feature.properties.mag),
// //             color: "#00000",
// //             radius: getRadius(feature.properties.mag),
// //             stroke: true,
// //             weight: 0.5
// //         }
      