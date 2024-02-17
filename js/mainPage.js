// Função para carregar e filtrar o JSON do arquivo accounts.json
function carregarContas() {

    console.clear();
    
    fetch('accounts.json')
        .then(response => response.json())
        .then(data => {
            // Verifica se data é um objeto JSON
            if (typeof data !== 'object' || Array.isArray(data)) {
                console.error('O JSON não contém um objeto único. Verifique o formato do arquivo JSON.');
                return;
            }

            // Extrai email e senha do objeto
            const email = data.email;
            const password = data.password;

            // Exibe o email e a senha
            console.log('Email:', email);
            console.log('Senha:', password);
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o arquivo JSON:', error);
        });
}

// Chamada da função contas() quando o botão é clicado
document.getElementById('meuBotao').addEventListener('click', carregarContas);
