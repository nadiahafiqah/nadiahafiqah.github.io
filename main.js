const formSubmit = document.querySelector(".btn");
const username = document.getElementById("nameInput");
const age = document.getElementById("ageInput");
const height = document.getElementById("heightInput");
const weight = document.getElementById("weightInput");
const BMRcalories = document.querySelector(".result .bmrcalories");
const TDEEcalories = document.querySelector(".result .tdeecalories");
const proteinIntake = document.querySelector(".result .mainprotein");
const carbsIntake = document.querySelector(".result .maincarbs");
const fatsIntake = document.querySelector(".result .mainfats");
const proteinLoss = document.querySelector(".result .proteinloss");
const carbsLoss = document.querySelector(".result .carbsloss");
const fatsLoss = document.querySelector(".result .fatsloss");

const nameMessage = document.querySelector(".result .nameInput");
// document.querySelector(".result").hidden = true;
// document.querySelector(".dropdown").hidden = true;

// BMR formula
const bmr = (weight, height, age, sex) => {
  if (sex === "male") {
    return Math.round(10 * weight + 6.25 * height - 5 * age + 5);
  } else {
    // if sex === "female"
    return Math.round(10 * weight + 6.25 * height - 5 * age - 161);
  }
};

// TDEE formula
const tdee = (BMR, activity) => {
  let tdeeResult = 0;
  if (activity === "sedentary") {
    tdeeResult = Math.round(BMR * 1.2);
  } else if (activity === "lightlyactive") {
    tdeeResult = Math.round(BMR * 1.375);
  } else if (activity === "moderatelyactive") {
    tdeeResult = Math.round(BMR * 1.55);
  } else if (activity === "veryactive") {
    tdeeResult = Math.round(BMR * 1.725);
  } else {
    //(activity.value === "superactive")
    tdeeResult = Math.round(BMR * 1.9);
  }
  return tdeeResult;
};

// on clicking submit
formSubmit.addEventListener("click", () => {
  // getting values of inputs + selecting sex/activity
  let sexInput = document.querySelector("input[name=inlineRadio]:checked");
  let activityInput = document.querySelector(
    "input[name=inlineRadio2]:checked"
  );
  const nameInput = username.value;
  const ageInput = age.value;
  const heightInput = height.value;
  const weightInput = weight.value;

  // converting to integers
  const ageInt = parseInt(ageInput);
  const heightInt = parseInt(heightInput);
  const weightInt = parseInt(weightInput);

  // alert to ensure all blanks are filled
  if (
    nameInput === "" ||
    ageInput === "" ||
    sexInput.size() === 0 ||
    heightInput === "" ||
    weightInput === "" ||
    activityInput.size() === 0
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
    let sex = sexInput.value;
    let activity = activityInput.value;
    let BMR = bmr(weight.value, height.value, age.value, sex);
    let TDEE = tdee(BMR, activity);

    const convertWeight = () => {
      let lbs = Math.round(weight.value * 2.20462);
      return lbs;
    };

    // Calculating mass of protein and fat, and remaining cals for cabrs
    let protein = Math.round(convertWeight() * 0.8);
    let fat = Math.round(convertWeight() * 0.4);

    const proteinCals = Math.round(protein * 4);
    const fatCals = Math.round(fat * 9);
    const carbsCals = Math.round(TDEE - proteinCals - fatCals);
    const carbs = Math.round(carbsCals / 4);

    // Calculating carbs for weight loss (-500 cals/day)
    const carbsCalsLoss = Math.round(TDEE - 500 - proteinCals - fatCals);
    const carbsIntakeLoss = Math.round(carbsCalsLoss / 4);

    // document.querySelector(".result").hidden = false;
    // document.querySelector(".dropdown").hidden = false;
    formSubmit.hidden = true;
    nameMessage.innerHTML = nameInput;
    BMRcalories.innerHTML = BMR.toLocaleString("en-US") + " Calories";
    TDEEcalories.innerHTML = TDEE.toLocaleString("en-US") + " Calories";
    proteinIntake.innerHTML = protein.toLocaleString("en-US") + " grams";
    carbsIntake.innerHTML = carbs.toLocaleString("en-US") + " grams";
    fatsIntake.innerHTML = fat.toLocaleString("en-US") + " grams";
    proteinLoss.innerHTML = protein.toLocaleString("en-US") + " grams";
    carbsLoss.innerHTML = carbsIntakeLoss.toLocaleString("en-US") + " grams";
    fatsLoss.innerHTML = fat.toLocaleString("en-US") + " grams";
  }
});

const cravingSelect = document.querySelector(".dropdown-item");
console.log(cravingSelect);

// make array of objects with food and macro content
// on change, get value of change
