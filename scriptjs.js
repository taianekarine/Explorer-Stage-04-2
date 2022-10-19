/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:
- nome;
- nota da primeira prova;
- nota da segunda prova.
Depois de criada a lista:
- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. 
*/

let students = [
  {
      name:"Taiane",
      testOne:8.5,
      testTwo:7.5
  },
  {
      name:"Elso",
      testOne:6.5,
      testTwo:4.2
  },
  {
      name:"Joel",
      testOne:7.5,
      testTwo:8.6
  },
  {
      name:"Murilo",
      testOne:5.5,
      testTwo:3.2
  },
  {
      name:"Elisangela",
      testOne:8.5,
      testTwo:8.7
  },
  {
    name:"Jeans",
    testOne:9.5,
    testTwo:10,
},
]

const calcMedia = (testOne,testTwo) => {
  return ((testOne + testTwo) / 2).toFixed(2)
}

for(let media of students) {

  if(calcMedia(media.testOne,media.testTwo) >= 7) {

      alert(`A média do(a) aluno(a) ${media.name} é: ${calcMedia(media.testOne,media.testTwo)}
      Parabéns, ${media.name}! Você foi aprovado(a) no concurso!`)
      
  } else {
      alert(`A média do(a) aluno(a) ${media.name} é: ${calcMedia(media.testOne,media.testTwo)}
      Não foi dessa vez, ${media.name}! Tente novamente!`)
  }
}