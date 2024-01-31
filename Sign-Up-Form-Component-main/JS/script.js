let form = document.getElementById("form");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let form_control = document.getElementsByClassName("form_control");

const setErrorMsg = (input, message) => {
  let form_control = input.parentElement;
  let smallElement = form_control.querySelector("small");
  form_control.className = "form_control error";
  smallElement.innerText = message;
};

const setSuccessMsg = (input) => {
  let form_control = input.parentElement;
  form_control.className = "form_control success";
};

const isEmail = (value) => {
  const symbolAt = value.indexOf("@");
  const dot = value.indexOf(".");

  if (symbolAt < 1 || dot <= symbolAt + 2 || dot === value.length - 1) {
    return false;
  } else {
    return true;
  }
};

const sendData = (inputValue, success_rate, count) => {
  if (success_rate == count) {
    swal(`Welcome ${inputValue}`, "Registration Successful!", "success");

    let data = [...form_control];
    data.forEach((element) => {
      let inputdata = element.children[0];
      inputdata.value = null;
      element.className = "form_control";
    });
  }
};

const Success_Msg = (inputName) => {
  let count = form_control.length - 1;

  for (let i = 0; i < form_control.length; i++) {
    if (form_control[i].className === "form_control success") {
      let success_rate = i;
      sendData(inputName, success_rate, count);
    } else {
      return false;
    }
  }
};

function Validation() {
  let firstNameVal = firstName.value.toUpperCase().trim();
  let lastNameVal = lastName.value.toUpperCase().trim();
  let emailVal = email.value.trim();
  let passwordVal = password.value.trim();

  // firstname
  if (firstNameVal.length == 0) {
    setErrorMsg(firstName, "First Name cannot be empty");
  } else if (firstNameVal.length < 3) {
    setErrorMsg(firstName, "First Name cannot be less than 3 characters");
  } else {
    setSuccessMsg(firstName);
  }

  // lastname
  if (lastNameVal.length == 0) {
    setErrorMsg(lastName, "Last Name cannot be empty");
  } else if (lastNameVal.length < 3) {
    setErrorMsg(lastName, "Last Name cannot be less than 3 characters");
  } else {
    setSuccessMsg(lastName);
  }

  // email
  if (emailVal.length == 0) {
    email.value = "";
    email.placeholder = "email@example.com";

    setErrorMsg(email, "Email cannot be empty");
  } else if (!isEmail(emailVal)) {
    email.value = "";
    email.placeholder = "email@example.com";

    setErrorMsg(email, "Looks like this is not an email");
  } else {
    setSuccessMsg(email);
  }

  // password
  if (passwordVal.length == 0) {
    setErrorMsg(password, "Password cannot be empty");
  } else if (passwordVal.length < 6) {
    setErrorMsg(password, "Password cannot be less than 6 characters");
  } else {
    setSuccessMsg(password);
  }

  // success message if every input data is valid
  Success_Msg(firstNameVal);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  Validation();
});
