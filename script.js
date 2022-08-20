const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
document.getElementById("div-aparece").style.display = 'none';
let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];


//Encriptar mensagem

function btnCriptografar() {
    const textoEncriptado = criptografa(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"
    aparece()
}


function criptografa(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }

    return stringEncriptada;
}


//Desencriptar mensagem

function btnDescriptografar() {
    const textoEncriptado = descriptografa(inputTexto.value)
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none"  
    aparece()
}

function descriptografa(stringDesencriptada) {
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada;
}


//botão copiar

function copiar() {
    const msg = document.querySelector(".mensagem");
    msg.select();
    navigator.clipboard.writeText(msg.value)
    msg.value = "";
    mensagem.style.backgroundImage="url('imagens/boneco.png')"
}

function aparece() {
    document.getElementById("div-aparece").style.display = 'block';
}