console.log("Task 5");

var country = prompt("Введіть назву країни:");

country = country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();

var cost;
switch (country) {
  case "Китай":
    cost = 100;
    break;
  case "Чилі":
    cost = 250;
    break;
  case "Австралія":
    cost = 170;
    break;
  case "Індія":
    cost = 80;
    break;
  case "Ямайка":
    cost = 120;
    break;
  default:
    alert("У вашій країні доставка недоступна");
    throw new Error("Доставка недоступна");
}

alert("Доставка в " + country + " буде коштувати " + cost + " кредитів");
console.log("\n");
