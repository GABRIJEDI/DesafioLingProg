const exibirSaudacao = () => { 
    const elementoSaudacao = document.querySelector('#saudacao-js');
    if (elementoSaudacao) {
        const horaAtual = new Date().getHours();
        let saudacaoTexto = 'Bom dia!';
        
        if (horaAtual >= 12 && horaAtual < 18) {
            saudacaoTexto = 'Boa tarde!';
        } else if (horaAtual >= 18 || horaAtual < 6) {
            saudacaoTexto = 'Boa noite!';
        }

        elementoSaudacao.textContent = `${saudacaoTexto} Bem-vindo(a) à TechZone! Hoje temos ofertas incríveis em notebooks e redes.`;
    }
};

document.addEventListener('DOMContentLoaded', exibirSaudacao);


function exibirDetalhesProduto(evento) {
    const botao = evento.currentTarget; 

    const id = botao.dataset.id;
    const nome = botao.dataset.nome;
    const descricao = botao.dataset.desc;

    const divDetalhes = document.getElementById('detalhesProduto');

    divDetalhes.innerHTML = `
        <h3>Detalhes do Produto: ${nome}</h3>
        <p><strong>Código:</strong> ${id}</p>
        <p><strong>Descrição Completa:</strong> ${descricao}</p>
        <p class="text-success">Produto em estoque. Adicione ao carrinho para comprar!</p>
    `;
    
    divDetalhes.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const botoesDetalhes = document.querySelectorAll('.btn-detalhes');
    botoesDetalhes.forEach(botao => {
        botao.addEventListener('click', exibirDetalhesProduto);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContato');
    const msgRetorno = document.getElementById('mensagemRetorno');
    
    if (form) {
        form.addEventListener('submit', (e) => { 
            
            e.preventDefault(); 
            
            const nomeUsuario = document.getElementById('nome').value;
            const interesse = document.getElementById('interesse').value;
            
            msgRetorno.classList.remove('d-none');
            msgRetorno.classList.add('alert-success'); 
            msgRetorno.classList.remove('alert-danger'); 

            msgRetorno.textContent = `Obrigado, ${nomeUsuario.split(' ')[0]}! Recebemos sua mensagem sobre ${interesse.toUpperCase()} e entraremos em contato em breve.`;

            form.reset(); 


            msgRetorno.scrollIntoView({ behavior: 'smooth' });
        });
    }
});