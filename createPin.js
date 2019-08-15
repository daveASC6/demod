const db = firebase.firestore();

let prfrmName = document.getElementById("name");
let prfrmTime = document.getElementById("time");
let prfrmPlaceLA = document.getElementById("latitude");
let prfrmPlaceLO = document.getElementById("longitude");
let crtPinButton = document.getElementById("crtPinpoint");

$("#showtime").submit(function(e){
  e.preventDefault();
  let address =     window.localStorage.getItem("address");
  let point =JSON.parse(window.localStorage.getItem("latlng"));
  let name = $("#name").val();
  addMarker(address,point,name)
  createPinpoint(point)

})


function createPinpoint(point){
  let docId = prfrmName.value +"-"+ prfrmTime.value;

db.collection("events").doc(docId).set({
   LOCATION: new firebase.firestore.GeoPoint(point.lat,point.lng),
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