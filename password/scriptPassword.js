const showPassword = document.querySelector('.showPassword');
const copiar = document.querySelector('.copiar');
const crear = document.querySelector('.crear');
const number = document.querySelector('.number').value

const minus = "abcdefghijklmnopqrstuvwxyz";
const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const symb = "!@#$%^&*()-_=+";


const numberValue = Number(number);
console.log(numberValue)


//SET INPUT NUMBER

crear.addEventListener('click', () => {
    console.log(numberValue)
})


//CREAR CONTRASEÑA RANDOM

let crearPassword = () => {
    let password = '';
    let caracterPassword = minus + mayus + num + symb;
 
    for (let i = 1; i <= numberValue; i++) {
        let indicePassword = Math.floor(Math.random()
            * caracterPassword.length);
 
        password += caracterPassword.charAt(indicePassword)
    }
 
    return password;
}

crearPassword();

showPassword.innerText = crearPassword();




