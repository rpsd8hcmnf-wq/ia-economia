function analisarFinancas() {

let salario = Number(document.getElementById("salario").value);
let gastoPrincipal = Number(document.getElementById("gastoPrincipal").value);
let objetivo = Number(document.getElementById("objetivo").value);
let rendaAnual = Number(document.getElementById("rendaAnual").value);
let despesas = Number(document.getElementById("despesas").value);

let sobra = salario - despesas;

let mensagem = `
<h3>Resumo Financeiro</h3>

<p><strong>Salário Mensal:</strong> R$ ${salario}</p>

<p><strong>Despesas:</strong> R$ ${despesas}</p>

<p><strong>Sobra Atual:</strong> R$ ${sobra}</p>

<p><strong>Meta de Economia:</strong> R$ ${objetivo}</p>

<p><strong>Renda Anual:</strong> R$ ${rendaAnual}</p>
`;

if(sobra >= objetivo){

mensagem += `
<p style="color:green">
✅ Você está dentro da meta financeira.
</p>
`;

}else{

let falta = objetivo - sobra;

mensagem += `
<p style="color:red">
⚠️ Você precisa reduzir gastos ou aumentar renda em aproximadamente R$ ${falta}.
</p>
`;

}

document.getElementById("resultado").innerHTML = mensagem;

}

function consultorIA() {

let relato =
document.getElementById("relato").value.toLowerCase();

let resposta = "";

if(relato.includes("alimentação")){

resposta = `
🍽️ Foi identificado aumento nos gastos com alimentação.

Sugestões:

• Planeje refeições antecipadamente.

• Evite aplicativos de entrega diariamente.

• Defina um limite semanal para alimentação.

• Como o gasto foi causado por viagem, monitore se ele retorna ao normal no próximo mês.
`;

}

else if(relato.includes("cartão")){

resposta = `
💳 Foi identificado possível excesso no cartão.

Sugestões:

• Revise compras parceladas.

• Evite utilizar o limite disponível como renda.

• Priorize quitar a fatura integralmente.
`;

}

else if(relato.includes("viagem")){

resposta = `
✈️ O aumento de despesas parece temporário devido à viagem.

Sugestões:

• Separar gastos excepcionais dos gastos normais.

• Não alterar seu planejamento financeiro de longo prazo por um gasto temporário.

• Compensar parte do valor nos próximos meses.
`;

}

else{

resposta = `
📊 Análise realizada.

Sugestões gerais:

• Registrar gastos diariamente.

• Criar reserva de emergência.

• Definir metas mensais de economia.

• Revisar despesas recorrentes.

• Evitar compras por impulso.
`;

}

document.getElementById("consultoria").innerHTML =
`<pre>${resposta}</pre>`;

}