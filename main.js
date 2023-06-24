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
let result = document.querySelector(".result");
result.hidden = true;
document.querySelector(".dropdown").hidden = true;

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

    result.hidden = false;
    document.querySelector(".dropdown").hidden = false;
    formSubmit.hidden = true;
    nameMessage.innerHTML = nameInput;
    BMRcalories.innerHTML = BMR.toLocaleString("en-US") + " Calories";
    TDEEcalories.innerHTML = TDEE.toLocaleString("en-US") + " Calories";
    proteinIntake.innerHTML = protein.toLocaleString("en-US") + " g";
    carbsIntake.innerHTML = carbs.toLocaleString("en-US") + " g";
    fatsIntake.innerHTML = fat.toLocaleString("en-US") + " g";
    proteinLoss.innerHTML = protein.toLocaleString("en-US") + " g";
    carbsLoss.innerHTML = carbsIntakeLoss.toLocaleString("en-US") + " g";
    fatsLoss.innerHTML = fat.toLocaleString("en-US") + " g";

    result.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  }
});

// FOOD DATA
foodresults = document.querySelector(".food-results");
foodresults.hidden = true;
const foodcals = document.querySelector(".foodcals");
const foodprotein = document.querySelector(".foodprotein");
const foodfats = document.querySelector(".foodfats");
const foodcarbs = document.querySelector(".foodcarbs");
const selectfood = document.querySelector(".foodselect .form-control");
const fooditem = document.querySelector(".fooditem");

const food = [
  {
    food: "bak kut teh",
    calories: 324,
    protein: 28.11,
    fat: 23.43,
    carbohydrates: 0,
  },
  {
    food: "briyani",
    calories: 752,
    protein: 35.85,
    fat: 24.75,
    carbohydrates: 96.46,
  },
  {
    food: "breakfast set A",
    calories: 109,
    protein: 13.91,
    fat: 4.67,
    carbohydrates: 14.79,
  },
  {
    food: "char kway teow",
    calories: 745,
    protein: 22.66,
    fat: 38.4,
    carbohydrates: 76.03,
  },
  {
    food: "nasi lemak (with chicken wing)",
    calories: 884,
    protein: 35.11,
    fat: 33.58,
    carbohydrates: 109.34,
  },
  {
    food: "roasted chicken rice",
    calories: 525,
    protein: 21.78,
    fat: 19.75,
    carbohydrates: 64.47,
  },
  {
    food: "steamed chicken rice",
    calories: 556,
    protein: 28.05,
    fat: 13.86,
    carbohydrates: 80.19,
  },
];

// When dropdown is selected, data of food is presented
selectfood.onchange = () => {
  console.log(selectfood.value);
  fooditem.innerHTML = selectfood.value;
  document.querySelector(".reset1").hidden = true;
  if (selectfood.value === "bak kut teh") {
    foodresults.hidden = false;
    foodcals.innerHTML = food[0].calories + " kcal";
    foodprotein.innerHTML = food[0].protein + " g";
    foodfats.innerHTML = food[0].fat + " g";
    foodcarbs.innerHTML = food[0].carbohydrates + " g";
  } else if (selectfood.value === "briyani") {
    foodresults.hidden = false;
    foodcals.innerHTML = food[1].calories + " kcal";
    foodprotein.innerHTML = food[1].protein + " g";
    foodfats.innerHTML = food[1].fat + " g";
    foodcarbs.innerHTML = food[1].carbohydrates + " g";
  } else if (
    selectfood.value === "breakfast set A (kaya toast, soft boiled eggs)"
  ) {
    foodresults.hidden = false;
    foodcals.innerHTML = food[2].calories + " kcal";
    foodprotein.innerHTML = food[2].protein + " g";
    foodfats.innerHTML = food[2].fat + " g";
    foodcarbs.innerHTML = food[2].carbohydrates + " g";
  } else if (selectfood.value === "char kway teow") {
    foodresults.hidden = false;
    foodcals.innerHTML = food[3].calories + " kcal";
    foodprotein.innerHTML = food[3].protein + " g";
    foodfats.innerHTML = food[3].fat + " g";
    foodcarbs.innerHTML = food[3].carbohydrates + " g";
  } else if (selectfood.value === "nasi lemak (with chicken wing)") {
    foodresults.hidden = false;
    foodcals.innerHTML = food[4].calories + " kcal";
    foodprotein.innerHTML = food[4].protein + " g";
    foodfats.innerHTML = food[4].fat + " g";
    foodcarbs.innerHTML = food[4].carbohydrates + " g";
  } else if (selectfood.value === "roasted chicken rice") {
    foodresults.hidden = false;
    foodcals.innerHTML = food[5].calories + " kcal";
    foodprotein.innerHTML = food[5].protein + " g";
    foodfats.innerHTML = food[5].fat + " g";
    foodcarbs.innerHTML = food[5].carbohydrates + " g";
  } else if (selectfood.value === "steamed chicken rice") {
    foodresults.hidden = false;
    foodcals.innerHTML = food[6].calories + " kcal";
    foodprotein.innerHTML = food[6].protein + " g";
    foodfats.innerHTML = food[6].fat + " g";
    foodcarbs.innerHTML = food[6].carbohydrates + " g";
  }
  foodresults.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
};

const reset = () => {
  location.reload(true);
  return false;
};

const button1 = document.querySelector(".reset1");
button1.addEventListener("click", reset);
const button2 = document.querySelector(".reset2");
button2.addEventListener("click", reset);

// Calculating remaining cals/macronutrients left if maintenance
// const calsleft = document.querySelector(".calsleft");
// const proteinleft = document.querySelector(".proteinleft");
// const fatsleft = document.querySelector(".fatsleft");
// const carbsleft = document.querySelector(".carbsleft");

// calsleft.innerHTML = TDEEcalories - food[6].calories + " kcal";

// TDEEcalories.innerHTML = TDEE.toLocaleString("en-US") + " Calories";
//     proteinIntake.innerHTML = protein.toLocaleString("en-US") + " g";
//     carbsIntake.innerHTML = carbs.toLocaleString("en-US") + " g";
//     fatsIntake.innerHTML = fat.toLocaleString("en-US") + " g";
//     proteinLoss.innerHTML = protein.toLocaleString("en-US") + " g";
//     carbsLoss.innerHTML = carbsIntakeLoss.toLocaleString("en-US") + " g";
//     fatsLoss.
