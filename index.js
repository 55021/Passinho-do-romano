let encode = document.querySelector('#botaoC');
let decode = document.querySelector('#botaoD');
let output = document.querySelector('#resultadoaqui');
let input = document.querySelector('#textoaqui');
let option = document.querySelector('select');
let inc = document.querySelector('.incremento');

// DEFINIR N!!!!!!!!!!!

option.addEventListener('change', () => {
    if (option.value == "base64") {
        inc.style.display = "none";
    } else if (option.value == "cifraDeCesar") {
        inc.style.display = "block";    
    }
})

encode.addEventListener('click', () => {
    if (option.value == "base64") {
        output.value = btoa(input.value);
    } else if (option.value == "cifraDeCesar") {
        
    }
})

decode.addEventListener('click', () => {
    /* var string64 = btoa(input.value);
    var decode1 = atob(string64); */ // esse aqui serviria se eu quisesse decodificar de volta a caixa de texto do resultado
    if (option.value == "base64") {
        var decode1 = atob(input.value);
        output.value = decode1;
    } else if (document.querySelector('#cifraDeCesar').checked == true) {
        
    }
})

/* Dúvidas pelo caminho:
P: Como eu eu boto esse addEventListener dentro de um if?????
R: Não, mas dá pra colocar os ifs dentro do addEventListener.

Coisas que eu aprendi mas ainda não entendi totalmente:
Por que eu não posso declarar com o .value e sim declarar a variável e depois usar ela com o .value?*/