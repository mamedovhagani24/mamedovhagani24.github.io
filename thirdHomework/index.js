const number = Math.trunc(+prompt("enter the number"));
const numberMultiple = Math.trunc(+prompt("enter the multiple number"));

function roundToMultiple(number, numberMultiple) {
  if (numberMultiple > number) {
    return numberMultiple;
  } else if (isNaN(number) || isNaN(numberMultiple) || (numberMultiple < 1 || number < 1)) {
    return "you made a mistake";
  }
  let results = Math.round(number / numberMultiple) * numberMultiple;
  return results;
}

console.log(roundToMultiple(number, numberMultiple));



