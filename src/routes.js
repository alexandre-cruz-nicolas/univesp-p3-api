express = require('express');
knex = require('./database/connection');
uuid = require('uuid');
uuidv4 = uuid.v4; 

//petsControllers = require('./controllers/PetsControllers');

//const petsControllers = PetsControllers.PetsControllers();

let rotas = express.Router();

rotas.get('/', (request, response) => {
  return response.json({message: "Conectado!"});
});

//rotas.post('/pets', petsControllers.newpet);

rotas.post('/pets', async (request, response) => {
  const { nome , sexo, tipo, descricao, doador,  uf, cidade, whatsapp} = request.body;
        
  const id = uuidv4();
  console.log(nome);
  const registro = { nome, id, sexo, tipo, descricao, doador, whatsapp, uf, cidade };
  await knex('pets').insert(registro);
  response.json({message: id });    
} );

module.exports = rotas;