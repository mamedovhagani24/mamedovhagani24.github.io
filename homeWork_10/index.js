const obj = {
    'name': 'Xaqani'
}

function isEmpty(obj) {
   return Object.keys(obj).length == 0;
}

console.log(isEmpty(obj))