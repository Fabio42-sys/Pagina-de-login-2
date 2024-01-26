document.getElementById('formSenha').addEventListener('input', function() {
    let senha1= document.getElementById('novaSenha1').value;
    let senha2 = document.getElementById('novaSenha2').value;
    let checkbox = document.getElementById('verificaSenha');


    if (senha1 === senha2) {
        checkbox.disabled = false;
        checkbox.checked = true;

    } else {
        checkbox.disabled = true;
        checkbox.checked = false;


    }
});

var senha1 = document.getElementById('novaSenha1').value;
var senha2 = document.getElementById('novaSenha2').value;
var checkbox = document.getElementById('verificaSenha');

// Ativa o checkbox apenas se ambas as senhas tiverem conteúdo, forem iguais, e não forem espaços em branco
if (senha1 == senha2) {
    checkbox.checked;
    window.alert('As senhas são iguais clique no botão para afetuar a troca');
} else {
    checkbox.disabled;
}


const showPass = document.getElementById('novaSenha1');
const showPass2 = document.getElementById('novaSenha2');
const newPass = document.getElementById('newPass');
const confirmPass = document.getElementById('confirmPass');


newPass.addEventListener('click', event => {

    if (event.target.classList.contains('cadeado')) {

        let iconeAntes = "img/cadeado-fechado.svg";
        let iconeDepois = "img/cadeado-aberto.svg";

        if(event.target.src.includes(iconeAntes)) {
            showPass.type = 'text';
            event.target.src = iconeDepois
        } else {
            showPass.type = 'password';
            event.target.src = iconeAntes
        }
    }
});

confirmPass.addEventListener('click', event => {

    if(event.target.classList.contains('cadeado')) {

        let iconeAntes = "img/cadeado-fechado.svg";
        let iconeDepois = "img/cadeado-aberto.svg";

        if(event.target.src.includes(iconeAntes)) {
            showPass2.type = "text";
            event.target.src = iconeDepois
        } else {
            showPass2.type = "password";
            event.target.src = iconeAntes;
        }


    }

})