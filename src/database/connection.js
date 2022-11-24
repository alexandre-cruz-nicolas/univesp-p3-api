knex = require('knex');

const connection = knex({
    client: "mysql",
    connection: {
        host : 'us-cdbr-east-02.cleardb.com',
        user : 'bc39683e89d2e8',
        password : 'f4ed5ec8',
        database : 'heroku_f93c6a7dc3f1a49' 
    },
    useNullAsDefault: true,
});

module.exports = connection ;