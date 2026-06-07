function analisar(){

    let salario =
    Number(document.getElementById("salario").value);

    let gastos =
    Number(document.getElementById("gastos").value);

    let invest =
    document.getElementById("investimentos").value;

    let rendimento =
    Number(document.getElementById("rendimento").value);

    let dividas =
    document.getElementById("dividas").value;

    let valorDivida =
    Number(document.getElementById("valorDivida").value);

    let sobra = salario - gastos;

    let analise = "";

    if(sobra <= 0){

        analise += `
        <div class="card">
        <h3>⚠ Situação Crítica</h3>
        <p>Você está gastando igual ou mais do que ganha.</p>
        <p>Reduza gastos não essenciais imediatamente.</p>
        </div>`;
    }

    if(sobra > 0 && sobra < salario*0.15){

        analise += `
        <div class="card">
        <h3>⚠ Atenção</h3>
        <p>Sobra pouco dinheiro no fim do mês.</p>
        <p>Tente economizar pelo menos 20% da renda.</p>
        </div>`;
    }

    if(dividas === "sim"){

        analise += `
        <div class="card">
        <h3>💳 Dívidas</h3>
        <p>Priorize quitar R$ ${valorDivida} em dívidas.</p>
        </div>`;
    }

    if(invest === "nao"){

        analise += `
        <div class="card">
        <h3>📈 Investimentos</h3>
        <p>Considere criar uma reserva de emergência.</p>
        </div>`;
    }

    if(invest === "sim"){

        analise += `
        <div class="card">
        <h3>💰 Investimentos</h3>
        <p>Seu rendimento mensal atual é R$ ${rendimento}</p>
        </div>`;
    }

    analise += `
    <div class="card">
    <h3>📊 Plano Mensal</h3>
    <p>Salário: R$ ${salario}</p>
    <p>Gastos: R$ ${gastos}</p>
    <p>Sobra: R$ ${sobra}</p>
    </div>`;

    document.getElementById("analise").innerHTML = analise;
}
