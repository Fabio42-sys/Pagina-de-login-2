function checarSenha() {
    let senha1 = document.getElementById('novaSenha1');
    let senha2 = document.getElementById('novaSenha2');
    let inputCheck1 = document.getElementById('checkbox1');
    let inputCheck2 = document.getElementById('checkbox2');

    if(senha1 == senha2) {
        inputCheck1.checked = !inputCheck1.checked;
        inputCheck2.checked = !inputCheck2.checked;
    }
}

function trocarSenha() {
    let novaSenha = document.getElementById('bntSenha');
    
    novaSenha.addEventListener('click', event => {
        if(event.target.classList.contains('concSenha')) {
            window.alert('Nova senha cadastrada! Faça login novamente');
        }else {
            window.alert('Senhas não são iguais, tente novamente');
        }
    });
}