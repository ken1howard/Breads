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
// SHOW
breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    });
  } else {
    res.send('404')
  }
})

// Export

module.exports = breads;