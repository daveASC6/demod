// get HTML Elements
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const createBtn = document.getElementById("createBtn");


//add event listeners
loginBtn.addEventListener("click", login);
createBtn.addEventListener("click", function(event){
  if (username.value == ""){
    alert("Please enter a Username");
  } else {
    //A BUTTON EVENT NOT A LOGIN EVENT
    createAccount(event);
  }
});

//Authentication
const auth = firebase.auth();


function createAccount(event){
  event.preventDefault();//stops the button click from refreshing the page
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function(){
      user = auth.currentUser;
      const profile = {
        displayName: username.value
      }
      user.updateProfile(profile);
      console.log(user);
      window.location.href = "messages.html";
    })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
});
}

function login(event){
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(function(){
      console.log("LOGIN SUCCESS");
      window.location.href = "messages.html";
    })

    .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

//Tracks the login state of the App
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    user = firebase.auth().currentUser;
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    console.log("Username:" + displayName + " Email: " + email);
    // ...
  } else {
    // User is signed out.
    // ...
  }
});