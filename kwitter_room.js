
const firebaseConfig = {
      apiKey: "AIzaSyA_mcTN_GiJF_sREqwM6aZrG_zaNBMHyU8",
      authDomain: "c93-kwitter-37fb0.firebaseapp.com",
      databaseURL: "https://c93-kwitter-37fb0-default-rtdb.firebaseio.com",
      projectId: "c93-kwitter-37fb0",
      storageBucket: "c93-kwitter-37fb0.appspot.com",
      messagingSenderId: "270724806524",
      appId: "1:270724806524:web:e8eeaf7f71c594423496f9"
    };

    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>"; 
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom() {
      room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child("room_name").update({purpose:"adding room"});

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}



function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter.html";
}

