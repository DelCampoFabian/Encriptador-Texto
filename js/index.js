const textarea = document.getElementById('autoResize');
const btnEncriptar= document.getElementById('btnEncriptar')
const sectionMensaje= document.getElementById('sectionMensaje')
const btnDesencriptar= document.getElementById('btnDesencriptar')

//

textarea.addEventListener('input', autoResize);
function autoResize() {
    this.style.height = 'auto'; // Resetea la altura a 'auto' para calcular la altura real del contenido
    this.style.height = this.scrollHeight + 'px'; // Ajusta la altura al scrollHeight
}
sectionMensaje.innerHTML = 
`<img src="assets/Muñeco.png" alt="Muñeco">
<h3 class="section__cartel">Ningún mensaje fue encontrado</h3>
<p class="section__parrafo">Ingresa el texto que desees encriptar o desencriptar.</p>`

btnEncriptar.addEventListener('click',() =>{
    if(textarea.value != ""){
        sectionMensaje.innerHTML = 
        `<p class="section__parrafo">${encriptar(textarea.value)}</p>`
    }else{
        sectionMensaje.innerHTML = 
        `<img src="assets/Muñeco.png" alt="Muñeco">
        <h3 class="section__cartel">Ningún mensaje fue encontrado</h3>
        <p class="section__parrafo">Ingresa el texto que desees encriptar o desencriptar.</p>`
    }
})
btnDesencriptar.addEventListener('click',() =>{
    if(textarea.value!= ""){
        sectionMensaje.innerHTML = 
        `<p class="section__parrafo">${desencriptarTexto(textarea.value)}</p>`
    }else{
        sectionMensaje.innerHTML = 
        `
        <img src="assets/Muñeco.png" alt="Muñeco">
        <h3 class="section__cartel">Ningún mensaje fue encontrado</h3>
        <p class="section__parrafo">Ingresa el texto que desees encriptar o desencriptar.</p>`
    }
})



function encriptar(mensaje) {
    const encriptacion = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    }   
    let textoEncriptado="";
    for (let char of mensaje){
        if(encriptacion[char]){
            textoEncriptado+=encriptacion[char];
        }else{
            textoEncriptado += char;
        }
    }
    return textoEncriptado
}

function desencriptarTexto(textoEncriptado) {
    const encriptacion = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    } 
    const desencriptacion = {};
    for (const [key, value] of Object.entries(encriptacion)) {
        desencriptacion[value] = key;
    }

    let textoDesencriptado = '';
    let i = 0;

    while (i < textoEncriptado.length) {
        let matchFound = false;
        for (const [key, value] of Object.entries(desencriptacion)) {
            if (textoEncriptado.startsWith(key, i)) {
                textoDesencriptado += value;
                i += key.length;
                matchFound = true;
                break;
            }
        }
        if (!matchFound) {
            textoDesencriptado += textoEncriptado[i];
            i++;
        }
    }

    return textoDesencriptado;
}