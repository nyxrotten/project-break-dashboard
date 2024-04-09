const add = document.querySelector(".guardar");
const lista = document.querySelector(".listaUl")
const checkbox = document.querySelector(".checkbox")
const borrar = document.querySelector(".delete")
const titleText = document.querySelector('.titleText')
const urlText = document.querySelector('.urlText')


add.addEventListener('click', () => {
    const titleTextValue = titleText.value
    const urlTextValue = urlText.value

    const liDOM = document.createElement('li');
    liDOM.innerHTML = `
                    <li>
                    <div class="listaUlTexto">
                        <p id="tituloUrl">${titleTextValue}</p>
                        <a id="url" href="${urlTextValue}">${urlTextValue}<a>
                    </div>
                    <div class="listaUlCheckbox">
                        <input id="listCheckbox" type="checkbox" class="checkbox">
                    </div>
                    </li>`
    lista.appendChild(liDOM)

    addLinkLocalStorage()

});

pintarLinksGuardados()

function pintarLinksGuardados () {
    const arrayLinksGuardados = localStorage.getItem("Lista Links Guardados");
    const listaLinksGuardadosParse = JSON.parse(arrayLinksGuardados);
    listaLinksGuardadosParse.forEach((link) => {
        const liDOM = document.createElement('li');
        liDOM.innerHTML = `
            <li>
            <div class="listaUlTexto">
                <p id="tituloUrl">${link.Título}</p>
                <a id="url" href="${link.URL}" target="_blank">${link.URL}<a>
            </div>
            <div class="listaUlCheckbox">
                <input id="listCheckbox" type="checkbox" class="checkbox">
            </div>
            </li>`
        lista.appendChild(liDOM)
    })
};




function addLinkLocalStorage() {

    const arrayLinksGuardados = localStorage.getItem("Lista Links Guardados")

    if(arrayLinksGuardados === null) {
        const primerLinkGuardado = {}
        primerLinkGuardado.Título = titleText.value;
        primerLinkGuardado.URL = urlText.value;

        const arrayLinksGuardados = [];
        arrayLinksGuardados.push(primerLinkGuardado);

        const arrayLinksGuardadosJSON = JSON.stringify(arrayLinksGuardados);
        localStorage.setItem('Lista Links Guardados', arrayLinksGuardadosJSON);
    } else {
        const listaLinksGuardadosParse = JSON.parse(arrayLinksGuardados);
        const nuevoLink = {};
        nuevoLink.Título = titleText.value;
        nuevoLink.URL = urlText.value;
        listaLinksGuardadosParse.push(nuevoLink);

        const listaLinksGuardadosActualizada = JSON.stringify(listaLinksGuardadosParse);

        localStorage.setItem('Lista Links Guardados', listaLinksGuardadosActualizada);
    }};

    addLinkLocalStorage();
    const inputCheckbox = document.querySelector("#listCheckbox");


borrar.addEventListener('click', () => {

    lista.innerHTML = "";
    localStorage.removeItem('Lista Links Guardados')
    
})

//URL.canParse(link.value)

/* try { 
                new URL(link.value);
            } catch (error) {
                linkWarning.textContent = 'Not a valid link.'
                return false;
            }
*/

/*paswd.addEventListener("click",()=>{
    navigator.clipboard.writeText(pasword);
    alert("Contraseña copiada!");
})*/
