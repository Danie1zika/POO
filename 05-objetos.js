class Carro {
  constructor(marca, nome, cor, modelo, pais) {
    // Atributos
    this.marca = marca;
    this.nome = nome;
    this.cor = cor;
    this.modelo = modelo;
    this.pais = pais;
  }
  carro() {
    console.log(`marca do carro: ${this.marca}!`);
  }
  carro1() {
    console.log(`nome do carro: ${this.nome}!`);
  }
  carro2() {
    console.log(`cor do carro: ${this.cor}!`);
  }
  carro3() {
    console.log(`modelo do carro: ${this.modelo}!`);
  }
  carro4() {
    console.log(`pais de origem: ${this.pais}!`);
  }
}
//Objetos
const carro = new Carro('peugeot', 206, 'prata', 'SUV', 'Frances');
carro.carro();

const carro1 = new Carro("peugeot", 206, "prata", "SUV", "Frances");
carro1.carro1();

const carro2 = new Carro("peugeot", 206, "prata", "SUV", "Frances");
carro2.carro2();

const carro3 = new Carro("peugeot", 206, "prata", "SUV", "Frances");
carro3.carro3();

const carro4 = new Carro("peugeot", 206, "prata", "SUV", "Frances");
carro4.carro4();