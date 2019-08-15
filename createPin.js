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
     //make a way to show that the user is logged in
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
//   var ref = new Firebase('https://yours.firebaseio.com/path/to/items/');
// var now = Date.now();
// var cutoff = now - 24 * 60 * 60 * 1000;
// var old = ref.orderByChild('timestamp').endAt(cutoff).limitToLast(1);
// var listener = old.on('child_added', function(snapshot) {
//     snapshot.ref.remove();
// });