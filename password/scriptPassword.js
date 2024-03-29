const showPassword = document.querySelector('.showPassword');
const copiar = document.querySelector('.copiar');
const crear = document.querySelector('.crear');
const number = document.querySelector('.number')

const minus = "abcdefghijklmnopqrstuvwxyz";
const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const symb = "!@#$%^&*()-_=+";

showPassword.innerText = "holi";

let crearPassword = () => {
    let password = '';
    let caracterPassword = minus + mayus + num + symb;
 
    for (let i = 1; i <= 12; i++) {
        let indicePassword = Math.floor(Math.random()
            * caracterPassword.length);
 
        password += caracterPassword.charAt(indicePassword)
    }
 
    return password;
}

crearPassword();


