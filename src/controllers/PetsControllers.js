import knex from '../database/connection';
import { v4 as uuidv4 } from 'uuid';

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

export default PetsController;