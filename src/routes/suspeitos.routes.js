import { Router } from "express";


const suspeitosRoutes = Router();
let suspeitos = [
    {
            id: Math.floor(Math.random() * 99 + 1),
            nome: "Jollie Santos",
            idade: 29,
            descricaoFisica: "Altura média, cabelo loiro, tatuagem delicada nos braços, olhos verdes",
            envolvimento: sim,
    },
    {
            id: Math.floor(Math.random() * 99 + 1),
            nome: "Jane Smith",
            idade: 30,
            descricaoFisica: "Baixa, cabelo moreno, olho castanho claro",
            envolvimento: não,
    },
    {
        id: Math.floor(Math.random() * 99 + 1),
            nome: "Jay z",
            idade: 54,
            descricaoFisica: "Alto, cabelo preto, olhos pretos",
            envolvimento: sim,
    },
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });
  
//Rota para criar um novo suspeito.
const novoSuspeito = {
    id: Math.floor(Math.random() * 99 + 1),
    nome,
    idade,
    envolvimento,
  }
  suspeitos.push(novoSuspeito)
  return res.status(201).json({
    message: "suspeito cadastrado com sucesso!",
    novoSuspeito,
  })

export default suspeitosRoutes;