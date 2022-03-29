const Customer = require('../models/customer');

exports.test = function (req, res) {
    res.send("Olá! Teste ao Controller");
  };

// TODO: listar pontos de interesse da BD

exports.listall = function (req, res, next) { 
  Customer.find({}).then(function(customer){    
      res.send(customer);      
  }).catch(next);
};

exports.details = function (req, res, next) {
  console.log('You made a details request: ', req.body);
  console.log(req.query.name)
  
  Customer.find({name: new RegExp(req.query.name, 'i') }).then(function(customer){    
      res.send(customer);      
  }).catch(next);
};

exports.add = function (req, res) {
  console.log('You made a POST request: ', req.body);
  Customer.create(req.body).then(function(customer){
    res.send(customer)
  });
};// TODO: atualizar ponto de interesse

exports.update = function (req, res, next) {
  console.log('You made a PUT request: ', req.body);
  Customer.findByIdAndUpdate({_id: req.params.id},
    req.body).then(function(){
      Customer.findOne({_id: req.params.id}).then(function(customer){
    res.send(customer);
    });
  }).catch(next);
};// TODO: apagar ponto de interesse

exports.delete = function (req, res, next) {
  console.log('You made a DELETE request: ', req.body);
  Customer.findOneAndDelete({_id: req.params.id}).then(function(customer){
    console.log("Registo eliminado com sucesso!");
    res.redirect('/api/listall');
  }).catch(next);
};