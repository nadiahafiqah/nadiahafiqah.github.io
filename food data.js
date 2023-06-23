const foodresults = document.querySelector(".food-results");
const selectfood = document.querySelector(".foodselect");

const food = [
  {
    food: "bak kut teh",
    calories: 323.71,
    protein: 28.11,
    fat: 23.43,
    carbohydrates: 0,
  },
  {
    food: "briyani",
    calories: 751.95,
    protein: 35.85,
    fat: 24.75,
    carbohydrate: 96.46,
  },
  {
    food: "breakfast set A",
    calories: 108.75,
    protein: 1.91,
    fats: 4.67,
    carbohydrates: 14.79,
  },
];

foodresults.onchange = () => {
  console.log(selectfood.value);
};
