const express = require('express');
const breads = express.Router();

const Bread = require('../models/breads.js');

//Index - Read All
breads.get('/', (req, res) => {
  //  res.send(Breads);
    res.render('index', {
        breads: Bread,
    });
});


//READ One
breads.get('/:arrayIndex', (req, res) => {
const arrayIndex = res.params.arrayIndex;
res.send(Bread[arrayIndex]);
});

// Export

module.exports = breads;