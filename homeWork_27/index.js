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

const xhr = new XMLHttpRequest()

xhr.open('POST', '/objects')

xhr.onload = function () {
    console.log(xhr.responseText)
}

const body = JSON.stringify({
    firstName: 'Vasya',
    lastName: 'Ivanov'
})

xhr.send(body)




