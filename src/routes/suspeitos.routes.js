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

// Rota para cadastrar um novo suspeito
suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});

suspeitosRoutes.post("/", (req, res) => {
  const { nome, idade, envolvimento } = req.body;

  if (!nome || !idade || !envolvimento) {
    return res.status(400).json({
      message: "Os campos nome, idade e envolvimento são obrigatórios!",
    });
  }
  if (envolvimento != "sim" && envolvimento != "não") {
    return res.status(400).send({
      message: "Coloque 'sim' ou 'não'!",
    });
  }
  if (Number.isInteger(idade) == false) {
    return res.status(400).send({
      message: "A idade precisa ser um número inteiro.",
    });
  }

  const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    idade,
    envolvimento,
  };
  suspeitos.push(novoSuspeito);
  return res.status(201).json({
    message: "suspeito cadastrado com sucesso!",
    novoSuspeito,
  });
});
suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  const suspeito = suspeitos.find((suspect) => suspect.id == id);

  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `suspeito com id ${id} não encontrado!` });
  }
  return res.status(200).json(suspeito);
});

suspeitosRoutes.put("/:id", req, res) => {
  const { id } = req.params;
  const { nome, idade, envolvimento, descricao } = req.body;
  const suspeito = suspeitos.find((suspect) => suspect.id == id);
  

export default suspeitosRoutes