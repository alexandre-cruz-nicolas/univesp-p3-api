import express from 'express'; 

import PetsControllers from './controllers/PetsControllers';

const petsControllers = new PetsControllers();

const rotas = express.Router();

rotas.get('/', (request, response) => {
  return response.json({message: "Conectado!"});
});

rotas.post('/pets', petsControllers.newpet);

export default rotas;