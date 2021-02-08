let users = [
  {
    firstName: "Vasya",
    lastName: "Ivanov",
  },
  {
    firstName: "Ivan",
    lastName: "Vasiliev",
  },
  {
    firstName: "Maxim",
    lastName: "Maximov",
  },
];

const requestURL = "https://async-demo.herokuapp.com";

async function getRandomUser() {
  try {
    let response = async function (value, maxNum) {
      value = await fetch(requestURL + `/stable?maxRandom=${maxNum}&prob=5`);
      if (!value.ok) {
        throw new Error("Error!");
      }
      return value.json();
    };
    await Promise.all([
      response(response, 100),
      response(response, 100),
      response(response, 100),
    ])
      .then((ages) => {
        ages.forEach((age, index) => {
          users[index].age = age;
        });
      })
      .catch((err) => console.error(err));
    const result = (await response(response, 2)) + 1;
    const newObj = users[result - 1];
    users = [newObj];
    console.log(users);
  } catch (err) {
    console.log("Error:", err);
  }
}
getRandomUser();
