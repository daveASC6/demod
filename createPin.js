const db = firebase.firestore();
let numPins = 0;
newPinId = "pin-"+numPins+1;

let prfrmName = document.getElementById("name");
let prfrmTime = document.getElementById("time");
let prfrmPlaceLA = document.getElementById("latitude");
let prfrmPlaceLO = document.getElementById("longitude");
let crtPinButton = document.getElementById("crtPinpoint");

$("#showtime").submit(function(e){
  e.preventDefault();
  let address =     window.localStorage.getItem("address");
  let latlng =JSON.parse(window.localStorage.getItem("latlng"));
  let name = $("#name").val();
  addMarker(address,latlng,name)
  


    //    L.marker([prfrmPlaceLA.value, prfrmPlaceLO.value]).addTo(mymap)
    // .bindPopup(prfrmName.value + " at "+ address+ prfrmTime.value).openPopup();
})
// crtPinButton.addEventListener("click", function(e){
//     e.preventDefault();
//     alert(123);

// });

function createPinpoint(){
db.collection("events").doc(newPinId).set({
    LONGITUDE: prfrmPlaceLO.value,
    LATITUDE: prfrmPlaceLA.value,
    TITLE: prfrmName.value,
    TIME: prfrmTime.value
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
     document.getElementById("loginStatus").innerText = `Signed in as ${user.email}`
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });