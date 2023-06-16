const formSubmit = document.querySelector("form");
const username = document.getElementById("nameInput");
const age = document.getElementById("ageInput");
const sex = document.getElementsByName("inlineRadio"); // need to get the value from this
const height = document.getElementById("heightInput");
const weight = document.getElementById("weightInput");
const activity = document.getElementsByName("inlineRadio2"); // need to get the value from this

formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();

  // getting value of inputs on form
  const nameInput = username.value;
  const ageInput = age.value;
  const sexInput = sex.value;
  const heightInput = height.value;
  const weightInput = weight.value;
  const activityInput = activity.value;

  // converting age, height, weight from strings to int
  const ageInt = parseInt(ageInput);
  const heightInt = parseInt(heightInput);
  const weightInt = parseInt(weightInput);
  console.log(ageInt);
  console.log(heightInt);
  console.log(weightInt);

  // alert if form has blanks
  if (
    nameInput === "" ||
    ageInput === "" ||
    sexInput === "" ||
    heightInput === "" ||
    weightInput === "" ||
    activityInput === ""
  ) {
    alert("Please check and ensure all the necessary details are filled.");
  }

  // alert if age, height, weight are numerical values
  else if (isNaN(ageInt) || isNaN(heightInt) || isNaN(weightInt)) {
    alert(
      "Please ensure that you entered a valid number for age/height/weight."
    );
  }

  // alert once form is submitted successfully
  else {
    alert("Let's gooooooo!");
    document.querySelector("body").style.visibility = "hidden";
  }
});
