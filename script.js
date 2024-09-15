document.addEventListener('DOMContentLoaded', function () {
    // Captura todos os botões "Nacional" e "Internacional"
    const buttons = document.querySelectorAll('.btn');
    const verifyButton = document.querySelector('.verify-btn');
    const body = document.body;

    // Adiciona evento de clique para alternar o botão ativo e mudar as cores
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.backgroundColor = ''; // Reseta a cor de fundo
                btn.style.color = 'white'; // Reseta a cor do texto
            });

            this.classList.add('active');

            // Verifica qual botão foi clicado e aplica as alterações
            if (this.classList.contains('internacional')) {
                this.style.backgroundColor = '#bb7e01'; // Cor laranja para "Internacional"
                this.style.color = 'white'; // Cor branca para o texto
                document.querySelector('.nacional').style.backgroundColor = '#00254a'; // Cor azul escura para "Nacional"
                body.style.backgroundImage = "url('img/background-in.jpg')"; // Troca o fundo
            } else {
                this.style.backgroundColor = '#33cab9'; // Cor original para "Nacional"
                this.style.color = 'white'; // Cor branca para o texto
                document.querySelector('.internacional').style.backgroundColor = '#00254a'; // Cor azul escura para "Internacional"
                body.style.backgroundImage = "url('img/background.jpg')"; // Troca o fundo de volta
            }
        });
    });

    // Evento de clique para o botão "Verificar"
    verifyButton.addEventListener('click', function () {
        const cardNumber = document.getElementById('card-number').value.trim();

        // Verifica se o campo está vazio ou o número da carteira é inválido
        if (!cardNumber || (cardNumber !== 'banana' && cardNumber.toLowerCase() !== 'controle')) {
            alert('Número da carteira inválido. Por favor, tente novamente.');
            verifyButton.style.backgroundColor = 'white'; // Reseta a cor do botão para o padrão
            verifyButton.style.color = '#00254a'; // Reseta a cor do texto para azul
        } else {
            verifyButton.style.backgroundColor = '#5bbf08'; // Cor verde ao clicar
            verifyButton.style.color = 'white'; // Cor branca para o texto
            verifyCardNumber(); // Chama a função de verificação da carteira
        }
    });
});

// Função para verificar o número da carteira e redirecionar
function verifyCardNumber() {
    // Obter o valor digitado no campo de input
    const cardNumber = document.getElementById('card-number').value.trim();

    // Verificar o valor digitado e redirecionar para a página correspondente
    if (cardNumber === 'banana') {
        window.location.href = 'user_1.html'; // Redireciona para a página user_1
    } else if (cardNumber.toLowerCase() === 'controle') {
        window.location.href = 'user_2.html'; // Redireciona para a página user_2
    }
}