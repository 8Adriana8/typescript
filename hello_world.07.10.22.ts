
//tipage no Typescript

// tipagem implícita
let uername = 'Shaolin_matador_de_porco',
username = 'flaviodopneu'

// tipagem explicita
let pi: number = 3.1415
let logado: boolean = true  



// union types para ter uma váriavel de um tipo guardando outro tipo de valor (number, string...)
let rg: number | string | boolean = 25636238438473
rg = '202020202020'

let generico: any = []
generico = {
    a: '',
    b: 8,
    c: true
}
generico = 'Eu sou genérico. usado qdo vc não sabe oque vai retornar. Não deve usar toda hora'
generico = 7.89

const listaDeNomes: string[] = ['João', 'Cesar', 'Victor', 'Maria']
listaDeNomes.push('Roberta') 

const notas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//notas.push('iaiaiia') //nao aceita

const valores: Array<string | number> = ['aaaa', 77, 'jjdhdh98']

const array: Array<boolean> = [true, false, true, true]
