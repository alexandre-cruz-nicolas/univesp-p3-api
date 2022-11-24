knex = require('../database/connection');
uuid = require('uuid');

uuidv4 = uuid.v4;

class PetsController {
    async newpet(request, response) { 
      
        const { nome , sexo, tipo, descricao, doador,  uf, cidade, whatsapp} = request.body;
        
        const id = uuidv4();
        console.log(nome);
        const registro = { nome, id, sexo, tipo, descricao, doador, whatsapp, uf, cidade };
        await knex('pets').insert(registro);
        response.json({message: id });     
    };  
}

module.exports = PetsController;