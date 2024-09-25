class Clash {
    #nome;
    #raridade;
    #elixir;
    #genero;
    #arma;
    #alvo;
    #dano;
    #carta;
    #arena;
    #evolucao;
    constructor(nome, raridade, elixir, genero, arma, alvo, dano, carta, arena, evolucao) {
        this.#nome = nome;
        this.#raridade = raridade;
        this.#elixir = elixir;
        this.#genero = genero;
        this.#arma = arma;
        this.#alvo = alvo;
        this.#dano = dano;
        this.#carta = carta;
        this.#arena = arena;
        this.#evolucao = evolucao;
    }
    // Métodos Getters e Setters para os atributos

    get nome() {
        return this.#nome;
    }
    set nome(nome) {
        this.#nome = nome;
    }
    get raridade() {
        return this.#raridade;
    }
    set raridade(raridade) {
        this.#raridade = raridade;
    }
    get elixir() {
        return this.#elixir;
    }
    set elixir(elixir) {
        this.#elixir = elixir;
    }
    get genero() {
        return this.#genero;
    }
    set genero(genero) {
        this.#genero = genero;
    }
    get arma() {
        return this.#arma;
    }
    set arma(arma) {
        this.#arma = arma;
    }
    get alvo() {
        return this.#alvo;
    }
    set alvo(alvo) {
        this.#alvo = alvo;
    }
    get dano() {
        return this.#dano;
    }
    set dano(dano) {
        this.#dano = dano;
    }
    get carta() {
        return this.#carta;
    }
    set carta(carta) {
        this.#carta = carta;
    }
    get arena() {
        return this.#arena;
    }
    set arena(arena) {
        this.#arena = arena;
    }
    get evolucao() {
        return this.#evolucao;
    }
    set evolucao(evolucao) {
        this.#evolucao = evolucao;
    }

    // Métodos
    // Simulando sobrecarga com rest parameter
      atacaCom(...args) {
      if (args.length === 0) {
          console.log(`{$this.#nome} realizou um ataque com ${this.arma}!`);
        } else if (args.length === 1) {
            console.log(`${this.#nome} atacou com um poder de ${args[0]}!`);
        } else if (args.length === 2) {
            console.log(`${this.#nome} usou ${args[1]} e atacou com ${args[0]} de poder!`);
        } else {
            console.log("Número inválido de argumentos.");
        }
    }
    danoDeAtaque() {
        console.log(`{this.#nome} causou ${this.dano} de dano!`);
    }

    custoDeElixir() {
        console.log(`${this.#nome} possui ${this.elixir} de elixir.`);
    }
    cura() {
        console.log(`${this.#nome} cura ${this.dano} de dano!`);
    }
}

// Criação de classes
// Classe Mago de Gelo

class MagoDeGelo extends Clash {
    constructor(nome, raridade, elixir, genero, arma, alvo, dano, carta, arena, evolucao, classe, corDosOlhos) {
        super(nome, raridade, elixir, genero, arma, alvo, dano, carta, arena, evolucao, "Mago", "Azul");
        this.classe = classe;
        this.corDosOlhos = corDosOlhos;
    }
    // Sobrescrevendo os métodos padrôes
    atacaCom() {
        console.log(`${this.nome} usa magia de ${this.arma}!`);
    }
    danoDeAtaque() {
        console.log(`${this.nome} causa ${this.dano} de dano!`);
    }
    custoDeElixir() {
        console.log(`${this.nome} tem um custo de: ${this.elixir} de elixir.`);
    }
    cura() {
        console.log(`${this.nome} não possui cura.`);
    }

    // Método específico
    olhos() {
        console.log(`${this.nome} possui olhos totalmente azuis.`);
        console.log("----------------------------------------------------------------")
    }
}

