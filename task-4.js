console.log("Task 4");

let credits = 23580;
let pricePerDroid = 3000;

let userInput = prompt("Скільки дроїдів ви хочете купити?");

if (userInput === null) {
  console.log("Скасовано користувачем!");
} else {
  let numberOfDroids = parseInt(userInput);

  let totalPrice = numberOfDroids * pricePerDroid;

  if (totalPrice > credits) {
    console.log("Недостатньо коштів на рахунку!");
  } else {
    let remainingCredits = credits - totalPrice;
    console.log(
      "Ви купили " +
        numberOfDroids +
        " дроїдів. На рахунку залишилося " +
        remainingCredits +
        " кредитів."
    );
  }
}
console.log("\n");
