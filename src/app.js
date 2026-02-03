const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API CRUD Simples rodando!');
});

// Start server
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}

module.exports = app;
