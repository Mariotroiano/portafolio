////////////////////////////////////////////////////////////  TERCER ARCHIVO CREADO //////////////////////////////////////////////////////////



'use strict'

var express = require('express');
var projectController = require('../controllers/project');
var router = express.Router();

var multipart = require('connect-multiparty');

var MultipartyMidelware = multipart({ uploadDir : './uploads'})


router.get('/home', projectController.home);
router.post('/test', projectController.test);
router.post('/save-project', projectController.saveProject);
router.get('/get-project/:id?', projectController.getProject);
router.get('/get-projects', projectController.getProjects);
router.put('/update-project/:id', projectController.updateProject);
router.delete('/delete-project/:id', projectController.removeProjects);
router.post('/upload-image/:id', MultipartyMidelware,  projectController.uploadImage);





module.exports = router;