// Classe Mago
class Mago extends Clash {
    constructor(nome, raridade, elixir, genero, arma, alvo, dano, carta, arena, evolucao, classe, corDosOlhos) {
        super(nome, raridade, elixir, genero, arma, alvo, dano, carta, arena, evolucao, "Mago", "Preto");
        this.classe = classe;
        this.corDosOlhos = corDosOlhos;
    }
    // Sobrescrevendo os métodos padrôes
    atacaCom() {
        console.log(`${this.nome} usa magia de ${this.arma}!`);
    }
    danoDeAtaque() {
        console.log(`${this.nome} causa ${this.dano} de dano!`);
    }
    custoDelixir() {
        console.log(`${this.nome} possui um custo de: ${this.elixir} de elixir.`);
    }
    cura() {
        console.log(`${this.nome} não possui cura.`);
    }
    // Método específico
    olhos() {
        console.log(`${this.nome} possui olhos pretos.`);
        console.log("----------------------------------------------------------------")
    }
}

// Classe Mago Elétrico
class MagoEletrico extends Clash {
    constructor(nome, raridade, elixir, genero, arma, alvo, dano, carta, arena, evolucao, classe, corDosOlhos) {
        super(nome, raridade, elixir, genero, arma, alvo, dano, carta, arena, evolucao, "Mago", "Azul");
        this.classe = classe;
        this.corDosOlhos = corDosOlhos;
    }
    // Sobrescrevendo os métodos padrôes
    atacaCom() {
        console.log(`${this.nome} usa magia de ${this.arma}!`);
    }
    danoDeAtaque() {
        console.log(`${this.nome} causa ${this.dano} de dano!`);
    }
    custoDeElixir() {
        console.log(`${this.nome} possui um custo de: ${this.elixir} de elixir.`);
    }
    cura() {
        console.log(`${this.nome} não possui cura.`);
    }
    // Método específico
    olhos() {
        console.log(`${this.nome} possui olhos azuis.`);
    }
}

// Criando instância da classe derivada Mago de Gelo
const magoDeGelo = new MagoDeGelo("Mago de Gelo", "Lendário", 3, "Masculino", "Gelo", "Terrestre e Aéreo", 63, "Terrestre", "Arena 5(Vale dos Feitiços", "Não possui evolução");
// Chamando os métodos sobrescritos
magoDeGelo.atacaCom();
magoDeGelo.danoDeAtaque();
magoDeGelo.custoDeElixir();
magoDeGelo.cura();
// Método específico
magoDeGelo.olhos();

// Criando instância da classe derivada Mago
const mago = new Mago("Mago", "Raro", 5, "Masculino", "Fogo", "Terrestre e Aéreo", 133, "Terrestre", "Arena 4(Parquinho da PEKKA)", "Mega evolução");
// Chamando os métodos sobrescritos
mago.atacaCom();
mago.danoDeAtaque();
mago.custoDelixir();
mago.cura();
// Método específico
mago.olhos();

// Criando instância da classe derivada Mago Elétrico

const magoEletrico = new MagoEletrico("Mago Elétrico", "Lendário", 4, "Masculino", "Eletricidade", "Terrestre e Aéreo", 159, "Terrestre", "Arena 11(Eletrovale", "Não possui evolução");
// Chamando os métodos sobrescritos
magoEletrico.atacaCom();
magoEletrico.danoDeAtaque();
magoEletrico.custoDeElixir();
magoEletrico.cura();
// Método específico
magoEletrico.olhos();

    console.log("-------------------------------------------------------");
    console.log("Modificando os objetos usando setters:");
    console.log("-------------------------------------------------------");

    // Modificando o objeto Mago de Gelo usando setters
    magoDeGelo.dano = 91;
    console.log(`Dano aumentado para: ${magoDeGelo.dano}`);
    magoDeGelo.danoDeAtaque();
    console.log("-------------------------------------------------------");

    // Modificando o objeto Mago usando setters
    mago.dano = 410;
    console.log(`Dano aumentado para: ${mago.dano}`);
    mago.danoDeAtaque();
    console.log("-------------------------------------------------------");

    // Modificando o objeto Mago Elétrico usando setters
    magoEletrico.dano = 279;
    console.log(`Dano aumentado para: ${magoEletrico.dano}`);
    magoEletrico.danoDeAtaque();