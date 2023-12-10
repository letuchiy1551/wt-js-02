console.log("Task 7");

function checkStorage(available, ordered) {
  let message;

  if (ordered === 0) {
    message = "У замовленні немає товарів";
  } else if (ordered > available) {
    message = "Ваше замовлення занадто велике, на складі недостатньо товарів!";
  } else {
    message = "Замовлення прийнято, наш менеджер зв'яжеться з Вами.";
  }

  return message;
}

let availableQuantity = 100;
let orderedQuantity = 120;

let resultMessage = checkStorage(availableQuantity, orderedQuantity);
console.log(resultMessage);
console.log("\n");
