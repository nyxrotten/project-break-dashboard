const clock = document.querySelector('.clock')



const getTime = () => {
    const today = new Date();
    
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    const time = `${hours}:${minutes}:${seconds}`;

    clock.innerText = time;

}

setInterval(getTime, 1000)

getTime()

const noche = "¡Es hora de descansar! Apaga y sigue mañana.";
const buenosDias = "¡Buenos días, desayuna fuerte y a darle al código!";
const medioDia = "Echa un rato más, ¡pero no olvides comer!";
const comida = "Espero que hayas comido";
const tardePronto = "¡Buenas tardes, el último empujón!";
const tardeTarde = "Esto ya son horas extras... ¡Piensa en parar pronto!";
const buenasNoches = "¡Buenas noches!, es hora de pensar en parar y descansar";
const frase = document.querySelector('.frase');

const frases = () => {
    (clock.innerText > "00:00:00" && clock.innerText < "06:59:59") ? frase.innerText = noche : "Error";
    (clock.innerText > "07:00:00" && clock.innerText < "11:59:59") ? frase.innerText = buenosDias : "Error";
    (clock.innerText > "12:00:00" && clock.innerText < "13:59:59") ? frase.innerText = medioDia : "Error";
    (clock.innerText > "14:00:00" && clock.innerText < "15:59:59") ? frase.innerText = comida : "Error";
    (clock.innerText > "16:00:00" && clock.innerText < "17:59:59") ? frase.innerText = tardePronto : "Error";
    (clock.innerText > "18:00:00" && clock.innerText < "21:59:59") ? frase.innerText = tardeTarde : "Error";
    (clock.innerText > "22:00:00" && clock.innerText < "23:59:59") ? frase.innerText = buenasNoches : "Error";

    setInterval(frases, 1000)
    
}

frases();

const today = new Date();
const date = today.getDay();
const weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const currentWeekDay = weekday[date];
const day = today.getDate();
const months = ["Enero", "Febero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const month = today.getMonth();
const currentMonth = months[month];
const year = today.getFullYear();



const fecha = document.querySelector('.fecha')
fecha.innerText = `Hoy es ${currentWeekDay}
${day} de ${currentMonth} de ${year}`;


