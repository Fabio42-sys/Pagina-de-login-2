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

const bnt = document.getElementById('bntSenha');

bnt.addEventListener('click', () => {
    window.alert('Senha trocada com sucesso!');
});
