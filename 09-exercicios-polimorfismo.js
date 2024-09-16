// Classe base Carros
class Carros {
  constructor(marca, nome, velocidade, motor, zeroA100) {
    this.marca = marca;
    this.nome = nome;
    this.velocidade = velocidade;
    this.motor = motor;
    this.zeroA100 = zeroA100;
  }

  velocidadeMaxima() {
    console.log(`${this.nome} chega à ${this.velocidade}km/h`);
  }

  aceleracao(segundos) {
    this.zeroA100 = segundos;
    console.log(
      `${this.nome} acelerou de 0 a 100 em: ${this.zeroA100}`
    );
  }
}

// Classe Hypercarro que herda de Carros
class Hypercarro extends Carros {
    constructor(marca, nome, velocidade, motor, zeroA100, cor, tipo) {
        super(marca, nome, velocidade, motor, zeroA100);
        this.cor = cor;
        this.tipo = tipo;
    }
    velocidadeMaxima() {
        console.log(`${this.nome} chega à ${this.velocidade}km/h`);
    }
    aceleracao() {
        console.log(`${this.nome} vai de 0 a 100 em: ${this.zeroA100}segundos`);
    }
}

// Classe SuperCarro que herda de Carros

class SuperCarro extends Carros {
  constructor(marca, nome, velocidade, motor, zeroA100, cor, tipo) {
    super(marca, nome, velocidade, motor, zeroA100, cor, tipo);
    this.cor = cor;
    this.tipo = tipo;
  }
  velocidadeMaxima() {
    console.log(`${this.nome} chega à ${this.velocidade}km/h`);
  }
  aceleracao() {
    console.log(`${this.nome} vai de 0 a 100 em: ${this.zeroA100}segundos`);
  }
}

// Classe Esportivo que herda de Carros
class Esportivo extends Carros {
  constructor(marca, nome, velocidade, motor, zeroA100, cor, tipo) {
    super(marca, nome, velocidade, motor, zeroA100, cor, tipo);
    this.cor = cor;
    this.tipo = tipo;
  }
  velocidade() {
    console.log(`${this.nome} chega à ${this.velocidade}km/h`);
  }
  aceleracao() {
    console.log(`${this.nome} vai de 0 a 100 em: ${this.zeroA100}segundos`);
  }
}

// Criando instâncias de hypercarro, SuperCarro e Esportivo
const hypercarro = new Hypercarro("Bugatti", "Chiron", 400, "V12", 2 );
hypercarro.velocidadeMaxima();
hypercarro.aceleracao();

const superCarro = new SuperCarro("Toyota", "SupraMk4", 250, "2JZ-GTE", 4 );
superCarro.velocidadeMaxima();
superCarro.aceleracao();

const esportivo = new Esportivo("Nissan", "SkylineGTRR34", 300, "V6", 5 );
esportivo.velocidadeMaxima();
esportivo.aceleracao();

