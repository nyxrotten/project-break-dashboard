const showPassword = document.querySelector('.showPassword');
const copiar = document.querySelector('.copiar');
const crear = document.querySelector('.crear');
const number = document.querySelector('.number')

const minus = "abcdefghijklmnopqrstuvwxyz";
const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const symb = "!@#$%^&*()-_=+";



//BOTÓN CREAR CONTRASEÑA

crear.addEventListener('click', () => {
    showPassword.innerText = crearPassword();
    console.log(showPassword.innerText)
    
})


//FUNCIÓN CREAR CONTRASEÑA RANDOM

const crearPassword = () => {
    const numberValue = Number(number.value);
    let password = '';
    const caracterPassword = minus + mayus + num + symb;
 
    for (let i = 1; i <= numberValue; i++) {
        const indicePassword = Math.floor(Math.random()
            * caracterPassword.length);
 
        password += caracterPassword.charAt(indicePassword)
    }
 
    return password;
}

crearPassword();

//BOTÓN COPIARA CONTRASEÑA

copiar.addEventListener("click",()=>{
    navigator.clipboard.writeText(showPassword.value);
    alert("Contraseña copiada!");
    console.log(showPassword.value)
})
