let randomBackground = ()  => {
    const num = Math.ceil(Math.random() * 6)
    const background = document.body.style.backgroundImage = "url('background/background-"+ num +".png')";
}
randomBackground()

setInterval(randomBackground, 10000)

