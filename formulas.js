// generate BMR:  Mifflin-St. Jeor equation

const bmrMen = () => {
  10 * weight.value + 6.25 * height.value - 5 * age.value + 5;
};

const bmrWomen = () => {
  10 * weight.value + 6.25 * height.value - 5 * age.value - 161;
};

const bmr = () => {
  let bmrResult = 0;
  if (sex.value === "male") {
    bmrResult = bmrMen();
  } else {
    bmrResult = bmrWomen();
  }
  return bmrResult;
};

// generate TDEE

const tdee = () => {
  let tdeeResult = 0;
  if (activity.value === "sedentary") {
    tdeeResult = Math.round(bmr * 1.2);
  } else if (activity.value === "lightlyactive") {
    tdeeResult = Math.round(bmr * 1.375);
  } else if (activity.value === "moderatelyactive") {
    tdeeResult = Math.round(bmr * 1.55);
  } else if (activity.value === "veryactive") {
    tdeeResult = Math.round(bmr * 1.725);
  } else {
    //(activity.value === "superactive")
    tdeeResult = Math.round(bmr * 1.9);
  }
  return tdeeResult;
};

// Sedentary: little or no exercise (BMR x 1.2)
// Light activity: light exercise/sports 1-3 days/week (BMR x 1.375)
// Moderately active: moderate exercise/sports 3-5 days/week (BMR x 1.55)
// Very active: hard exercise/sports 6-7 days/week (BMR x 1.725)
// Extra active: very hard daily exercise/sports & physical job or 2X day training (BMR x 1.9)
