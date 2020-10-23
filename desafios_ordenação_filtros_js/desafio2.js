
/* Desafio 2 -  Compras no Supermercado

Pedro trabalha sempre até tarde todos os dias, com isso tem pouco tempo tempo para as tarefas domésticas. Para economizar tempo ele faz a lista de compras do supermercado em um aplicativo e costuma anotar cada item na mesma hora que percebe a falta dele em casa.

O problema é que o aplicativo não exclui itens duplicados, como Pedro anota o mesmo item mais de uma vez e a lista acaba ficando extensa. Sua tarefa é melhorar o aplicativo de notas desenvolvendo um código que exclua os itens duplicados da lista de compras e que os ordene alfabeticamente.

Entrada: A primeira linha de entrada contém um inteiro N (N < 100) com a quantidade de casos de teste que vem a seguir, ou melhor, a quantidade de listas de compras para organizar. Cada lista de compra consiste de uma única linha que contém de 1 a 1000 itens ou palavras compostas apenas de letras minúsculas (de 1 a 20 letras), sem acentos e separadas por um espaço.

Saída: A saída contém N linhas, cada uma representando uma lista de compra, sem os itens repetidos e em ordem alfabética.
 
Exemplo de Entrada: 	                                              Exemplo de Saída

2								      carne laranja
carne laranja suco picles laranja picles                              picles suco
laranja pera laranja pera pera					      laranja pera */


/// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let totalItems = gets();

function unico(value, index, self) {
  return self.indexOf(value) === index;
}

for (var i = 0; i < totalItems; i++) {
  let itens = gets();
  let itensOrdenados = itens.split(" ").sort();
  let itensUnicos = itensOrdenados.filter(unico); // Implemente aqui a lógica para ter os itens unicos
  let resposta = [...itensUnicos].join(" ");
  console.log(resposta);
}

/* filter() é uma função que varre todos elementos do array e manda para uma função de callback definida pelo programador. Nessa função faz uma comparação se é a primeira ocorrência do valor e só se for é que a filter() irá considerar como parte do novo array.

O indexOf() dá a posição da primeira ocorrência. Se ela bater com o índice atual do elemento pesquisado, é um valor que interessa no critério adotado. Se não bater significa que já é pelo menos uma segunda ocorrência desse valor, o que não interessa.

Isso deve funcionar na maioria dos navegadores usados atualmente, só não funciona nos que já são considerados muito antigos.*/

