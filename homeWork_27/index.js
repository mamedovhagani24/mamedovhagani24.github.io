'use strict'

// N1

// let hr = new XMLHttpRequest()

// hr.open('GET', 'https://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50');


// hr.onload = function () {
//     if (hr.status !== 200) {
//         console.error(hr.response)
//     }

//     for (let i = 0; i < hr.response; i++) {
//         console.log('Hello World')
//     }
// }

// hr.send();

// ----------------------------------------------------------------------------------------

function sendRequest(
    method,
    url,
    { body, headers = {} } = {},
    callback
    ) {
 
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
 
    Object.keys(headers).forEach((key) => {
       xhr.setRequestHeader(key, headers[key]);
    });
 
    xhr.addEventListener('load', () => {
       if (xhr.status >= 400) {
          callback(xhr.response);
       } else {
          callback(null, xhr.response);
       }
    });
    xhr.send(body);
    }
 
 
 
 //создать обьект
 let user = {
 firstName: "Vasya",
 lastName: "Ivanov",
 }
 //делаем запрос, создаем обьект
 sendRequest('POST', 'https://async-demo.herokuapp.com/objects', {
 body: JSON.stringify(user),
 headers: {
    'Content-type': 'application/json; charset=utf-8',
 }
 }, (err,response) => {
    if (err) {
    console.error(err); 
    return;
    }
    let createdObj;
    try {
    createdObj = JSON.parse(response);
    } catch (err) {
    console.error(err);
    return;
    }
    const {id} = createdObj;
 const extension = { age: 33 };
 //изменяем обьект добавляем возраст юхера
 
 
 sendRequest('PATCH', `https://async-demo.herokuapp.com/objects/${id}`, {
    body: JSON.stringify(extension),
    headers: {
       'Content-type': 'application/json; charset=utf-8',
    }
 }, (err) => {
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
 // удаляем обьект со всеми изменениями
    sendRequest('DELETE', `https://async-demo.herokuapp.com/objects/${id}`, createdObj,
       (err) => {
          if (err) {
             console.error(err);
                      }  else {
                     console.log("DONE!");
                     }
                   try {
                      createdObj = JSON.parse(response);
                      } catch (err) {
                      console.error(err);
                      return;
                      }
                }
             );
          }
       );
    }
 );



