function calcular(){

let salario =
Number(document.getElementById("salario").value);

let gastos =
Number(document.getElementById("gastos").value);

let saldo = salario - gastos;

let mensagem = `
Receita: R$ ${salario}<br>
Gastos: R$ ${gastos}<br>
Saldo: R$ ${saldo}
`;

document.getElementById("resultado").innerHTML = mensagem;

}
