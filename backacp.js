// Sistema de Rastreamento de Exercícios - Academia

// Estrutura de treino com exercícios e dados
let treino = [
    {
        nome: "Supino",
        series: 4,
        repeticoes: 12,
        peso: 60 // Peso em kg
    },
    {
        nome: "Agachamento",
        series: 4,
        repeticoes: 10,
        peso: 80
    },
    {
        nome: "Levantamento Terra",
        series: 3,
        repeticoes: 8,
        peso: 100
    }
];

// Função para exibir treino
function exibirTreino() {
    console.log("Treino de Academia:");
    treino.forEach((exercicio) => {
        console.log(`${exercicio.nome}: ${exercicio.series} séries de ${exercicio.repeticoes} repetições com ${exercicio.peso}kg`);
    });
}

// Função para adicionar um novo exercício
function adicionarExercicio(nome, series, repeticoes, peso) {
    treino.push({
        nome: nome,
        series: series,
        repeticoes: repeticoes,
        peso: peso
    });
    console.log(`Exercício "${nome}" adicionado com sucesso!`);
}

// Função para atualizar o peso de um exercício
function atualizarPeso(nome, novoPeso) {
    const exercicio = treino.find(ex => ex.nome === nome);
    if (exercicio) {
        exercicio.peso = novoPeso;
        console.log(`Peso do exercício "${nome}" atualizado para ${novoPeso}kg!`);
    } else {
        console.log(`Exercício "${nome}" não encontrado.`);
    }
}

// Função para remover um exercício
function removerExercicio(nome) {
    const index = treino.findIndex(ex => ex.nome === nome);
    if (index !== -1) {
        treino.splice(index, 1);
        console.log(`Exercício "${nome}" removido com sucesso!`);
    } else {
        console.log(`Exercício "${nome}" não encontrado.`);
    }
}

// Exibir treino inicial
exibirTreino();

// Teste das funções
adicionarExercicio("Flexão", 4, 15, 0); // Adiciona exercício sem peso
atualizarPeso("Supino", 65); // Atualiza o peso do supino
removerExercicio("Levantamento Terra"); // Remove exercício
exibirTreino(); // Exibe treino após modificações
