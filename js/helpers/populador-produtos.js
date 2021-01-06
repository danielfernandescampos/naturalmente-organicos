class Produto {
    constructor (id, nome, categ, foto, un){
        this.id = id;
        this.nome = nome;
        this.categ = categ;
        this.foto = foto;
        this.un = un;
    }
}

var produtos = [
    produto1 = new Produto(1, "Abobrinha", "Legume", "../img/banana.png", .5),
    produto2 = new Produto(2, "Pepino", "Legume", "../img/banana.png", .3),
    produto3 = new Produto(3, "Repolho", "Legume", "../img/banana.png", 1),
    produto4 = new Produto(4, "Abóbora", "Legume", "../img/banana.png", 1),
    produto5 = new Produto(5, "Batata Inglesa", "Legume", "../img/banana.png", 1),
    produto6 = new Produto(6, "Batata Doce", "Legume", "../img/banana.png", 1),
    produto7 = new Produto(7, "Cebola", "Legume", "../img/banana.png", 1),
    produto8 = new Produto(8, "Beterraba", "Legume", "../img/banana.png", 1),
    produto9 = new Produto(9, "Cenoura", "Legume", "../img/banana.png", .5),
    produto10 = new Produto(10, "Chuchu", "Legume", "../img/banana.png", .5),
    produto11 = new Produto(11, "Tomate", "Legume", "../img/banana.png", .5),
    produto12 = new Produto(12, "Inhame", "Legume", "../img/banana.png", 1),
    produto13 = new Produto(13, "Alho", "Legume", "../img/banana.png", .1),
    produto14 = new Produto(14, "Aimpim", "Legume", "../img/banana.png", .6),
    produto15 = new Produto(15, "Agrião", "Verdura", "../img/banana.png", 1),
    produto16 = new Produto(16, "Alface", "Verdura", "../img/banana.png", 1),
    produto17 = new Produto(17, "Couve", "Verdura", "../img/banana.png", 1),
    produto18 = new Produto(18, "Espinafre", "Verdura", "../img/banana.png", 1),
    produto19 = new Produto(19, "Rúcula", "Verdura", "../img/banana.png", 1),
    produto20 = new Produto(20, "Brócolis", "Verdura", "../img/banana.png", 1),
    produto21 = new Produto(21, "Couve-flor", "Verdura", "../img/banana.png", 1),
    produto22 = new Produto(22, "Chicória", "Verdura", "../img/banana.png", 1),
    produto23 = new Produto(23, "Acelga", "Verdura", "../img/banana.png", 1),
    produto24 = new Produto(24, "Alho poró", "Tempero", "../img/banana.png", 1),
    produto25 = new Produto(25, "Coentro", "Tempero", "../img/banana.png", 1),
    produto26 = new Produto(26, "Hortelã", "Tempero", "../img/banana.png", 1),
    produto27 = new Produto(27, "Louro", "Tempero", "../img/banana.png", 1),
    produto28 = new Produto(28, "Manjericão", "Tempero", "../img/banana.png", 1),
    produto29 = new Produto(29, "Cheiro verde", "Tempero", "../img/banana.png", 1),
    produto30 = new Produto(30, "Orégano", "Tempero", "../img/banana.png", 1),
    produto31 = new Produto(31, "Banana prata", "Frutas", "../img/banana.png", 1),
    produto32 = new Produto(32, "Abacate", "Frutas", "../img/banana.png", 1),
    produto33 = new Produto(33, "Laranja", "Frutas", "../img/banana.png", 1),
    produto34 = new Produto(34, "Melancia", "Frutas", "../img/banana.png", 1),
    produto35 = new Produto(35, "Melão", "Frutas", "../img/banana.png", 1),
    produto36 = new Produto(36, "Maçã", "Frutas", "../img/banana.png", 1),
    produto37 = new Produto(37, "Limão", "Frutas", "../img/banana.png", .5),
    produto38 = new Produto(38, "Maracujá", "Frutas", "../img/banana.png", 1),
    produto39 = new Produto(39, "Manga", "Frutas", "../img/banana.png", 1),
    produto40 = new Produto(40, "Abacaxi", "Frutas", "../img/banana.png", 1),
    produto41 = new Produto(41, "Morango", "Frutas", "../img/banana.png", 1),
    produto42 = new Produto(42, "Tangerina", "Frutas", "../img/banana.png", .5),
    produto43 = new Produto(43, "Goiaba", "Frutas", "../img/banana.png", 1),
    produto44 = new Produto(44, "Mamão", "Frutas", "../img/banana.png", 1),
    produto45 = new Produto(45, "Jabuticaba", "Frutas", "../img/banana.png", 1),
    produto46 = new Produto(46, "Bolo de cenoura", "Mercearia", "../img/banana.png", 1),
    produto47 = new Produto(47, "Bolo de banana", "Mercearia", "../img/banana.png", 1),
    produto48 = new Produto(48, "Bolo de laranja", "Mercearia", "../img/banana.png", 1),
    produto49 = new Produto(49, "Empadão", "Mercearia", "../img/banana.png", 1),
    produto50 = new Produto(50, "Geléia", "Mercearia", "../img/banana.png", 1),
];

var ul = document.getElementById("inputDiv");

produtos.forEach((item) => {
    var itemBusca = document.createElement('li');
    itemBusca.innerHTML = item.nome;
    itemBusca.classList.add("produtoLista");
    ul.appendChild(itemBusca);

    
    console.log(item.nome) 
})

// idProduto int primary key auto_increment,
// 	nomeProduto varchar(32) unique not null,
// 	categProduto enum('Mercearia', 'Frutas', 'Legumes', 'Verduras e Temperos', 'Cesta Fechada') not null,
// 	fotoProduto mediumblob