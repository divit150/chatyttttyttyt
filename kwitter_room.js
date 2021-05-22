var firebaseConfig = {
    apiKey: "AIzaSyBIhSXDD1oVHTT0ab4iD8THKyac9HUlVVM",
    authDomain: "chatty-da519.firebaseapp.com",
    databaseURL: "https://chatty-da519-default-rtdb.firebaseio.com",
    projectId: "chatty-da519",
    storageBucket: "chatty-da519.appspot.com",
    messagingSenderId: "863895649993",
    appId: "1:863895649993:web:80a545ef425e8323ccd718",
    measurementId: "G-WBCNL54ELB"
  };
  
  firebase.initializeApp(firebaseConfig)

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
      Room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_name).update({
            purpose: "addingRoomname"
      });
      localStorage.setItem("roomname", Room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  console.log("roomname" + Room_names);
                  

                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row
                 
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}