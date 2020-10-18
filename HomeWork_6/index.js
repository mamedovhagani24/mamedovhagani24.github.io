function FicobacciNumber(number) {
    let result = 0;
    let prevRuslt = 1;
    let preprevResult = 1;

    if (number > 2) {
        for (let i = 2; i < number; i++) {
            result = lastRuslt + preLastResult;

            preLastResult = lastRuslt;

            lastRuslt = result;
        }
    } else if (number === 0) {
        return 0;
    } else {
        return 1;
    }
}



// ------------------------------------------------

let userNUmber = +prompt('Enter you number? ');

Prime:
for (let i = 2; i <= userNUmber; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue Prime;
  }

  console.log( i )
}