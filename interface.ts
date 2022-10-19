/*let pessoa ={
    nome: 'Pietro', 
    idade: 22,
    altura: 1.8,
    cpf: '111.111.111-111',
    solteiro: false,
    habilidades: ['Java', 'Typescrypt', 'Javascript', 'Node.js', 'Springboot'],
    endereco: {
     rua: 'Rua Feliz',
     numero: 567,
     estado: 'CE',
     complemento: 'Sem complemento',
     cep: '1234567', 
}
}

let pessoa2 = {
    nome: 'Pietro', 
    idade: 22,
    altura: 1.8,
    cpf: '111.111.111-111',
    solteiro: false,
    habilidades: ['Java', 'Typescrypt', 'Javascript', 'Node.js', 'Springboot'],
    endereco: {
     rua: 'Rua Feliz',
     numero: 567,
     estado: 'CE',
     complemento: 'Sem complemento',
     cep: '123456-7', 
},

  rg: '4566554455',
} */

interface Endereco{
    rua: string
    numero: number
    estado: string
    complemento: string
    cep: string
}
interface Pessoa{
    nome: string
    idade: number //na interface nao precisa de virgula
    altura: number
    cpf: string
    solteiro: boolean
    habilidades: string[] // pode representar assim ou string[]
    endereco: Endereco
    rg: string
    cumprimentar(): void // metodo cumprimentar. retorna vazio. 
}

const p: Pessoa = {
altura: 1.9, // pode colocar na ordem que quiser, contanto que tenha a mesma info
solteiro: true,
nome: 'Faustão',
idade: 12,
rg: '555536363',
cpf: '2222.2222.222-222',
habilidades: ['HTML'],
endereco: {
    rua: 'Rua Bacana',
    cep: '3142522-72726256',
    complemento: 'Apartamento',
estado: 'PE',
numero: 789
},
cumprimentar() {
    console.log('Saudações, meu nome é' + this.nome)
}
}

const p2: Pessoa = {
    nome: 'Paula',
    altura: 1.7,
    idade: 24,
    cpf: '222222.2222.222.22-22',
    habilidades: ['html'],
    endereco: {
        estado: 'CE',
        rua: 'Rua no Ceará',
        complemento: 'nao tem',
        numero: 607,
        cep: '554545-33',

    },
    rg: '335353434',
    solteiro: false,
        cumprimentar() {
            console.log('Olá para todos! Prazer em conhece-los.')
        } 
}