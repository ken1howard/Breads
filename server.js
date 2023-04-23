const express = require('express');

//CONFIGURATION

require('dotenv').config();
const PORT = process.env.PORT;
console.log (PORT);

const app = express();

//Routes

app.get('/', (req, res) => {
    res.send('Welcome to the Breads!');
})

//Listen

app.listen(PORT, () => {
    console.log('Server is listening on port', PORT);
})