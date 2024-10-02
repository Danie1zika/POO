class Personagem {
  #nome;
  #vida;
  #forca;
  #defesa;
  #nivel;
  #experiencia;
  #classe;
  #arma;
  #magia;
  #habilidadeEspecial;
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    classe,
    arma,
    magia,
    habilidadeEspecial
  ) {
    this.#nome = nome;
    this.vida = vida;
    this.forca = forca;
    this.defesa = defesa;
    this.nivel = nivel;
    this.experiencia = experiencia;
    this.classe = classe;
    this.arma = arma;
    this.magia = magia;
    this.habilidadeEspecial = habilidadeEspecial;
  }

  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  get vida() {
    return this.#vida;
  }
  set vida(vida) {
    this.#vida = vida;
  }
  get forca() {
    return this.#forca;
  }
  set forca(forca) {
    this.#forca = forca;
  }
  get defesa() {
    return this.#defesa;
  }
  set defesa(defesa) {
    this.#defesa = defesa;
  }
  get nivel() {
    return this.#nivel;
  }
  set nivel(nivel) {
    this.#nivel = nivel;
  }
  get experiencia() {
    return this.#experiencia;
  }
  set experiencia(experiencia) {
    this.#experiencia = experiencia;
  }
  get classe() {
    return this.#classe;
  }
  set classe(classe) {
    this.#classe = classe;
  }
  get arma() {
    return this.#arma;
  }
  set arma(arma) {
    this.#arma = arma;
  }
  get magia() {
    return this.#magia;
  }
  set magia(magia) {
    this.#magia = magia;
  }
  get habilidadeEspecial() {
    return this.#habilidadeEspecial;
  }
  set habilidadeEspecial(habilidadeEspecial) {
    this.#habilidadeEspecial = habilidadeEspecial;
  }

  // Métodos
  atacar(...args) {
    if (args.length === 0) {
      console.log(`{$this.#nome} realizou um ataque com ${this.arma}!`);
    } else if (args.length === 1) {
      console.log(`${this.#nome} atacou com um poder de ${args[0]}!`);
    } else if (args.length === 2) {
      console.log(
        `${this.#nome} usou ${args[1]} e atacou com ${args[0]} de poder!`
      );
    } else {
      console.log("Número inválido de argumentos.");
    }
  }
  defender() {
    console.log(`${this.nome} defende-se com ${this.defesa}!`);
  }
  usarMagia() {
    console.log(`${this.nome} utiliza ${this.magia} para atacar!`);
  }
  ganharExperiencia() {
    this.experiencia += 10;
    console.log(`${this.nome} ganhou 10 experiência!`);
  }
  info() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Vida: ${this.vida}`);
    console.log(`Força: ${this.forca}`);
    console.log(`Defesa: ${this.defesa}`);
    console.log(`Nível: ${this.nivel}`);
    console.log(`Experiência: ${this.experiencia}`);
    console.log(`Classe: ${this.classe}`);
    console.log(`Arma: ${this.arma}`);
    console.log(`Magia: ${this.magia}`);
    console.log(`Habilidade Especial: ${this.habilidadeEspecial}`);
  }
}

// Classes derivadas
class Guerreiro extends Personagem {
    constructor(nome, vida, forca, defesa, nivel, experiencia, classe, arma, habilidadeEspecial, armadura, potenciaDeAtaque) {
        super(nome, nivel, vida, forca, defesa, nivel, experiencia, classe, arma, habilidadeEspecial);
        this.armadura = armadura;
        this.potenciaDeAtaque = potenciaDeAtaque;
    }
    gritarGuerra() {
        console.log(`${this.nome} grita em guerra!`);
    }
    atacar() {
        console.log(`${this.nome} ataca com ${this.arma} e gera ${this.potenciaDeAtaque} dano!`);
    }
    defender() {
        console.log(`${this.nome} defende-se com ${this.armadura} e consegue absorver ${this.defesa} de dano!`);
    }
}
class Mago extends Personagem {
    constructor(nome, vida, forca, defesa, nivel, experiencia, classe, arma, habilidadeEspecial, nivelMagia, elemento) {
        super(nome, nivel, vida, forca, defesa, nivel, experiencia, classe, arma, habilidadeEspecial);
        this.nivelMagia = nivelMagia;
        this.elemento = elemento;
    }
    usarMagia() {
        console.log(`${this.nome} ataca com ${this.arma} e causa ${this.nivelMagia * 10} pontos de dano de ${this.elemento}!`);
    }
    invocar() {
        console.log(`${this.nome} invoca um ${this.habilidadeEspecial}!`);
    }
}

class Arqueiro extends Personagem {
  constructor( nome, vida, forca, defesa, nivel, experiencia, classe, arma, habilidadeEspecial, tipoArco, precisao) {
    super(nome, nivel, vida, forca, defesa, nivel, experiencia, classe, arma, habilidadeEspecial);
    this.tipoArco = tipoArco;
    this.precisao = precisao;
    }
    atirarFlecha() {
        console.log(`${this.nome} atira uma flecha por segundo!`);
    }
    info() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Vida: ${this.vida}`);
    console.log(`Força: ${this.forca}`);
    console.log(`Defesa: ${this.defesa}`);
    console.log(`Nível: ${this.nivel}`);
    console.log(`Experiência: ${this.experiencia}`);
    console.log(`Classe: ${this.classe}`);
    console.log(`Arma: ${this.arma}`);
    console.log(`Magia: ${this.magia}`);
    console.log(`Habilidade Especial: ${this.habilidadeEspecial}`);
  }
}

