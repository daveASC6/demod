// get HTML Elements
const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const createBtn = document.getElementById("createBtn");


//add event listeners
loginBtn.addEventListener("click", login);
createBtn.addEventListener("click", createAccount);

//Authentication
const auth = firebase.auth();

//create account
function createAccount(event){
  event.preventDefault();//stops the button click from refreshing the page
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function(){
      user = auth.currentUser;
      const profile = {
        displayName: email.value
      }
      user.updateProfile(profile);
      console.log(user);
      window.location.href = "C:/Users/ASCStudent/Documents/ss/demod/index.html";
    })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  alert(errorMessage);
  // ...
});
}

//log in
function login(event){
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(function(){
      console.log("LOGIN SUCCESS");
      window.location.href = "C:/Users/ASCStudent/Documents/ss/demod/index.html";
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