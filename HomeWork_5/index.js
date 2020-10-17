const userLogin = prompt('Enter you login: ')
let userPassword = prompt('Enter you password: ')

const defaultLogin = 'SomeLogin'
const defaultPassword = 'SomePassword'

let successMessage;
let errorMessage;
let isRepeat = false;

if (userLogin === defaultLogin && userPassword === defaultPassword) { 
    successMessage = 'Welcome'
} else if (userLogin === defaultLogin && userPassword !== defaultPassword) {
    let isRepeat = true;

    while (isRepeat) {
        let againPassword = confirm('Do you want to rewrite passpord ?')

        if (!againPassword) {
             errorMessage = 'Неправилный пароль'
             isRepeat = false;
        } else {
            let userPassword = prompt('Enter you password: ')

            if (userPassword == defaultPassword) {
                successMessage = 'Welcome'
                isRepeat = false;
            }
        }
    }
} else {
    errorMessage = 'Неправильный Логин'
}

console.log(errorMessage ?? successMessage)