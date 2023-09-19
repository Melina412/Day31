// - Aufgabe 1_1 --------------------------------------------------
function checkAge() {
  let age = document.getElementById("input").value;
  let result = document.getElementById("output");

  age >= 18 ? (result.innerHTML = "over 18") : (result.innerHTML = "under 18");
}

// - Aufgabe 1_4 --------------------------------------------------
function safetyCheck() {
  let password = document.getElementById("myPassword").value;
  let password_length = password.length;
  console.log(password_length);
  let message1 = document.getElementById("output1");
  let message2 = document.getElementById("output2");

  password_length >= 8
    ? (message1.innerHTML = "Welcome to your account") +
      (message2.innerHTML = " ")
    : (message2.innerHTML = "Your password is too short") +
      (message1.innerHTML = " ");
}
