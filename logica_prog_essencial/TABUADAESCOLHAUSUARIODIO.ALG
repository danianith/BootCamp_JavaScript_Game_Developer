algoritmo "TabuadaEscolhaUsuarioDIO"
var

n, c : inteiro

inicio
c <- 1
Escreva("Qual tabuada voce quer? ")
Leia(n)

Escreval("A Tabuada do ",n, " eh: ")
Enquanto  (c <= 10) faca
          Escreval(n, " x", c, " =", n*c)
          c <- c + 1
FimEnquanto
fimalgoritmo