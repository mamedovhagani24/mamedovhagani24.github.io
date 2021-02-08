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

function getRandomNumberPromise() {
  requestRandomNumber(20, 50)
    .then((response) => {
      if (!response) throw new Error("number wasn't generated");

      for (let i = 1; i <= +response; i++) console.count("Hello World");
    })
    .catch(handleError);
}

function requestRandomNumber(value, percent) {
  return requestPromise("GET", `/stable?maxRandom=${value}&prob=${percent}`)
    .then((response) => {
      if (!response) throw new Error("Error max number");

      return response.text();
    })
    .catch(handleError);
}

function createUser(data, percent) {
  return requestPromise("POST", "/objects?prob=" + percent, data).then(
    (response) => {
      if (!response) throw new Error("Error create user");

      console.log("User created");
      return response.json();
    }
  );
}

function secondTask() {
  const percent = 20;

  createUser(users[0], percent)
    .then((createUser) => {
      if (!createUser) throw new Error("user wasn't created");
      return updateUserAge(createUser.id, 33, percent);
    })
    .then((updateUser) => {
      if (!updateUser) throw new Error("user's age wasn't updated");
      return removeUser(updateUser.id, percent);
    })
    .catch(handleError);
}

function removeUser(userId, percent) {
  return requestPromise("DELETE", `/objects/${userId}?prob=${percent}`).then(
    (response) => {
      if (!response) throw new Error("Error remove user");

      console.log("User removed");
    }
  );
}

function updateUserAge(userId, age, percent) {
  return requestPromise("PATCH", `/objects/${userId}/?prob=${percent}`, {
    age,
  }).then((response) => {
    if (!response) throw new Error("Error update age");

    console.log("User age updated");
    return response.json();
  });
}

function thirdTask() {
  const percent = 5;
  let usersId = [];

  Promise.all(
    users.map((userData) => {
      return createUser(userData, percent);
    })
  )
    .then((response) => {
      if (!response) throw new Error("Create User Error");

      usersId = response.map((el) => el.id);

      return getRandomAges(percent);
    })
    .then((ages) => {
      if (!ages) throw new Error("Create Random Ages Error");

      return usersId.map((id, i) => {
        return updateUserAge(id, ages[i], percent);
      });
    })
    .then((res) => {
      if (!res) throw new Error("Update User's Age Error");

      return requestRandomNumber(3, percent);
    })
    .then((randId) => {
      if (!randId) throw new Error("Random Number ID Error");

      for (let i = 0; i < 3; i++) {
        if (randId === i) continue;

        removeUser(usersId[i], percent);
      }
    })
    .catch(handleError);
}

function getRandomAges(percent) {
  return Promise.all(
    users.map((el) => {
      return requestRandomNumber(100, percent);
    })
  );
}

function handleError(err) {
  console.error(err);
}
