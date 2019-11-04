function setup(){

var userEmail = document.getElementById("email_field").value;
var userPass = document.getElementById("password_field").value;

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  /*welcome new user*/
  firebase.database().ref("userEmail").child(user.uid).set(...)


})
};


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
      });

//  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {


    // ...
  //});

//}

function logout(){
  firebase.auth().signOut();
}
