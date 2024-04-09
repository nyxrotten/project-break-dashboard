let randomBackground = ()  => {
    const num = Math.ceil(Math.random() * 9);
    document.body.style.backgroundImage = "url('background/background-"+ num +".png')";
}
randomBackground();

setInterval(randomBackground, 30000);

