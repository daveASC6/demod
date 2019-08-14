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


mymap.on('dblclick', 
	function(e){
var coord = e.latlng.toString().split(',');
var lati = coord[0].split('(');
var lng = coord[1].split(')');

let geo = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng[0]},${lati[1]}.json?access_token=pk.eyJ1IjoiZGF2ZWJvbHQxNSIsImEiOiJjano0bTZxZ3EwMjd5M2dxY285YnA5YnM2In0.b67AYjcuzhlLxeUVITvHvg`

let adpr = fetch(geo);

adpr.then(function(resp){
    return resp.json()
}).then(function(pin){
   let address = pin.features[0].place_name;
   let marker = L.marker(e.latlng).addTo(mymap);
   let popup = L.popup();
   popup.setContent(address+ '<button  type="button" class="buttonload" data-toggle="modal" data-target="#myModal" style="font-family: Unica One" style="color: red"> SET STREETSHOW </button>');
    marker.bindPopup(popup).openPopup();
    L.D
})

alert("You clicked the map at LAT: " + lati[1] + " and LONG: " + lng[0]);
   

 	});

