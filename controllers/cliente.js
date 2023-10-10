const express = require("express");
const router = express.Router();

const clienteModel = require("../models/cliente.model");

router.get("/", async function (request, response) {
  let listCliente = await clienteModel.list();
  response.render("cliente", {
    lista: listCliente,
    type: "LISTA",
  });
});

router.get("/consulta-1", async function (request, response) {
  let lista = await clienteModel.con_1();
  response.render("consultas", {
    lista: lista,
    type: "LISTA",
  });
});

router.get("/consulta-2", async function (request, response) {
  let lista = await clienteModel.con_2();
  response.render("consultas", {
    lista: lista,
    type: "LISTA",
  });
});

router.get("/consulta-3", async function (request, response) {
  let lista = await clienteModel.con_3();
  response.render("consultas", {
    lista: lista,
    type: "LISTA",
  });
});

router.get("/consulta-4", async function (request, response) {
  let lista = await clienteModel.con_4();
  response.render("consultas", {
    lista: lista,
    type: "LISTA",
  });
});

router.get("/consulta-5", async function (request, response) {
  let lista = await clienteModel.con_5();
  response.render("consultas", {
    lista: lista,
    type: "LISTA",
  });
});

router.get("/consulta-6", async function (request, response) {
  let lista = await clienteModel.con_6();
  response.render("consultas", {
    lista: lista,
    type: "LISTA",
  });
});

router.get("/consulta-7", async function (request, response) {
  let lista = await clienteModel.con_7();
  response.render("consultas", {
    lista: lista,
    type: "LISTA",
  });
});

router.get("/consulta-8", async function (request, response) {
  let lista = await clienteModel.con_8();
  response.render("consultas", {
    lista: lista,
    type: "LISTA",
  });
});

router.get("/consulta-9", async function (request, response) {
  let lista = await clienteModel.con_9();
  response.render("consultas", {
    lista: lista,
    type: "LISTA",
  });
});

router.get("/consulta-10", async function (request, response) {
  let lista = await clienteModel.con_10();
  response.render("consultas", {
    lista: lista,
    type: "LISTA",
  });
});

router.get("/consulta-11", async function (request, response) {
  let lista = await clienteModel.con_11();
  response.render("consultas", {
    lista: lista,
    type: "LISTA",
  });
});

router.get("/consulta-12", async function (request, response) {
  let lista = await clienteModel.con_12();
  response.render("consultas", {
    lista: lista,
    type: "LISTA",
  });
});

router.get("/consulta-13", async function (request, response) {
  let lista = await clienteModel.con_13();
  response.render("consultas", {
    lista: lista,
    type: "LISTA",
  });
});

module.exports = router;