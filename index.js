let encode = document.querySelector('.botaoC');
let decode = document.querySelector('.botaoD')
let output = document.querySelector('#resultadoaqui');
let input = document.querySelector('#textoaqui');

encode.addEventListener('click', () => {
    output.value = btoa(input.value);
})

decode.addEventListener('click', () => {
    /* var string64 = btoa(input.value);
    var decode1 = atob(string64); */ // esse aqui serviria se eu quisesse decodificar de volta a caixa de texto do resultado
    var decode1 = atob(input.value);
    output.value = decode1;
})