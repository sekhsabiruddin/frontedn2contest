let fname = document.getElementById("fname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confrimpassword = document.getElementById("confrimpassword");
let btn = document.getElementById("btn");

let nameMessage = document.getElementById("nameMessage");
let emailMessage = document.getElementById("emailMessage");
let passwordMessage = document.getElementById("passwordMessage");
let confrimdMessage = document.getElementById("confrimdMessage");

var passwordString = "";
function passwordFiled() {
  if (password.value.search(/[0-9]/) == -1) {
    passwordMessage.style.cssText = " visibility: visible";
    return false;
  } else if (password.value.search(/[A-Z]/) == -1) {
    passwordMessage.style.cssText = " visibility: visible";
    return false;
  } else if (password.value.search(/[a-z]/) == -1) {
    passwordMessage.style.cssText = " visibility: visible";
    return false;
  } else {
    passwordMessage.style.cssText = " visibility: hidden";
  }
  passwordString = password.value;
  return true;
}
function confrimpasswordFiled() {
  if (
    confrimpassword.value != passwordString ||
    confrimpassword.value.length == 0
  ) {
    confrimdMessage.style.cssText = " visibility: visible";
    return false;
  }
  return confrimpassword.value === passwordString;
}
var fnameValue = "";
function nameFiled() {
  fnameValue = fname.value;
  if (fname.value.length <= 1) {
    nameMessage.style.cssText = " visibility: visible";
    return false;
  } else {
    nameMessage.style.cssText = " visibility: hidden";
    return true;
  }
}
var emailValue = "";
function emailFiled() {
  emailValue = email.value;
  if (email.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi) == null) {
    emailMessage.style.cssText = " visibility: visible";
    return false;
  } else {
    emailMessage.style.cssText = " visibility: hidden";
    return true;
  }
}
//Function for random character
let randomToken = "";
function random_string() {
  var character = "ABCDEFJHIJKLMNOPabcdefghijklmlop";
  for (i = 0; i < 5; i++) {
    randomToken += character.charAt(
      Math.floor(Math.random() * character.length)
    );
  }
}
//here i have created one empty object
var fromObject = [];
function emailExitOrNot(emailcheck) {
  for (let i = 0; i < fromObject.length; i++) {
    if (fromObject[i].email == emailcheck) {
      emailexit.style.cssText = " visibility: visible";
      return false;
    }
  }
  return true;
}

if (btn) {
  btn.addEventListener("click", function () {
    let emexistorNot = emailExitOrNot(email.value);
    if (
      nameFiled() &&
      emailFiled() &&
      passwordFiled() &&
      confrimpasswordFiled() &&
      emexistorNot
    ) {
      fromObject.push({
        id: 1,
        name: fnameValue,
        email: emailValue,
        password: passwordString,
      });

      window.localStorage.setItem("fromObject", JSON.stringify(fromObject));
      // random_string();
      // tokenObject.push({ id: 1, token: randomToken });
      window.open("singin.html");
    }
  });
}

function singup() {
  let newObject = window.localStorage.getItem("fromObject");
  newObject = JSON.parse(newObject);
  console.log(newObject.length);
  console.log(newObject[0].email);
  console.log(newObject[0].password);

  let singinEmail = document.getElementById("singinEmail").value;
  let singinPassword = document.getElementById("singinPassword").value;

  for (let i = 0; i < newObject.length; i++) {
    if (
      newObject[i].email == singinEmail &&
      newObject[i].password == singinPassword
    ) {
      // document.getElementById("tempName").innerHTML = JSON.parse(
      //   localStorage.getItem("fromObject")
      // )[i].name;
      window.open("question.html");
    }
  }
  document.getElementById("SingErroMessage").style.cssText =
    "visibility: visible";
}
// console.log(JSON.parse(localStorage.getItem("fromObject")), "PP");
//let myname = newObject[i].name;

// //============================Question set
