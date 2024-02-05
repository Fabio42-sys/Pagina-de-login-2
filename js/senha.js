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

});

const newPass1 = document.getElementById('novaSenha1');
const newPass2 = document.getElementById('novaSenha2');
const confirm = document.getElementById('verificaSenha');

newPass1.addEventListener('input', updateCheckbox);
newPass2.addEventListener('input', updateCheckbox);

function verificarCont() {
    const isPlaceholder1 = newPass1.value === newPass1.placeholder;
    const isPlaceholder2 = newPass2.value === newPass2.placeholder;

    if (newPass1.value === newPass2.value && newPass1.value !== "" && newPass2.value !== "" && !isPlaceholder1 && !isPlaceholder2) {
        confirm.checked = true;
    } else {
        confirm.checked = false;
    }
}