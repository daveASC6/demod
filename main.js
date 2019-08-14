let radius;

var map;
var mymap = L.map('mapid').setView([40.7831, -73.9712], 15);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZGF2ZWJvbHQxNSIsImEiOiJjano0bTZxZ3EwMjd5M2dxY285YnA5YnM2In0.b67AYjcuzhlLxeUVITvHvg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGF2ZWJvbHQxNSIsImEiOiJjano0bTZxZ3EwMjd5M2dxY285YnA5YnM2In0.b67AYjcuzhlLxeUVITvHvg'
}).addTo(mymap);

mymap.locate({setView: true, maxZoom: 12});
function onLocationFound(e) {
    radius = e.accuracy + 1609.34;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are here!").openPopup();


}

mymap.on('locationfound', onLocationFound);
 function onLocationError(e) {
    alert(e.message);
 }

mymap.on('locationerror', onLocationError);

var marker2 = L.marker([40.8846442, -73.8636568]).addTo(mymap)
.bindPopup("ethan").openPopup();


mymap.on('dblclick', 
	function(e){
var coord = e.latlng.toString().split(',');
var lati = coord[0].split('(');
var lng = coord[1].split(')');
alert("You clicked the map at LAT: " + lati[1] + " and LONG: " + lng[0]);
    L.marker(e.latlng).addTo(mymap);
    var marker = L.marker().addTo(mymap)
.bindPopup("ethan").openPopup();

 	});

