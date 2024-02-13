const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    console.log('classe add');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    console.log('classe remove');
});


// const btnPassword = document.getElementById('passwordInput');
// const iconEye = document.getElementById('img');

// iconEye.addEventListener('click', () => {
//     if (btnPassword.type == 'password') {
//         btnPassword.type = 'text';
//         iconEye.src 
//     }
// });

// iconEye.addEventListener('click', () => {

//     let iconAntes = iconEye.src = "img/cadeado-fechado.svg";
//     let iconDepois = iconEye.src = "img/cadeado-aberto.svg";

//     if (btnPassword.type == 'password') {
//         btnPassword.type = 'text';
//         iconEye.scr == iconDepois;
//     } else if (btnPassword.type == 'text') {
//         btnPassword.type = 'password';
//         iconEye.scr == iconAntes;
//     }

// });

const showPass = document.getElementById('passwordLogin');
const iconEye = document.getElementById('imgLogin');

iconEye.addEventListener('click', event => {

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

const password = document.getElementById('passwordCadastro');
const cadeado = document.getElementById('imgCadastro');

cadeado.addEventListener('click', event => {

    if (event.target.classList.contains('cadeado')) {

        let iconeAntes = "img/cadeado-fechado.svg";
        let iconeDepois = "img/cadeado-aberto.svg";

        if(event.target.src.includes(iconeAntes)) {
            password.type = 'text';
            event.target.src = iconeDepois
        } else {
            password.type = 'password';
            event.target.src = iconeAntes
        }
    }
});
