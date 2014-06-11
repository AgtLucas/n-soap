'use strict';

var nodeCorreios = require('node-correios'),
  correios = new nodeCorreios();

// Executa o método de pesquisa de valor de frete
correios.calcPreco(args);

// Quando o result for emitido faz um log do retorno da api
correios.on('result', function (result) {
  console.log(result);
});

// Se ocorreu algum erro na execução, faz um log do erro
correios.on('error', function (err) {
  console.log(err);
});