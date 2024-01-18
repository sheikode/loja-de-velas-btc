// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(nome, preco) {
    // Criar item do carrinho
    const item = document.createElement('li');
    item.className = 'list-group-item';
    item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

    // Prevenir o comportamento padrão do link
  event.preventDefault();
  
    // Adicionar item ao carrinho
    document.getElementById('carrinho-lista').appendChild(item);
  
    // Atualizar total do carrinho
    atualizarTotalCarrinho();
  }
  
  // Função para calcular e atualizar o total do carrinho
function atualizarTotalCarrinho() {
    const itensCarrinho = document.getElementById('carrinho-lista').children;
    let total = 0;
  
    // Calcular o total
    for (let i = 0; i < itensCarrinho.length; i++) {
      const precoTexto = itensCarrinho[i].textContent.match(/(\d+\.\d{2})/); // Extrair o preço usando uma expressão regular
      if (precoTexto) {
        const preco = parseFloat(precoTexto[0]); // Converter para número
        total += preco;
      }
    }
  
    // Atualizar o total na interface do usuário
    document.getElementById('total-carrinho').textContent = `Total: R$ ${total.toFixed(2)}`;
  }
  
  
  
  // Função para limpar o carrinho
  function limparCarrinho() {
    document.getElementById('carrinho-lista').innerHTML = ''; // Limpar a lista de itens
    document.getElementById('total-carrinho').textContent = 'Total: R$ 0,00'; // Resetar o total
  }
  
  // Adicionar produtos dinamicamente
  const produtos = [
    { nome: 'Vela Aromática', preco: 20.00 },
    { nome: 'Vela Decorativa', preco: 25.00 },
    { nome: 'Vela Perfumada', preco: 18.00 },
    { nome: 'Vela Grande', preco: 30.00 },
    { nome: 'Vela Colorida', preco: 15.00 },
    { nome: 'Vela de Citronela', preco: 22.00 }
  ];
  
  const produtosContainer = document.getElementById('produtos');
  
  produtos.forEach(produto => {
    const produtoCard = `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <img src="assets/vela.jpg" class="card-img-top" alt="${produto.nome}">
          <div class="card-body">
            <h5 class="card-title">${produto.nome}</h5>
            <p class="card-text">Descrição do produto e características.</p>
            <p class="card-text">R$ ${produto.preco.toFixed(2)}</p>
            <a href="#" class="btn btn-primary" onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">Adicionar ao Carrinho</a>
          </div>
        </div>
      </div>
    `;
  
    produtosContainer.innerHTML += produtoCard;
  });
  