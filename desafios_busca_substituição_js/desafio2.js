
/* Desafio 2 - Encontre a maior substring

Encontre a maior substring comum entre as duas strings informadas. A substring pode ser qualquer parte da string, inclusive ela toda. Se não houver subseqüência comum, a saída deve ser “0”. A comparação é case sensitive ('x' != 'X').

Entrada: A entrada contém vários casos de teste. Cada caso de teste é composto por duas linhas, cada uma contendo uma string. Ambas strings de entrada contém entre 1 e 50 caracteres ('A'-'Z','a'-'z' ou espaço ' '), inclusive, ou no mínimo uma letra ('A'-'Z','a'-'z').

Saída: O tamanho da maior subsequência comum entre as duas Strings.
 
Exemplo de Entrada:				Exemplo de Saída:

abcdef						2
cdofhij						1
TWO						0
FOUR						7
abracadabra
open
Hey This java is hot
Java is a new paradigm
*/

let stopped = 0;

while (stopped !== 1) {

    let s1 = gets(), s2 = gets(), str1, str2, maxSubStr = 0, strings = [];

    if(s1 !== "" && s2 !== "") {

        if (s1.length < s2.length) {
            str1 = s2; str2 = s1;
        }else {
            str1 = s1; str2 = s2;
        }

        for (let i = 0; i < str2.length; i++) {
            for (let j = 0; j < str2.length; j++){
                let nstr = str2.substring(j, str2.length - i);
                    if (str1.match(nstr)) {
                        strings.push(nstr);
                        if (nstr.length > maxSubStr) maxSubStr = nstr.length;
                    }
            }
        }

        console.log(`${maxSubStr}`);

    } else {
        stopped = 1;  
    }
}
