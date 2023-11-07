const hobbies = ["Jogar", "Estudar inglês", "Editar imagens"];
console.log("Meus hobbies:"+hobbies);   

console.log("Hobbie na posição 0: " +hobbies[0]);
console.log("Hobbie na posição 1: " +hobbies[1]);
console.log("Hobbie na posição 2: " +hobbies[2]);

hobbies[0] = "ler livros";
console.log("Hobbies alteraros: "+hobbies);   
console.log(`Tenho ${hobbies.length} hobbies`);

hobbies.push("cozinhar");
console.log("Adicionado o hobbie cozinhar:"+ hobbies);   
 
hobbies.pop();
console.log("Tirado o hobbie cozinhar: "+ hobbies);

let posicao = hobbies.indexOf('Jogar');
hobbies.splice(posicao, 1);
console.log(hobbies);
hobbies.splice(0,1);
console.log(hobbies);

const hobbiesDoAmigo = ["Dançar", "Jogar", "Andar de Skate"];

const todosOsHobbies = hobbies.concat(hobbiesDoAmigo);
console.log(`Meus hobbies com hobbies do meu amigo: `+ todosOsHobbies)


const hobbiesMusicais = ['cantar', 'tocar guitarra', 'escutar música'];
const hobbiesEsportivos = ['correr', 'jogar futebol', 'nadar'];
const hobbiesCriativos = ['desenhar','escrever histórias', 'fazer esculturas'];

const categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos, hobbiesCriativos];

console.log(`Categoria de hobbies: `+categoriasDeHobbies[1]);
console.log(`Hobbies musical na posição 0: `+categoriasDeHobbies[0][0]);
console.log(`Hobbies musical na posição 2: `+categoriasDeHobbies[0][2]);