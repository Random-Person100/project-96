user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name")


function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    })
}
function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location="index.html"
}
var firebaseConfig = {
    apiKey: "AIzaSyBIft-J_5qqTT3Wb9yJPrZhJqndSc6GWQA",
    authDomain: "kwitter-f8703.firebaseapp.com",
    databaseURL: "https://kwitter-f8703-default-rtdb.firebaseio.com",
    projectId: "kwitter-f8703",
    storageBucket: "kwitter-f8703.appspot.com",
    messagingSenderId: "667948512856",
    appId: "1:667948512856:web:5d3cc3d0cc6dcbe57a3c2d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);