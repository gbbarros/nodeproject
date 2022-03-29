const express = require ("express");
const router = express.Router();// importa controlador 'apiController.js' da pasta: 
// ‘../controllers/apiController’
const apiController = require("../controllers/apiController");// url do teste será: http://localhost:5000/api/teste
router.get("/teste", apiController.test);module.exports = router;



// url do teste será: http://localhost:5000/api/teste
router.get("/teste", apiController.test);// TODO: listar pontos de interesse da BD
router.get("/listall", apiController.listall);// TODO: listar pontos de interesse da BD
router.get("/details",apiController.details);// TODO: adicionar novo ponto de interesse
router.post("/customer",apiController.add);// TODO: atualizar ponto de interesse
router.put("/customer/:id",apiController.update);// TODO: apagar ponto de interesse
router.delete("/customer/:id",apiController.delete);module.exports = router;