import { Router } from "express";

const suspeitosRoutes = Router();
let suspeitos = [
    {
            id: Math.floor(Math.random() * 99 + 1),
            nome: "Jollie Santos",
            idade: 29,
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
            nome: "Jay z",
            idade: 54,
            descricaoFisica: "Alto, cabelo preto, olhos pretos",
            envolvimento: true,
    },
];





