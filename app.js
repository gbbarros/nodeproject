// associar as dependências instaladas
const express = require('express');// inicializar app express
const app = express();
const mongoose = require('mongoose');
let port = 5000;// servidor á escuta no porto 5000
// 'process.env.port': caso usemos Heroku


const bodyParser = require('body-parser');// este middleware deve estar acima das routes-handlers!
app.use(bodyParser.json());


// ‘END POINT INVÁLIDO!’
app.get("/", function(req, res){
    res.send("END POINT INVÁLIDO!");
  });// todo o url começado por ‘/api’ chama as rotas em ‘./routes/api’
  const routes = require("./routes/routes");
app.use("/api", routes);


const DB_USER = 'mongdbcustomer';
const DB_PW = 'mongodbcustomerpw';

mongoose
.connect(
  `mongodb+srv://${DB_USER}:${DB_PW}@cluster0.wkrwn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
)
.then(() => {
  console.log('Conectou ao banco!')
  app.listen(port)
})
.catch((err) => console.log(err))
