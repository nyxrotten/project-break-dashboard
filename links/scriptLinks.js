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

})


const addLinkLocalStorage = () => {

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
    }    
    }





/*checkbox.addEventListener('click', function() {
    if (checkbox.checked) {
        checkbox.remove();
    } else { alert("unchecked")}
} )
*/

