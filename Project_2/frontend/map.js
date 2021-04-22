// for (var i = 0; i < stationInfo.length; i++) {
//     // Create a new station object with properties of both station objects
//     var station = Object.assign({}, stationInfo[i], stationStatus[i]);
//     // If a station is listed but not installed, it's coming soon
//     if (!station.is_installed) {
//       stationStatusCode = "COMING_SOON";
//     }
//     // If a station has no bikes available, it's empty
//     else if (!station.num_bikes_available) {
//       stationStatusCode = "EMPTY";
//     }
//     // If a station is installed but isn't renting, it's out of order
//     else if (station.is_installed && !station.is_renting) {
//       stationStatusCode = "OUT_OF_ORDER";
//     }
//     // If a station has less than 5 bikes, it's status is low
//     else if (station.num_bikes_available < 5) {
//       stationStatusCode = "LOW";
//     }
//     // Otherwise the station is normal
//     else {
//       stationStatusCode = "NORMAL";
//     }
//     // Update the station count
//     stationCount[stationStatusCode]++;
//     // Create a new marker with the appropriate icon and coordinates
//     var newMarker = L.marker([station.lat, station.lon], {
//       icon: icons[stationStatusCode]
//     });