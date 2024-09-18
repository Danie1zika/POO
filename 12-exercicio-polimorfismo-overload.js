// Classe base Carros
class Macaco {
  constructor(especie, nome, classe, arma, alcance, cor, habitate, tipo, habilidade, chapeu) {
    this.especie = especie;
    this.nome = nome;
    this.classe = classe;
    this.arma = arma;
    this.alcance = alcance;
    this.cor = cor;
    this.habitate = habitate;
    this.tipo = tipo;
    this.habilidade = habilidade;
    this.chapeu = chapeu;
  }

  nomeEHabitate(...args) {
        if (args.length === 0) {
          console.log(`${this.nome} da um grito!`);
        } else if (args.length === 1) {
          const arma = args[0];
          console.log(`${this.nome} não da um grito!`);
        }
    console.log(`${this.nome} pode ser posicionado na ${this.habitate}!`);
  }
  tipoEChapeu() {
    console.log(`macaco do tipo ${this.tipo} e ${this.chapeu} usa chapéu!`);
  }
  armaEAlcance() {
    console.log(`${this.nome} usa ${this.arma}, e seu alcance é  ${this.alcance}!`);
  }
  especieECor() {
    console.log(`macaco é da especie ${this.especie} e sua cor é ${this.cor}!`);
  }
  classeEHabilidade() {
    console.log(`macaco é da classe ${this.classe} e sua habilidade especial é ${this.habilidade}!`);
  }
}

// Classe MacacoBucaneiro que herda de Carros
class MacacoBucaneiro extends Macaco {
  constructor(especie, nome, classe, arma, alcance, cor, habitate, tipo, habilidade, chapeu, pet, custo) {
    super(especie, nome, classe, arma, alcance, cor, habitate, tipo, habilidade, chapeu);
    this.pet = pet;
    this.custo = custo;
  }
  nomeEHabitate(...args) {
        if (args.length === 0) {
          console.log(`${this.nome} da um grito!`);
        } else if (args.length === 1) {
          const arma = args[0];
          console.log(`${this.nome} não da um grito!`);
        }
    console.log(`${this.nome} pode ser posicionado na ${this.habitate}!`);
  }
  tipoEChapeu() {
    console.log(`macaco do tipo ${this.tipo} e usa um ${this.chapeu}!`);
  }
  armaEAlcance() {
    console.log(`${this.nome} usa ${this.arma}, e seu alcance é  ${this.alcance}!`);
  }
  especieECor() {
    console.log(`macaco é da especie ${this.especie} e sua cor é ${this.cor}!`);
  }
  classeEHabilidade() {
    console.log(`macaco é da classe ${this.classe} e sua habilidade especial é ${this.habilidade}!`);
  }
}

// Classe MacacoMago que herda de Carros

class MacacoMago extends Macaco {
  constructor(especie, nome, classe, arma, alcance, cor, habitate, tipo, habilidade, chapeu, pet, custo) {
    super(especie, nome, classe, arma, alcance, cor, habitate,
      tipo, habilidade, chapeu);
    this.pet = pet;
    this.custo = custo;
  }
  nomeEHabitate(...args) {
        if (args.length === 0) {
          console.log(`${this.nome} da um grito!`);
        } else if (args.length === 1) {
          const arma = args[0];
          console.log(`${this.nome} não da um grito!`);
        }
    console.log(`${this.nome} pode ser posicionado na ${this.habitate}!`);
  }
  tipoEChapeu() {
    console.log(`macaco do tipo ${this.tipo} e usa ${this.chapeu} !`);
  }
  armaEAlcance() {
    console.log(`${this.nome} usa um ${this.arma}, e seu alcance é  ${this.alcance}!`);
  }
  especieECor() {
    console.log(`macaco é da especie ${this.especie} e sua cor é ${this.cor}!`);
  }
  classeEHabilidade() {
    console.log(`macaco é da classe ${this.classe} e sua habilidade especial é ${this.habilidade}!`);
  }
}

// Classe CospeTachinha que herda de Carros
class CospeTachinha extends Macaco {
  constructor( especie, nome, classe, arma, alcance, cor, habitate, tipo, habilidade, chapeu, pet, custo) {
    super(especie, nome, classe, arma, alcance, cor, habitate, tipo, habilidade,chapeu);
    this.pet = pet;
    this.custo = custo;
  }
  nomeEHabitate(...args) {
    if (args.length === 0) {
      console.log(`${this.nome} da um grito!`);
    } else if (args.length === 1) {
      const arma = args[0];
      console.log(`${this.nome} não da um grito!`);
    }
    console.log(`${this.nome} pode ser posicionado na ${this.habitate}!`);
  }
  tipoEChapeu() {
    console.log(`macaco do tipo ${this.tipo} e não usa ${this.chapeu} chapéu!`);
  }
  armaEAlcance() {
    console.log(`${this.nome} dispara ${this.arma}, e seu alcance é  ${this.alcance}!`);
  }
  especieECor() {
    console.log(`macaco é da especie ${this.especie} e sua cor é ${this.cor}!`);
  }
  classeEHabilidade() {
    console.log(`macaco é da classe ${this.classe} e sua habilidade especial é ${this.habilidade}!`);
  }
}

// Criando instâncias de MacacoBucaneiro, MacacoMago e CospeTachinha
const macacoBucaneiro = new MacacoBucaneiro("macaco", "bucaneiro", "militar", "canhões", "médio", "marrom", "água", "aquático", "derrubar MOAB", "chapéu pirata");
macacoBucaneiro.nomeEHabitate();
macacoBucaneiro.tipoEChapeu();
macacoBucaneiro.armaEAlcance();
macacoBucaneiro.especieECor();
macacoBucaneiro.classeEHabilidade();

const macacoMago = new MacacoMago("macaco", "mago", "mágico", "cajado", "médio", "marrom", "terra", "terrestre", "sumonar fênix", "chapéu de mago");
macacoMago.nomeEHabitate();
macacoMago.tipoEChapeu();
macacoMago.armaEAlcance();
macacoMago.especieECor();
macacoMago.classeEHabilidade();

const cospeTachinha = new CospeTachinha("cospe tachinha", "cospe tachinha", "suporte", "tachinas", "curto", "branca", "terra", "terrestre", "tempestade de lâminas", "nenhum");
cospeTachinha.nomeEHabitate();
cospeTachinha.tipoEChapeu();
cospeTachinha.armaEAlcance();
cospeTachinha.especieECor();
 cospeTachinha.classeEHabilidade();
