const userName = 'Denis';
const userAge = 20;
const userRole = 'Manager';
const userOccupation = undefined; 

const isTrue = !!userName && userAge > 18;

const AdminOrSEO =  userRole == 'Admin' || userOccupation == 'CEO';

const occupationOrRole = userOccupation ?? userRole;

const isUserRole = !!userName && userAge > 18 || userRole == 'Admin';

console.log(isTrue);
console.log(AdminOrSEO);
console.log(occupationOrRole);
console.log(isUserRole);

// bonus

const returnAge = (userRole !== 'Admin' && userName) ? userAge : false

console.log(returnAge);

// const returnAge = (!!userName && userRole !== 'Admin') && userAge

// console.log(returnAge)