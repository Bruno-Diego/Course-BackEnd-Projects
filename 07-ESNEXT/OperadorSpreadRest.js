//Operador spread (espalhar) / Rest (juntar)
//Usar rest como parametro de função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario } //espalha o conteudo de funcionario no clone
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA, 'Ana']
console.log(grupoFinal)