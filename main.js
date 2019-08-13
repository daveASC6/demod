

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
    var radius = e.accuracy + 1609.34;

    L.marker(e.latlng).addTo(mymap)
        .bindPopup("You are here!").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
}

mymap.on('locationfound', onLocationFound);
 function onLocationError(e) {
    alert(e.message);
 }

mymap.on('locationerror', onLocationError);

var marker1 = L.marker([40.7848, -73.9448]).addTo(mymap)
.bindPopup("ethan").openPopup();

var marker2 = L.marker([40.7248, -73.9648]).addTo(mymap)
.bindPopup("ethan").openPopup();
mymap.on('zoomend', function() {
    var currentZoom = mymap.getZoom();
    if(currentZoom >= 0) {
      
    }
    else {
      marker2.hide();
    }
});