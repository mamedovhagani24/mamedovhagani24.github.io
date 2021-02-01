"use strict";

// N1

// let hr = new XMLHttpRequest()

// hr.open('GET', 'https://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50');

// hr.addEventListener('load', () => {
//    if (hr.status !== 200) {
//        console.error(hr.response)
//    }

//    for (let i = 0; i < hr.response; i++) {
//        console.log('Hello World')
//    }
// })

// hr.send();

// ----------------------------------------------------------------------------------------

function sendRequest(method, url, { body, headers = {} } = {}, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.keys(headers).forEach((key) => {
    xhr.setRequestHeader(key, headers[key]);
  });

  xhr.addEventListener("load", () => {
    if (xhr.status >= 400) {
      callback(xhr.response);
    } else {
      callback(null, xhr.response);
    }
  });
  xhr.send(body);
}

let user = {
  firstName: "Vasya",
  lastName: "Ivanov",
};

let createdObj;

sendRequest(
  "POST",
  "https://async-demo.herokuapp.com/objects?prob=20",
  {
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
  },
  (err, response) => {
    if (err) {
      console.error(err);
      return;
    }
    try {
      createdObj = JSON.parse(response);
    } catch (err) {
      console.error(err);
      return;
    }
    const { id } = createdObj;
    const extension = { age: 33 };
    console.log(`User Created with id ${id}`);

    sendRequest(
      "PATCH",
      `https://async-demo.herokuapp.com/objects/${id}?prob=20`,
      {
        body: JSON.stringify(extension),
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      },
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        try {
          createdObj = JSON.parse(response);
        } catch (err) {
          console.error(err);
          return;
        }

        console.log(`User updated with id ${id}`);

        sendRequest(
          "DELETE",
          `https://async-demo.herokuapp.com/objects/${id}?prob=20`,
          createdObj,
          (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log("DONE!");
            }
          }
        );
      }
    );
  }
);
