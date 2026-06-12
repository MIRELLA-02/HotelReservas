const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {

    const item = await prisma.reserva.create({
        data: {
            hospede: req.body.hospede,
            dataEntrada: new Date(req.body.dataEntrada),
            dataSaida: new Date(req.body.dataSaida),
            quartoId: Number(req.body.quartoId),
        }
    });

    return res.status(201).json(item);
};

const listar = async (req, res) => {
    const lista = await prisma.reserva.findMany({
        include: {
            quarto: true
        }
    });

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.quarto.findUnique({
        where: { id: Number(id) },
        include: {
            reservas: [],
        }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const item = await prisma.reserva.update({
        where: { id: Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.reserva.delete({
        where: { id: Number(id) }
    });

    res.json(item).status(200).end();
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}
