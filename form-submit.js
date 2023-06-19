const formSubmit = document.querySelector("button");
const username = document.getElementById("nameInput");
const age = document.getElementById("ageInput");
const height = document.getElementById("heightInput");
const weight = document.getElementById("weightInput");
const sex = () => {
  let options = document.getElementsByName("inlineRadio");
  let selected = Array.from(options).find((radio) => radio.checked);
  return selected.value;
};
const activity = () => {
  let options = document.getElementsByName("inlineRadio2");
  let selected = Array.from(options).find((radio) => radio.checked);
  return selected.value;
};

const getValues = () => {
  const nameInput = username.value;
  const ageInput = age.value;
  const sexInput = sex();
  const heightInput = height.value;
  const weightInput = weight.value;
  const activityInput = activity();
  console.log("Name: " + nameInput);
  console.log("Age: " + ageInput);
  console.log("Sex: " + sexInput);
  console.log("Height: " + heightInput);
  console.log("Weight: " + weightInput);
  console.log("Activity: " + activityInput);
};

const convertInt = () => {
  getValues();
  const ageInt = parseInt(ageInput);
  const heightInt = parseInt(heightInput);
  const weightInt = parseInt(weightInput);
};

const alertError = () => {
  getValues();
  if (
    nameInput === "" ||
    ageInput === "" ||
    sexInput === "" || // not defined???
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
  }
};

formSubmit.addEventListener("click", () => {
  // event.preventDefault();
  getValues();
  convertInt();
  alertError();

  let resultBMR = document.createElement("result1");
  console.log("BMR: " + bmr());
  resultBMR.innerHTML = bmr();
  document.getElementById("BMRresult").appendChild(resultBMR);

  // getting value of inputs on form

  // converting age, height, weight from strings to int

  // alert if form has blanks
});

// new fullpage("#fullpage", {
//   //options here
//   autoScrolling: true,
//   scrollHorizontally: true,
// });
