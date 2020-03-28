const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Cors é para segurança
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
