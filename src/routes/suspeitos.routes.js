import { Router } from "express";

const suspeitosRoutes = Router();

let suspeitos = [
  {
    id: Math.floor(Math.random() * 99 + 1),
    nome: "Jollie Santos",
    idade: 28,
    envolvimento: true,
    descricaoFisica: [
      "Altura média",
      "cabelo loiro",
      "tatuagem delicada nos braços",
      "olhos verdes",
    ],
  },
  {
    id: Math.floor(Math.random() * 99 + 1),
    nome: "Jane Smith",
    idade: 30,
    envolvimento: false,
    descricaoFisica: ["Baixa", "cabelo moreno", "olho castanho claro"],
  },
  {
    id: Math.floor(Math.random() * 99 + 1),
    nome: "Jay Z",
    idade: 54,
    envolvimento: true,
    descricaoFisica: ["Alto", "cabelo preto", "olhos pretos"],
  },
];

// Rota para listar os suspeitos
suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});

// Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
  const { nome, idade, envolvimento, descricaoFisica } = req.body;

  // Validação dos campos
  if (!nome || !idade || !envolvimento) {
    return res.status(400).json({
      message: "Os campos nome, idade e envolvimento são obrigatórios!",
    });
  }
  if (envolvimento != "sim" && envolvimento != "não") {
    return res.status(400).send({
      message: "O campo 'envolvimento' deve ser true ou false!",
    });
  }
  if (!Number.isInteger(idade) == false ) {
    return res.status(400).send({
      message: "Idade deve ser um número inteiro!",
    });
  }

  // Criar novo suspeito
  const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    idade,
    envolvimento,
    descricaoFisica,
  };

  // Adicionar novo suspeito ao array de suspeitos
  suspeitos.push(novoSuspeito);
  return res.status(201).json({
    message: "Suspeito cadastrado com sucesso!",
    novoSuspeito,
  });
});

// Buscar suspeito por ID
suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  // Buscar suspeito por ID
  const suspeito = suspeitos.find((suspect) => suspect.id == id);

  // Validação se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `Suspeito com ID ${id} não encontrado!` });
  }
  return res.status(200).json(suspeito);
});

// Atualizar suspeito por ID
suspeitosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, idade, envolvimento, descricaoFisica } = req.body;

  // Buscar suspeito por ID
  const suspeitoIndex = suspeitos.findIndex((suspect) => suspect.id == id);

  // Validação se o suspeito foi encontrado
  if (suspeitoIndex === -1) {
    return res.status(404).json({
      message: `Suspeito com ID ${id} não encontrado!`,
    });
  }

  // Validação de campos obrigatórios
  if (!nome || !idade || envolvimento === undefined) {
    return res.status(400).json({
      message: "Os campos nome, idade e envolvimento são obrigatórios!",
    });
  }
  if (typeof envolvimento !== "boolean") {
    return res.status(400).send({
      message: "O campo 'envolvimento' deve ser true ou false!",
    });
  }
  if (!Number.isInteger(idade)) {
    return res.status(400).send({
      message: "Idade deve ser um número inteiro!",
    });
  }

  // Atualizar o suspeito
  suspeitos[suspeitoIndex] = {
    ...suspeitos[suspeitoIndex],
    nome,
    idade,
    envolvimento,
    descricaoFisica,
  };

  return res.status(200).json({
    message: "Suspeito atualizado com sucesso!",
    suspeito: suspeitos[suspeitoIndex],
  });
});

// Rota para deletar suspeito
suspeitosRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Buscar suspeito por ID
  const suspeito = suspeitos.find((suspect) => suspect.id == id);

  // Validação se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `Suspeito com ID ${id} não encontrado!` });
  }

  // Remover suspeito do array
  suspeitos = suspeitos.filter((suspect) => suspect.id != id);

  return res.status(200).json({
    message: `Suspeito com ID ${id} deletado com sucesso!`,
  });
});

export default suspeitosRoutes;