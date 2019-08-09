var map;
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 40.7831, lng: -73.9712},
   zoom: 8
 });
}