const add = document.querySelector(".guardar");
const lista = document.querySelector(".listaUl")
const checkbox = document.querySelector(".checkbox")
const borrar = document.querySelector(".delete")
const titleText = document.querySelector('.titleText')
const urlText = document.querySelector('.urlText')


add.addEventListener('click', () => {
    const titleTextValue = titleText.value;
    const urlTextValue = urlText.value;

    if (titleTextValue == "" || urlTextValue == "") {
        alert('Introduce un título y una url')
    }
    else {
    const liDOM = document.createElement('li');
    liDOM.innerHTML = `
                    <li>
                    <div class="listaUlTexto">
                        <p id=${titleTextValue}>${titleTextValue}</p>
                        <a class="url" href="${urlTextValue}" target="_blank">${urlTextValue}<a>
                        <button class="deleteSelf">X</button>
                    </div>
                    </li>`
    lista.appendChild(liDOM)

    // const ultimoBoton = document.querySelectorAll('.deleteSelf') [document.querySelectorAll('.deleteSelf').length -1]
    // ultimoBoton.addEventListener('click', (event) => {
    //     const linksFiltrados = Array.from(document.querySelectorAll('.listaUl li'))
    //     .filter((node) => {
    //         console.log(node.childNodes[1].childNodes[1].id, event.target.id)
    //         return node.childNodes[1].childNodes[1].id !== event.target.id})

    //     .map((node) => {
    //         return {
    //             titulo:node.childNodes[1].childNodes[1].id,
    //             URL:node.childNodes[0].childNodes[1]}
    //     })

    //     localStorage.setItem("Lista Links Guardados", JSON.stringify(linksFiltrados))
        
    // })

    addLinkLocalStorage()}

});


pintarLinksGuardados()

function pintarLinksGuardados () {
    const arrayLinksGuardados = localStorage.getItem("Lista Links Guardados") || []
    
    if(arrayLinksGuardados === null) {
        const liDOM = document.createElement('li');
        liDOM.innerHTML = `<li>Aún no has guardado nada</li>`
    }
    else {
        const listaLinksGuardadosParse = JSON.parse(arrayLinksGuardados);
        listaLinksGuardadosParse.forEach((link) => {
        const liDOM = document.createElement('li');
        liDOM.innerHTML = `
            <li>
            <div class="listaUlTexto">
                <p id="${link.titulo}">${link.titulo}</p>
                <a class="url" href="${link.URL}" target="_blank">${link.URL}<a>
                <button id="${link.titulo}" class="deleteSelf">X</button>
            </div>
            </li>`
        lista.appendChild(liDOM) 
    })}
};




function addLinkLocalStorage() {
        const arrayLinksGuardados = JSON.parse(localStorage.getItem("Lista Links Guardados"))|| []
        const primerLinkGuardado = {}

        primerLinkGuardado.titulo = titleText.value;
        primerLinkGuardado.URL = urlText.value;

        
        arrayLinksGuardados.push(primerLinkGuardado);

        const arrayLinksGuardadosJSON = JSON.stringify(arrayLinksGuardados);
        localStorage.setItem('Lista Links Guardados', arrayLinksGuardadosJSON);
    
        
    };




//BORRAR TODO LOCAL STORAGE


borrar.addEventListener('click', () => {

    lista.innerHTML = "";
    localStorage.removeItem('Lista Links Guardados')
    
})



// const deleteSelf = document.querySelectorAll('liDom button')

// deleteSelf.addEventListener('click', remove = () => {
//     const borrar = document.getElementById(titleText);
//     borrar.remove();
// });

// console.log(deleteSelf)


