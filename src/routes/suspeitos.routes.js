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
    descricaoFisica: [
      "Baixa",
      "cabelo moreno", 
      "olho castanho claro",
    ],
  },
  {
    id: Math.floor(Math.random() * 99 + 1),
    nome: "Jay Z",
    idade: 54,
    envolvimento: true,
    descricaoFisica: [
      "Alto",
      "cabelo preto", 
      "olhos pretos",
    ]
  },
]

//rota para listar os suspeitos
suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});

// Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
  const { nome, idade, envolvimento, descricaoFisica } = req.body;

  //validação dos campos
  if (!nome || !idade || !envolvimento) {
    return res.status(400).json({
      message: "Os campos nome, idade e envolvimento são obrigatórios!",
    })
  }
  if (envolvimento != "sim" && envolvimento != "não") {
    return res.status(400).send({
      message: "Coloque 'sim' ou 'não'! em envolvido",
    })
  }
  if (Number.isInteger(idade) == false) {
    return res.status(400).send({
      message: "Idade deve ser um número inteiro!",
    })
  }

//criar novo suspeito
  const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    idade,
    envolvimento,
    descricaoFisica,
  }

  // adicionar novo suspeitos ao array de suspeitos
  suspeitos.push(novoSuspeito)
  return res.status(201).json({
    message: "suspeito cadastrado com sucesso!",
    novoSuspeito,
  })
})

//buscar suspeito por id
suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  //buscar suspeito por id
  const suspeito = suspeitos.find((suspect) => suspect.id == id)

  //validação se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `suspeito com id ${id} não encontrado!` })
  }
  return res.status(200).json(suspeito);
})

//atualizar suspeito por id
suspeitosRoutes.put("/:id", req, res) => {
  const { id } = req.params;
  const { nome, idade, envolvimento, descricao } = req.body

  //buscar suspeito por id
  const suspeito = suspeitos.find((suspect) => suspect.id == id)

  //validação campo obrigatório
  if (!nome || !idade || !envolvido) {
    return res.status(400).json({
      message: "Os campos nome, idade, envolvido sao obrigatorios!",
    })
  }
  if (envolvido != "sim" && envolvido != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'! em envolvido",
    })
  }
  if ((Number.isInteger(idade)) == false  ) {
    return res.status(400).send({
      message: "Digite um numero inteiro para idade!!",
    })
  }

suspeitos.nome = nome
suspeitos.idade = idade
suspeitos.envolvido = envolvido
suspeitos.descricaoFisica = descricaoFisica

return res.status(200).json({
  message: "suspeito atualizado com sucesso!",
  suspeito,
})
}

//rota para deletar suspeito
suspeitosRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  //buscar suspeito por id
  const suspeito = suspeitos.find((suspect) => suspect.id == id)

  //validação se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `suspeito com id ${id} não encontrado!` })
  }

  //remover suspeito do array
  suspeitos = suspeitos.filter((suspect) => suspect.id != id)

  return res.status(200).json({
    message: `suspeito com id ${id} deletado com sucesso!`,
  })
})
  

export default suspeitosRoutes