function FicobacciNumber(number) {
    let result = 0;
    let prevResult = 1;
    let prePrevResult = 1;

    if (number > 2) {
        for (let i = 2; i < number; i++) {
            result = prevResult + prePrevResult;
            
            prePrevResult = prevResult;

            prevResult = result;

        }
    } else if (number === 0) {
        return 0;
    } else {
        return 1;
    }

    return prevResult;
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
