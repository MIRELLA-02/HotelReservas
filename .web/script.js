function abrirCadastroQuarto() {
    document.querySelector("#cadastro-quarto").classList.remove("hidden");
    document.querySelector("#lista-quartos").classList.remove("hidden");
    document.querySelector("#reservas-section").classList.add("hidden");
}

function abrirCadastroReserva() {
    document.querySelector("#cadastro-quarto").classList.add("hidden");
    document.querySelector("#lista-quartos").classList.add("hidden");
    document.querySelector("#reservas-section").classList.remove("hidden");

    listarReservas();
    atualizarSelectQuartos();
}


async function cadastrarQuarto() {
    const numero = document.querySelector("#numero").value;
    const tipo = document.querySelector("#tipo").value;

    if (!numero || !tipo) {
        alert("Preencha tudo");
        return;
    }

    await fetch("http://localhost:3000/quarto/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ numero, tipo })
    });

    alert("Quarto cadastrado");
    listarQuartos();
}

async function listarQuartos() {
    try {
        const dadosQuartos = await fetch("http://localhost:3000/quarto/listar").then(res => res.json());
        const container = document.querySelector("#quartos-container");
        container.innerHTML = "";

        dadosQuartos.forEach(quarto => {
            container.innerHTML += `
                <div class="card">
                    <div class="card-header">
                        <h3>Quarto ${quarto.numero}</h3>
                        <p>${quarto.tipo}</p>
                    </div>
                    <div class="card-actions">
                        <button class="btn-reserva" onclick="abrirCadastroReserva()">Reservas</button>
                        <button class="btn-excluir" onclick="excluirQuarto(${quarto.id})">Excluir</button>
                    </div>
                </div>
            `;
        });
    } catch (erro) {
        console.error("Erro ao listar quartos!", erro);
    }
}

async function excluirQuarto(id) {
    if (!confirm("Deseja excluir este quarto?")) return;

    await fetch("http://localhost:3000/excluir/quarto/" + id, {
        method: "DELETE"
    });

    alert("Quarto excluído");
    listarQuartos();
}

async function atualizarSelectQuartos() {
    try {
        const dadosQuartos = await fetch("http://localhost:3000/quarto/listar").then(res => res.json());
        const select = document.querySelector("#select-quarto");

        if (!select) return;

        select.innerHTML = '<option value="">Selecione o Quarto</option>';
        dadosQuartos.forEach(quarto => {
            select.innerHTML += `<option value="${quarto.id}">Quarto ${quarto.numero} - ${quarto.tipo}</option>`;
        });
    } catch (erro) {
        console.error("Erro ao atualizar lista de seleção de quartos:", erro);
    }
}

async function cadastrarReserva() {
    const hospede = document.querySelector("#hospede").value;
    const quartoId = document.querySelector("#select-quarto").value;
    const dataEntrada = document.querySelector("#entrada").value;
    const dataSaida = document.querySelector("#saida").value;

    if (!hospede || !quartoId || !dataEntrada || !dataSaida) {
        alert("Preencha tudo");
        return;
    }

    await fetch("http://localhost:3000/reserva/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            hospede: hospede,
            dataEntrada: dataEntrada,
            dataSaida: dataSaida,
            quartoId: parseInt(quartoId)
        })
    });

    alert("Reserva cadastrada");
    listarReservas();
}

async function listarReservas() {
    try {
        const container = document.querySelector("#reservas-container");
        if (!container) return;
        container.innerHTML = "";

        const dadosReservas = await fetch("http://localhost:3000/reserva/listar")
            .then(res => res.json());

        if (Array.isArray(dadosReservas)) {
            dadosReservas.forEach(reserva => {
                const identificacaoQuarto = reserva.quarto ? `Quarto ${reserva.quarto.numero}` : "Hotel Soul";
                container.innerHTML += `
<div class="card">
    <div class="card-header">
        <h3>${reserva.hospede}</h3>

        <p style="color: #D4AF37; font-weight: bold;">
            ${identificacaoQuarto}
        </p>

        <p>
            ${reserva.dataEntrada} até ${reserva.dataSaida}
        </p>
    </div>

    <div class="card-actions">
        <button
            class="btn-excluir"
            style="width:100%;flex:1;"
            onclick="excluirReserva(${reserva.id})">
            Excluir
        </button>
    </div>
</div>
`;
            });
        }
    } catch (erro) {
        console.error("Erro ao listar reservas:", erro);
    }
}

async function excluirReserva(id) {
    if (!confirm("Deseja excluir esta reserva?")) return;

    await fetch("http://localhost:3000/reserva/excluir/" + id, {
        method: "DELETE"
    });

    alert("Reserva excluída");
    listarReservas();
}

listarQuartos();