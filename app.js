'use strict';

var nodeCorreios = require('node-correios'),
  extend = require('extend'),
  correios = new nodeCorreios();

var args = {
    nCdServico: '41106',
    sCepOrigem: '89254105',
    sCepDestino: '30110013',
    nvlPeso: '2',
    nCdFormato: 1,
    nVlComprimento: 200,
    nVlAltura: 200,
    nVlLargura: 200,
    nVlDiametro: 100
};

// Executa o método de pesquisa de valor de frete
correios.calcPreco(args, function (result) {
  console.log(result);
});

// Quando o result for emitido faz um log do retorno da api
correios.on('result', function (result) {
  console.log(result);
});

// Se ocorreu algum erro na execução, faz um log do erro
correios.on('error', function (err) {
  console.log(err);
});