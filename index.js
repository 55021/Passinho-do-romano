// TEXTAREAS
let output = document.querySelector('#resultadoaqui');
let input = document.querySelector('#textoaqui');
// DROPDOWN MENU
let option = document.querySelector('select');
// SHIFT CIFRA DE CÉSAR
let inc = document.querySelector('.inputincremento');
const inputIncremento = document.querySelector('#incremento');
// OPÇÕES INPUT RADIO
let encode = document.querySelector('#codificar');
let decode = document.querySelector('#decodificar');
// BOTÃO FINAL
let oBotao = document.querySelector('.botao001');

// Input do incremento aparecendo ou não
option.addEventListener('change', () => {
    if (option.value == "base64") {
        inc.style.display = "none";
    } else if (option.value == "cifraDeCesar") {
        inc.style.display = "block";    
    }
})

// Trocar o texto do botão
encode.addEventListener('click', () => {
    oBotao.innerText = "Codificar mensagem!";
})

decode.addEventListener('click', () => {
    oBotao.innerText = "Decodificar mensagem!"
})

function cifraCesar1(mensagemDigitada) {
    var resultado = '';
    var incremento = +inputIncremento.value;

    for (var i = 0; i < mensagemDigitada.length; i++) {
        if (mensagemDigitada[i].charCodeAt() >= 65 && mensagemDigitada[i].charCodeAt() <= 90) {             
            resultado += String.fromCharCode(((mensagemDigitada[i].charCodeAt() - 65 + incremento) % 26) + 65);
        }
        else if (mensagemDigitada[i].charCodeAt() >= 97 && mensagemDigitada[i].charCodeAt() <= 122) {
            resultado += String.fromCharCode(((mensagemDigitada[i].charCodeAt() - 97 + incremento) % 26) + 97);
            console.log(String.fromCharCode(((mensagemDigitada[i].charCodeAt() - 97 + incremento) % 26) + 97));
        }
        else {
            resultado += mensagemDigitada[i];
        }
    }
    return resultado;
}

function cifraCesar2(mensagemDigitada) {
    var resultado = '';
    var incremento = +inputIncremento.value;

    for (var i = 0; i < mensagemDigitada.length; i++) {
        if (mensagemDigitada[i].charCodeAt() >= 65 && mensagemDigitada[i].charCodeAt() <= 90) {
            
            resultado += String.fromCharCode(((mensagemDigitada[i].charCodeAt() - 90 - incremento) % 26) + 90);
        }
        else if (mensagemDigitada[i].charCodeAt() >= 97 && mensagemDigitada[i].charCodeAt() <= 122) {
            resultado += String.fromCharCode(((mensagemDigitada[i].charCodeAt() - 122 - incremento) % 26) + 122);
        }
        else {
            resultado += mensagemDigitada[i];
        }
    }
    
    return resultado;
}

// Parte final: codificar ou decodificar
// Escrever no placeholder pro input não incluir acentos. nem número
oBotao.addEventListener('click', () => {
    if (encode.checked == true && option.value == "base64") {
        output.value = btoa(input.value);
    } else if (decode.checked == true && option.value == "base64") {
        output.value = atob(input.value);
    } else if (encode.checked == true && option.value == "cifraDeCesar") {
        output.value = cifraCesar1(input.value);
    } else if (decode.checked == true && option.value == "cifraDeCesar") {
        output.value = cifraCesar2(input.value);
    }
})