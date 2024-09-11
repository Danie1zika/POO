class Pessoa {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    mostrarDados() {
        console.log(`nome: ${this.nome}, idade: ${this.idade}, altura: ${this.altura}, peso: ${this.peso}!`);
        }
}

class Estudante extends Pessoa {
  constructor(nome, idade, altura, peso, curso) {
    super(nome, idade, altura, peso);
    this.curso = curso;
  }
mostrarCurso() {
    console.log(`Curso: ${this.curso}!`);
  
}
}
//Classe Funcionario que herda de pessoa
class Funcionario extends Pessoa {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso);
    this.salario = salario;
  }
  mostrarSalario() {
    console.log(`Salário: ${this.salario}!`);
  }
}

// Classe Diretor que herda de Funcionario
class Diretor extends Funcionario {
  constructor(nome, idade, altura, peso, salario, ) {
    super(nome, idade, altura, peso, salario);
  }
}

// Classe Professor que herda Funcionario
class Professor extends Funcionario {
  constructor(nome, idade, altura, peso, salario,) {
    super(nome, idade, altura, peso, salario);
  }
}

// Criando objetos aluno, diretor e professor
const aluno = new Estudante(
  "João",
  16,
  1.7,
  70,
  "Programação de Jogos Digitais"
);
const diretor = new Diretor(
  "Sérgio",
  45,
  1.65,
  65,
  3000,
);
const professor = new Professor(
  "Wanderson",
  40,
  1.65,
  70,
  1000,
  "Programação de Jogos Digitais"
);

aluno.mostrarDados();
aluno.mostrarCurso();
diretor.mostrarDados();
diretor.mostrarSalario();
professor.mostrarDados();
professor.mostrarSalario();
