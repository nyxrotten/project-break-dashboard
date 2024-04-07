
let num;

function randomNum() {
    num = Math.ceil(Math.random() * 6)
};

randomNum()

console.log(num)


let randomBackground = ()  => {
    return document.body.style.backgroundImage = "url('background/background-" + num + ".png')";
}
randomBackground()