class Ladino extends Personagem {
    constructor(nome, vida, forca, defesa, nivel, experiencia, classe, arma, habilidadeEspecial, habilidadeFurtiva, agilidade) {
        super(nome, nivel, vida, forca, defesa, nivel, experiencia, classe, arma, habilidadeEspecial);
        this.habilidadeFurtiva = habilidadeFurtiva;
        this.agilidade = agilidade;
    }
    desaparecer() {
        console.log(`${this.nome} desaparece!`);
    }
    defender() {
        console.log(`${this.nome} ganhou ${this.agilidade} de agilidade!`);
    }
}

// Criando instâncias das classes

const guerreiro = new Guerreiro("Arthur", 100, 20, 10, 1, 10, "Espada", "Guerreiro", "Escudo de Aço", "Armadura de Ferro", 20);
// Chamando os métodos sobrescritos
guerreiro.gritarGuerra();
guerreiro.atacar();
guerreiro.defender();

const mago = new Mago("Merlin", 80, 15, 5, 1, 10, "Bola de Fogo", "Mago", "Dragão", 2, "Fogo");
mago.usarMagia();
mago.invocar();

const arqueiro = new Arqueiro("Thorin", 8, 8, 1, 80, "Arqueiro", "Arco Longo", "Não possui magia", "Chuva de Flechas", 30);
arqueiro.atirarFlecha();
arqueiro.info();

const ladino = new Ladino("Loki", 90, 25, 7, 1, 10, "Ladino", "Adagas", "Furtividade", 20, 20);
ladino.desaparecer();
ladino.defender();

console.log("-------------------------------------------------------");
console.log("Modificando os objetos usando setters:");
console.log("-------------------------------------------------------");

guerreiro.defesa = -20;
console.log(`Guerreiro perdeu ${guerreiro.defesa} de armadura`);

mago.vida = +200;
console.log(`Mago ganhou ${mago.vida} de vida`);

arqueiro.dano = +20;
console.log(`Arqueiro ganhou ${arqueiro.dano} de dano durante 5 segundos`);

ladino.experiencia = +50;
console.log(`Ladino adquiriu ${ladino.experiencia} de experiencia`);