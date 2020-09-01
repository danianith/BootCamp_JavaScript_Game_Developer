algoritmo "MatrizeseVetoresDIO"
var

m : vetor[1..3,1..3] de caractere
l, c : inteiro

inicio

m[1,1] <- "Joao"
m[1,2] <- "Sao Paulo"
m[1,3] <- "(11) 9999-5241"
m[2,1] <- "Maria"
m[2,2] <- "Ribeirao Preto"
m[2,3] <- "(16) 9999-8596"
m[3,1] <- "Ana"
m[3,2] <- "Manaus"
m[3,3] <- "(92) 9999-8574

Escreval("NOME          LOCALIDADE          TELEFONE")

Para l <- 1 ate 3 faca
     Para c <- 1 ate 3 faca
          Escreva(m[l,c]:15)
     FimPara
     Escreval("")
FimPara

fimalgoritmo