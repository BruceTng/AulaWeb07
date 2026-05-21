//################ objetos

const produto = {
    // chave: valor, -> caracteristica: valor;
    nome: 'Mouse Gamer',
    preco: 89.90,
    categoria: 'Informática'
}

console.log(produto);
console.log(produto.nome);

//############### array - lista
const nomes = ['Ana', 'Carlos', 'Mariana']
// Uma lista guarda as informações em índices -> 0, ...

console.log(nomes);
console.log(nomes[2]);

const produtos = [
    {nome: 'Teclado Mêcanico',
     preco: 199.90,
     categoria: "Informática"
    },
    {nome: 'Cadeira Gamer',
     preco: 899.90,
     categoria: "Móveis"
    },
    {nome: 'Monitor 24"',
     preco: 749.90,
     categoria: "Informática"
    },
];

produtos.forEach((produto)=>{
    console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
});

// ############## DOM -> Document Object Model

// const listaProdutos = document.createElement('div');
// const ListaProdutos = document.addEventListener('click', ()=>{});
const listaProdutos = document.getElementById('lista-produtos');
// const ListaProdutos = document.getElementByClassName('classe');
// const ListaProdutos = document.querySelectorAll('p #lista-produtos .classe');
// const ListaProdutos = document.getElementByTagName('div');

produtos.forEach((produto)=>{
    listaProdutos.innerHTML += `
        <div class='card'>
            <h2>${produto.nome}</h2>
            <p><strong>Preço:</strong> R$ ${produto.preco}</p>
            <p><strong>Categoria:</strong> R$ ${produto.categoria}</p>
        </div>
    `;
});

