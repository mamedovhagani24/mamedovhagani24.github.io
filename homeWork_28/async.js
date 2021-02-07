// пользователи

const USERS_EXAMPLE = [
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

//

async function taskSecond() {
  const errorPercent = 20;

  const objCreate = await createUser(users[0], errorPercent);
  if (!objCreate) return;

  console.log("user created", objCreate);

  const objPutch = await updateUserAge(objCreate.id, 33, errorPercent);
  if (!objPutch) return;

  console.log("user updated", objPutch);

  const objDelete = await removeUser(objPutch.id, errorPercent);
  if (!objDelete) return;

  console.log("user removed");
}

// главная функция

async function requestAsync(method, url, data) {
  try {
    const requeset = await fetch(url, {
      method: method,
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    if (!requeset.ok) throw new Error(req.statusText);

    return response;
  } catch (err) {
    console.error(method + " Request " + err);
  }
}

// first task

async function getRandomNumberAsync() {
  const result = await requestRandomNumber(20, 50);
  if (!result) return;

  for (let i = 1; i <= +result; i++) console.count("Hello World");
}

async function requestRandomNumber(value, percent) {
  const result = await requestDemoAsync(
    "GET",
    `/unstable?maxRandom=${value}&prob=${percent}`
  );
  return result?.text();
}

// second task
async function createUser(data, percent) {
  const createUser = await requestPromise(
    "POST",
    "/objects?prob=" + percent,
    data
  );
  return createUser?.json();
}

async function updateUserAge(userId, age, percent) {
  const PutchUser = await requestPromise(
    "PATCH",
    `/objects/${userId}?prob=${percent}`,
    { age }
  );

  return PutchUser?.json();
}

async function removeUser(userId, percent) {
  const deleteUser = await requestPromise(
    "DELETE",
    `/objects/${userId}?prob=${percent}`
  );
  return deleteUser?.statusText;
}

// third task

async function thirdTask() {
  const percent = 5;

  const createdUsersId = users.map(async (user) => {
    const resCreate = await createUser(user, percent);
    if (!resCreate) return;

    return resCreate.id;
  });

  const randomAges = createdUsersId.map(async (id) => {
    const randomAge = await requestRandomNumber(100, percent);
    if (!randomAge) return;

    return await +randomAge;
  });

  const updatedUsers = createdUsersId.map(async (userId, i) => {
    const id = await userId;
    const age = await randomAges[i];
    if (!age) return;

    const resUpdate = await updateUserAge(id, age, errorProb);
    if (!resUpdate) return;

    return resUpdate;
  });

  const userNotDelete = await requestRandomNumber(3, percent);
  if (!userNotDelete) return;

  for (let i = 0; i < 3; i++) {
    if (i === +userNotDelete) continue;

    const resRemoved = await removeUser(i, errorProb);
    if (!resRemoved) return;

    console.log(`User width id - ${i} removed`);
  }
}
