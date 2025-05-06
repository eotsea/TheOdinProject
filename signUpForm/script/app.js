"use strict";

const submitButton = document.getElementById("submitButton");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const phoneNumberError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("conPasswordError");

const lengthCheck = (length, min, max) =>
  length < min || length > max ? false : true;
const valueCheck = (value) => (value === "" ? false : true);

const passwordMatch = (first, second) => (first !== second ? false : true);

const emailCheck = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.value);
};

const checkEmptyLong = (element, errorText, error, min, max) => {
  if (!valueCheck(element.value)) {
    error.textContent = `${errorText} can't be empty`;
  } else if (!lengthCheck(element.value.length, min, max)) {
    if (min === max) {
      error.textContent = `length must be ${min} characters length`;
    } else {
      error.textContent = `length must be ${min} - ${max} characters length`;
    }
  } else {
    error.textContent = "";
  }
};

const checkEmail = (email, error) => {
  if (!valueCheck(email.value)) {
    error.textContent = `Email can't be empty`;
  } else if (!emailCheck(email)) {
    error.textContent = `Unvalid Email`;
  } else {
    error.textContent = "";
  }
};

const checkConfirm = (element, error) => {
  const password = document.getElementById("password");
  if (!valueCheck(element.value)) {
    error.textContent = "Confirm password can't be empty";
  } else if (element.value !== password.value) {
    error.textContent = "doesnt match with password";
  } else {
    error.textContent = "";
  }
};

const passwordCheck = (password, error) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (!valueCheck(password)) {
    error.textContent = "Password Cant be empty";
  } else if (password.value.length < 6 || password.value.length > 15) {
    error.textContent = "Password between 6-15 characters";
  } else if (!re.test(password.value)) {
    error.textContent =
      "1 lower 1 upper 1 number 1 speacial character";
  } else {
    error.textContent = "";
  }
};

const inputList = Array.from(document.querySelectorAll("input"));
inputList.forEach((element) => {
  element.addEventListener("input", (event) => {
    event.preventDefault();
    switch (element.id) {
      case "firstName":
        checkEmptyLong(element, "First Name", firstNameError, 5, 15);
        break;
      case "lastName":
        checkEmptyLong(element, "Last Name", lastNameError, 5, 15);
        break;
      case "email":
        checkEmail(email, emailError);
        break;
      case "phone":
        checkEmptyLong(element, "Phone Number", phoneNumberError, 11, 11);
        break;
      case "password":
        passwordCheck(element, passwordError);
        break;
      case "conPassword":
        checkConfirm(element, confirmPasswordError);
        break;
    }
  });
});


submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const success = document.getElementById('success');
  if (inputList.every((e) => e.value === "")) {
    console.log("Please fill the fields ");
    success.textContent= "Please fill the fields";
  } else if (
    firstNameError.textContent !== "" ||
    lastNameError.textContent !== "" ||
    emailError.textContent !== "" ||
    phoneNumberError.textContent !== "" ||
    passwordError.textContent !== "" ||
    confirmPasswordError.textContent !== ""
  ) {
    console.log("Please fix the fields ");
    success.textContent= "Please fix the fields";
  } else {
    console.log("Account created Succesfully");
    success.textContent= "Account created SuccessFully";
  }
});
