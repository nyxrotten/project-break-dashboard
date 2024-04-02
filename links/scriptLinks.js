const add = document.querySelector(".guardar");
const lista = document.querySelector(".listaUl")
const checkbox = document.querySelector(".checkbox")
const borrar = document.querySelector(".delete")



add.addEventListener('click', () => {
    const titleText = document.querySelector('.titleText').value
    const urlText = document.querySelector('.urlText').value
    const liDOM = document.createElement('li');
    liDOM.innerHTML = `
                    <li>
                    <div class="listaUlTexto">
                        <p id="tituloUrl">${titleText}</p>
                        <p id="url">${urlText}</p>
                    </div>
                    <div class="listaUlCheckbox">
                        <input id="listCheckbox" type="checkbox" class="checkbox">
                    </div>
                    </li>`
    lista.appendChild(liDOM)

    localStorage.setItem("list", `${titleText}`)
    

})


checkbox.addEventListener('click', function() {
    if (checkbox.checked) {
        checkbox.remove();
    } else { alert("unchecked")}
} )


console.log(checkbox)