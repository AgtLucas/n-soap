'use strict';

var nodeCorreios = require('node-correios'),
  extend = require('extend'),
  correios = new nodeCorreios();

var args = {
    nCdServico: '41106',
    sCepOrigem: '89254105',
    sCepDestino: '30110013',
    nVlPeso: '2',
    nCdFormato: 1,
    nVlComprimento: 20.0,
    nVlAltura: 20.0,
    nVlLargura: 20.0,
    nVlDiametro: 10.0
};

// Executa o método de pesquisa de valor de frete
correios.calcPreco(args, function (result) {
  console.log(result);
});