const arr = [
  { name: "Vasya", surname: "Ivanov" },
  { name: "Vanya", surname: "Ivanov" },
  { name: "Albert", surname: "Vasyliev" },
];

function keyBy(arr, key) {
  return arr.reduce((userByKey, arr) => {
    let objKey = arr[key];

    if (!userByKey[objKey]) {
      userByKey[objKey] = [];
    }

    userByKey[objKey].push(arr);

    return userByKey;
  }, {});
}

console.log(keyBy(arr, "surname"));
console.log(keyBy(arr, "name"));



