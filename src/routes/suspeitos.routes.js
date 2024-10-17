import { Router } from "express";

const suspeitosRoutes = Router();
let suspeitos = [
  {
    id: Math.floor(Math.random() * 99 + 1),
    nome: "Jollie Santos",
    idade: 28,
    descricaoFisica: "Altura média, cabelo loiro, tatuagem delicada nos braços, olhos verdes",
    envolvimento: true,
  },
  {
    id: Math.floor(Math.random() * 99 + 1),
    nome: "Jane Smith",
    idade: 30,
    descricaoFisica: "Baixa, cabelo moreno, olho castanho claro",
    envolvimento: false,
  },
  {
    id: Math.floor(Math.random() * 99 + 1),
    nome: "Jay Z",
    idade: 54,
    descricaoFisica: "Alto, cabelo preto, olhos pretos",
    envolvimento: true,
  },
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});

// Rota para criar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
  const { nome, idade, descricaoFisica, envolvimento } = req.body;

  const novoSuspeito = {
    id: Math.floor(Math.random() * 99 + 1),
    nome,
    idade,
    descricaoFisica,
    envolvimento,
  };

  suspeitos.push(novoSuspeito);
  return res.status(201).json({
    message: "Suspeito cadastrado com sucesso!",
    novoSuspeito,
  });
});

export default suspeitosRoutes;