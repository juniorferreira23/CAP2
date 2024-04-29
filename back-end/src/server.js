const express = require('express');
const app = express();
require('dotenv').config();;
const cors = require('cors')
const router = require('./routes/routes');

const PORT = 3000;

app.use(cors());

app.use(router);

app.listen(PORT, (error) => {
    if(error){
        console.log('Erro ao iniciar o servidor')
        console.log(error)
    }else{
        console.log(`Servidor rodando na porta ${PORT}`)
    }
});

