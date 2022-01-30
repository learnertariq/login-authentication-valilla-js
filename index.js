///////////////////////////////////////////////////// Register Section
const registeredEmails = [];
const registeredPasswords = [];
const regEmail = document.getElementById("reg-email");
const regPassword = document.getElementById("reg-password");
const regSubmit = document.getElementById("reg-submit");
const regEmailsDisplay = document.getElementById("reg-emails");

regSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    validateEmail(regEmail.value) &&
    validatePassword(regPassword.value) &&
    !isDuplicateEmail()
  ) {
    registeredEmails.push(regEmail.value);
    registeredPasswords.push(regPassword.value);
  } else {
    alert("input valid email or password");
  }

  updateRegisteredEmails();
});

function updateRegisteredEmails() {
  regEmailsDisplay.innerHTML = "";
  for (let i = 0; i < registeredEmails.length; i++) {
    regEmailsDisplay.insertAdjacentHTML(
      "beforeend",
      `<p>${registeredEmails[i]}</p>`
    );
  }
}

updateRegisteredEmails();

function isDuplicateEmail() {
  for (let i = 0; i < registeredEmails.length; i++) {
    if (registeredEmails[i] == regEmail.value) return true;
  }

  return false;
}

// Validating Email
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// Validating Password
function validatePassword(password) {
  return String(password).match(/^[A-Za-z]\w{8,}$/);
}

/////////////////////////////////// Log in Section ////////////////////////////////////
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginSubmit = document.getElementById("login-submit");

loginSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    validateEmail(regEmail.value) &&
    validatePassword(regPassword.value) &&
    isValidLogin()
  ) {
    alert("you are successfully logged in");
  } else {
    alert("input valid email or password");
  }
});

function isValidLogin() {
  for (let i = 0; i < registeredEmails.length; i++) {
    if (
      loginEmail.value == registeredEmails[i] &&
      loginPassword.value == registeredPasswords[i]
    )
      return true;
  }

  return false;
}
