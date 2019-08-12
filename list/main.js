function initMap() {
  var myLatLng = {lat: 40.783, lng: -73.971};

  var map = new google.maps.Map(document.getElementById('map'), {
   center: myLatLng,
   zoom: 4
 });
 
  var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: 'wellcome to hellcome'
});
var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Manhattan</h1>'+
          '<div id="bodyContent">'+
          '<p><b>Manhattan</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
          'sandstone rock formation in the southern part of the '+            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+            'south west of the nearest large town, Alice Springs; 450&#160;km '+
          'Heritage Site.</p>'+
          '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
          'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
          '(last visited June 22, 2009).</p>'+
          '</div>'+
          '</div>';
        //makes the content of the box the text created in contentString
        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        //opens the text when the marker is clicked
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
}