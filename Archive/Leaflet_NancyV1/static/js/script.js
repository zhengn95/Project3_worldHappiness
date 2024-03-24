function createMap(happinessScores) {
  // Create the tile layer that will be the background of our map.
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Create a baseMaps object to hold the streetmap layer.
  let baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the Happiness Score layer.
  let overlayMaps = {
    "Happiness Score": happinessScores
  };

  // Create the map object with options.
  let map = L.map("map-id", {
    center: [28, 3], // Centered at the approximate coordinates for Algeria
    zoom: 2.5, // Adjust the zoom level as needed
    layers: [streetmap, happinessScores]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false,
    position: "topleft"
  }).addTo(map);
}

function getColor(score) {
  if (score > 7) {
    return '#008000'; // Green
  } else if (score > 6) {
    return '#0000FF'; // Blue
  } else if (score > 5) {
    return '#800080'; // Purple
  } else if (score > 4) {
    return '#FF1493'; // Pink
  } else if (score > 3) {
    return '#FF0000'; // Red
  } else {
    return '#FFFF00'; // Yellow
  }
}

function createMarkers(data) {
  // Pull the "stations" property from response.data.
  let countries = data;

  // Define a scale for the happiness score to radius
  let radiusScale = d3.scaleLinear()
    .domain([d3.min(countries, d => d['Ladder score']), d3.max(countries, d => d['Ladder score'])])
    .range([2, 20]); // Set the minimum and maximum radius

  // Initialize an array to hold country markers.
  let countryMarkers = [];

  // Loop through the data array.
  for (let index = 0; index < countries.length; index++) {
    let country = countries[index];

    // Calculate the radius based on the happiness score
    let radius = radiusScale(country['Ladder score']);

    // Get the color based on the happiness score using the getColor function
    let fillColor = getColor(country['Ladder score']);

    // For each country, create a marker, and bind a popup with the country's name and happiness score.
    let countryMarker = L.circleMarker([country['Latitude'], country['Longitude']], {
      radius: radius,
      fillColor: fillColor,
      color: "none", // Remove the outline
      weight: 0, // Set the weight to 0 for no outline
      opacity: 1,
      fillOpacity: 0.8
    }).bindPopup("<h3>Country: </h3><p>" + country['Country name'] + 
      "</p><h3>Happiness Score: </h3><p> " + country['Ladder score'] + "</p>");

    // Add the marker to the countryMarkers array.
    countryMarkers.push(countryMarker);
  }

  // Create a layer group that's made from the country markers array, and pass it to the createMap function.
  createMap(L.layerGroup(countryMarkers));
}

// Read the CSV file using d3.csv and call createMarkers when it completes.
let csv_path = "data/world-happiness-report-2021-with-coordinates.csv";
d3.csv(csv_path).then(createMarkers);



