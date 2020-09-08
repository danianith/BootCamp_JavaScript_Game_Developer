let user = {
  name: "Daniani"
};

// Alterando a propriedade de um objeto
user.name = "Outro nome 1";
user["name"] = "Outro nome 2";

const prop = "name";
user[prop] = "Outro nome 3";

// function getProp(prop) {
//     return user[prop];
// }

// Criando uma propriedade
user.lastName = "Thozeski";

// Deletando uma propriedade
delete user.name;
