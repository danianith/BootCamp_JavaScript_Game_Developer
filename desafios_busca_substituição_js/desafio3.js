
/* Desafio 3 - Validador de senhas com requisitos

Pedro e Fernando são os desenvolvedores em uma stratup e vão desenvolver o novo sistema de cadastro, e pediram a sua ajuda. Sua task é fazer o código que valide as senhas que são cadastradas, para isso você deve atentar aos requisitos a seguir:

- A senha deve conter, no mínimo, uma letra maiúscula, uma letra minúscula e um número;
- A mesma não pode ter nenhum caractere de pontuação, acentuação ou espaço;
- Além disso, a senha pode ter de 6 a 32 caracteres.

Entrada :A entrada contém vários casos de teste e termina com final de arquivo. Cada linha tem uma string S, correspondente a senha que é inserida pelo usuário no momento do cadastro.

Saída: A saída contém uma linha, que pode ser “Senha valida.”, caso a senha tenha cada item dos requisitos solicitados anteriormente, ou “Senha invalida.”, se um ou mais requisitos não forem atendidos.
 
Exemplo de Entrada:				Exemplo de Saída:

Digital Innovation One				Senha invalida.

AbcdEfgh99					Senha valida.

DigitalInnovationOne123				Senha valida.

Digital Innovation One 123			Senha invalida.

Aass9						Senha invalida.

Aassd9						Senha valida.
*/

let stopped = 0;

do {      
      let password = gets(), // Receiving password
      upperCaseTest = password.toLocaleLowerCase(),
      lowerCaseTest = password.toLocaleUpperCase(), 
      numberTest = password.match(/(\d)/i),
      specialCharTest = password.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''),
      lenghtTest = password.length >= 6 && password.length <= 32;
  
      // Validating
  if  (password.length === 0) {
    
    } else {
      if (password !== upperCaseTest &&
          password !== lowerCaseTest && 
          password === specialCharTest &&  
          numberTest && lenghtTest) {
            console.log('Senha valida.'); 
      } else { 
            console.log('Senha invalida.');
      }
  }
  	if (password.length === 0 ) stopped = 1;
    
} while (stopped !== 1) 
