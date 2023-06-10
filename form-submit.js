const formSubmit = document.querySelector("form");

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();

  // getting value of inputs on form
  const name = document.getElementById("nameInput").value;
  const age = document.getElementById("ageInput").value;
  const sex = document.getElementsByName("inlineRadio").value; // need to get the value from this
  const height = document.getElementById("heightInput").value;
  const weight = document.getElementById("weightInput").value;
  const activity = document.getElementsByName("inlineRadio2").value; // need to get the value from this

  // converting age, height, weight from strings to int
  const ageInt = parseInt(age);
  const heightInt = parseInt(height);
  const weightInt = parseInt(weight);

  // alert if form has blanks
  if (
    name === "" ||
    age === "" ||
    sex === "" ||
    height === "" ||
    weight === "" ||
    activity === ""
  ) {
    alert("Please check and ensure all the necessary details are filled.");
  }

  // alert if age, height, weight are numerical values
  else if (
    ageInt === isNaN() ||
    heightInt === isNaN() ||
    weightInt === isNaN()
  ) {
    alert(
      "Please ensure that you entered a valid number for age/height/weight."
    );
  } else {
    alert("Let's gooooooo!");
  }
});
