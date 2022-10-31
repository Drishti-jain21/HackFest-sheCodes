document.getElementById("loginForm").addEventListener("submit",(event)=>{
  event.preventDefault()
})

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

onAuthStateChanged((user)=>{
  if(user){
      location.replace("./html\dashboard.html")
  }
})

function login(){
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const phone = document.getElementById("phone").value
  signInWithEmailAndPassword(email, password)
  .catch((error)=>{
      document.getElementById("error").innerHTML = error.message
  })
}

function signUp(){
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  createUserWithEmailAndPassword(email, password)
  .catch((error) => {
      document.getElementById("error").innerHTML = error.message
  });
}

function forgotPass(){
  const email = document.getElementById("email").value
  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
      alert("Reset link sent to your email id")
  })
  .catch((error) => {
      document.getElementById("error").innerHTML = error.message
  });
}