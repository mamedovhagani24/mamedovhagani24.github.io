"use strict";

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

async function getRandomNumberAsync() {
  const requestNumber = await requestRandomNumber(20, 50);
  if (!requestNumber) return;

  for (let i = 1; i <= +requestNumber; i++) console.count("Hello World");
}

async function requestRandomNumber(value, percent) {
  const result = await requestAsync(
    "GET",
    `/unstable?maxRandom=${value}&prob=${percent}`
  );
  return result?.text();
}

async function secondTask() {
  const percent = 0;

  const createObj = await createUser(users[0], percent);
  if (!createObj) return;

  console.log("user created", createObj);

  const putchObj = await updateUserAge(createObj.id, 33, percent);
  if (!putchObj) return;

  console.log("user updated", putchObj);

  const DeleteObj = await removeUser(putchObj.id, percent);
  if (!DeleteObj) return;

  console.log("user removed");
}

async function createUser(data, percent) {
  const reqCreate = await requestAsync(
    "POST",
    "/objects?prob=" + percent,
    data
  );
  return reqCreate?.json();
}

async function updateUserAge(Id, age, prob) {
  const reqPatch = await requestAsync("PATCH", `/objects/${Id}?prob=${prob}`, {
    age,
  });

  return reqPatch?.json();
}

async function removeUser(userId, prob) {
  const reqDelete = await requestAsync(
    "DELETE",
    `/objects/${userId}?prob=${prob}`
  );
  return reqDelete?.statusText;
}

async function requestAsync(method, url, data) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(response.statusText);

    return response;
  } catch (err) {
    console.error(method + " Request " + err);
  }
}
