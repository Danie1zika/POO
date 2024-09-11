class Carro {
  constructor(nome, cor, modelo, marca, pais) {
    // Atributos
    this.nome = nome;
    this.cor = cor;
    this.modelo = modelo;
    this.marca = marca;
    this.pais = pais;
  }
  //Métodos
  nome() {
    console.log(`Nome do carro: ${this.nome}!`);
  }
  cor() {
    console.log(`Cor do carro: ${this.nome}!`);
  }
  modelo() {
    console.log(`Modelo do carro: ${this.nome}!`);
  }
}
