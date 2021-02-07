// ползователи

const users = [
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

// главная функция

function requestPromise(method, url, data) {
  return fetch(url, {
    method: method,
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) throw new Error(method + ": " + response.statusText);
      return response;
    })
    .catch(handleError);
}

function handleError(error) {
  console.error(error);
}

// задача первая

function getRandomNumberPromise() {
  requestRandomNumber(20, 50)
    .then((response) => {
      if (!response) throw new Error("number don't generated");

      for (let i = 1; i <= +response; i++) console.count("Hello World");
    })
    .catch(handleError);
}

function requestRandomNumber(value, prob) {
  return requestPromise("GET", `/stable?maxRandom=${value}&prob=${prob}`)
    .then((response) => {
      if (!response) throw new Error("Error max number");

      return response.text();
    })
    .catch(handleError);
}

// second task

function createUser(data, percent) {
  return requestPromise("POST", "/objects?prob=" + percent, data).then(
    (res) => {
      if (!res) throw new Error("Error create user");

      console.log("User created");
      return res.json();
    }
  );
}

function secondTask() {
  const errorProb = 0;

  createUser(users[0], errorProb)
    .then((createdUser) => {
      if (!createdUser) throw new Error("user wasn't created");
      return updateUserAge(createdUser.id, 33, errorProb);
    })
    .then((updatedUser) => {
      if (!updatedUser) throw new Error("user's age wasn't updated");
      return removeUser(updatedUser.id, errorProb);
    })
    .catch(handleError);
}

function removeUser(userId, percent) {
  return requestPromise("DELETE", `/objects/${userId}?prob=${percent}`).then(
    (res) => {
      if (!res) throw new Error("Error remove user");

      console.log("User removed");
    }
  );
}

function updateUserAge(userId, age, percent) {
  return requestPromise("PATCH", `/objects/${userId}/?prob=${percent}`, {
    age,
  }).then((res) => {
    if (!res) throw new Error("Error update age");

    console.log("User age updated");
    return res.json();
  });
}

// thirt task

function thirdTask() {
  const errorProb = 5;
  let usersId = [];

  Promise.all(
    users.map((userData) => {
      return createUser(userData, errorProb);
    })
  )
    .then((res) => {
      if (!res) throw new Error("Create User Error");

      usersId = res.map((el) => el.id);

      return getRandomAges(errorProb);
    })
    .then((ages) => {
      if (!ages) throw new Error("Create Random Ages");

      return usersId.map((id, i) => {
        return updateUserAge(id, ages[i], errorProb);
      });
    })
    .then((res) => {
      if (!res) throw new Error("Update User's Age");

      return requestRandomNumber(3, errorProb);
    })
    .then((randId) => {
      if (!randId) throw new Error("Random Number ID");

      for (let i = 0; i < 3; i++) {
        if (randId === i) continue;

        removeUser(usersId[i], errorProb);
      }
    })
    .catch(handleError);
}

function getRandomAges(prob) {
  return Promise.all(
    users.map((el) => {
      return requestRandomNumber(100, prob);
    })
  );
}
