const dtb = firebase.firestore();
let numEvents = 0;





dtb.collection("events").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        numEvents += 1;
        let obj = doc.data();
        console.log(obj["LOCATION"]);
        if(obj["LOCATION"] != undefined ){
            let latlng  = [
              doc.data().LOCATION.latitude,
              doc.data().LOCATION.longitude
            ]
            let marker = L.marker(latlng).addTo(mymap);
            let popup = L.popup();
    popup.setContent(name);
     marker.bindPopup(popup).openPopup();



        }
        // console.log(doc.data());
    });
});

newEventId = "event-"+numEvents+1;

//Whenever the user is signed in, the Login/SignIn button in the navbar changes to "signed in as (email name)"
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