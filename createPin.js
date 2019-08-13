const db = firebase.firestore();
let numPins = 0;
newPinId = "pin-"+numPins+1;

let prfrmName = document.getElementById("name");
let prfrmPlace = document.getElementById("location");
let prfrmTime = document.getElementById("time");
let crtPinButton = document.getElementById("crtPinpoint");

crtPinButton.addEventListener("click", function(e){
    e.preventDefault();
    createPinpoint();
});

function createPinpoint(){
db.collection("events").doc(newPinId).set({
    LOCATION: prfrmPlace.value,
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