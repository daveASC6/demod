const db = firebase.firestore();
let numEvents = 0;

db.collection("events").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        numEvents += 1;
        console.log(doc.data());
    });
});

newEventId = "event-"+numEvents+1;

// db.collection("events").doc(newEventId).set({
//     LOCATION: "Los Angeles",
//     TITLE: "Living ma Life",
//     TIME: Date()
// })
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });

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