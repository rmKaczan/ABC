let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMedia(atletas) {
  atletas.forEach(atleta => {
    const notas = atleta.notas.slice(); // Cria uma cópia das notas
    const maiorNota = Math.max(...notas);
    const menorNota = Math.min(...notas);

    // Remove a maior e a menor nota
    notas.splice(notas.indexOf(maiorNota), 1);
    notas.splice(notas.indexOf(menorNota), 1);

    // Calcula a média das notas restantes
    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

    // Exibe os resultados
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
    console.log(`Média Válida: ${media}\n`);
  });
}

// Chama a função para calcular a média
calcularMedia(atletas);