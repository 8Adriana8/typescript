class Cachorro{
    /**
     * atributos ou propriedades
     */
   /* nome: string
    raca: string = 'Poodle'
    cor: string = 'branco'
    idade: number = 2
    peso: number = 4
    altura: number 
    morde: boolean = true
    vacinado: boolean = true
    pedigree: boolean = true*/

  /*  nome: string
    raca: string 
    cor: string 
    idade: number 
    peso: number 
    altura: number 
    morde: boolean 
    vacinado: boolean 
    pedigree: boolean */

 //sempre que se cria uma classe vc tem q dar um valor a ela no ts


/**
 * Objeto é uma instância de uma classe. 
 * 
 
let c = new Cachorro() //criando novos cachorros
let c2 = new Cachorro()
console.log(c.nome) // Tobi
console.log(c2.nome) //Tobi
c2.nome = 'Jamal' //para mudar o valor
c2.raca = 'pitbull'
c2.cor = 'branco'
c2.idade = 3
c2.peso = 50
console.log(c.nome) //Luki
console.log(c2.nome) //Jamal
//codigo mto grande so para mudar. */

//funcoes ou metodos construtores de uma classe
/**Serve para criar um novo objeto da classe, possamos receber valores para que a classe utilize-os */
//metodo construtor para que gere com ele um objeto

/**
 * Se o programador nao criar o metodo construtor, a propria linguagem ira gerar um método construtor padrao.
 * no Javascript/typescript se pode ter apenas um único metodo construtor.
 */
constructor(
    
public nome: string,  
public raca = string
public cor = string
publi idade: number
public peso: number
public altura: number
public morde: boolean
public vacinado: boolean
public pedigree: boolean
    
    ) {  //parametro nome

    //this faz referencia a própria classe dentro dela mesma
/* 
this.nome = nome 
this.raca = raca
this.cor = cor
this.idade: idade
this.peso: peso
this.altura: altura
this.morde: morde
this.vacinado: vacinado
this.pedigree: pedigree */

//metodo somar tem que retornar um valor numerico 
somar(a: number, b: number): number { //depois dos : vem o tipo de retorno
return a + b
 }

}
/** Objeto é uma estância de uma classe */

let c = new Cachorro('Tutu', 'Pitbull', 'Branco', 3, 50, 0.7, true, true, true) 
console.log(c.nome) 
console.log(c) // aparece toda a classe

