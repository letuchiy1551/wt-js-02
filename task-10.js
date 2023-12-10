console.log("Task 10");

const formatString = function (string) {
  const maxLength = 40;

  if (string.length <= maxLength) {
    return string;
  } else {
    return string.slice(0, maxLength) + "...";
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);

console.log("\n");
