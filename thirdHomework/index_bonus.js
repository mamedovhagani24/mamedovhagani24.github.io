// Бонус:

const numberOne = +prompt("enter the first number");
const numberTwo = +prompt("enter the second number");
const mathOperator = prompt("select math operation");

if (isNaN(numberOne) || isNaN(numberTwo)) {
  console.log("error number");
} else {
  switch (mathOperator) {
    case "+":
      console.log(`${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`);
      break;
    case "-":
      console.log(`${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`);
      break;
    case "*":
      console.log(`${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`);
      break;
    case "/":
      console.log(`${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`);
      break;
    case "**":
      console.log(`${numberOne} ** ${numberTwo} = ${numberOne ** numberTwo}`);
      break;
    default:
      console.error("error entering operations");
  }
}