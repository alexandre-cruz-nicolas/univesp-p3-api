express = require('express');
cors = require('cors');
path = require('path');
//{ errors } from 'celebrate';
bodyParser = require('body-parser');

rotas = require('./src/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//app.use(errors());
app.use(rotas);

var porta = process.env.PORT || 3173;
console.log(`servidor adotepet rodando na porta ${porta}`);
app.listen(porta);



