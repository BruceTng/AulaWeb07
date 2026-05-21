const alunos = [
    {nome: 'Carlos',
     idade: 22,
     curso: "Sistemas de Informação",
     nota: 7.2,
    },
    {nome: 'Mariana',
     idade: 19,
     curso: "Front-End",
     nota: 9.2,
    },
    {nome: 'João',
     idade: 21,
     curso: "Web-Development",
     nota: 5.9,
    },
];

const listaAlunos = document.getElementById('lista-alunos');

alunos.forEach((aluno)=>{
    const situacao = aluno.nota >= 7 ? 'Aprovado' : 'Revisar Conteúdo';

    listaAlunos.innerHTML += `
    <div class='card'>
        <h1>${aluno.nome}</h1>
        <p>Idade: ${aluno.idade}</p>
        <p>Curso: ${aluno.curso}</p>
        <p>Nota: ${aluno.nota}</p>
        <p>Situação: ${situacao}</p>
    </div>
    `;
});