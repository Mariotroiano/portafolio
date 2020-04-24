'use strict'
var Project = require('../models/project');
var fs = require('fs');
var controller = {

    home: function (req, res ) {
        return res.status(200).send({

            message: 'soy home desde el controller project.js'
        });
       
    },

    test: function (req, res) {
        return res.status(200).send({

            message: 'soy test desde el controller project. js'
        });
    },

    saveProject: function (req, res) {
        
        var project = new Project();
        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;
        
        project.save((err, projectStored) => {
            if (err) return res.status(500).send({ message: 'error al guardar documento' });

            if (!projectStored) return res.status(404).send({ message: 'no se pudo guardar el doc' });

            return res.status(200).send({ project: projectStored });


        return res.status(200).send({
            project: project,
           

        });
       
        })

    },


    getProject: function (req, res) {
        
        var projectId = req.params.id;
        if (projectId == null) return res.status(404).send({ message: 'el proyecto no existe' });

        Project.findById(projectId, (err, project) => {

            if (err) return res.status(500).send({ message: 'error al devolver proyecto' });

            if (!project) return res.status(404).send({ message: 'el proyecto no existe' });

            return res.status(200).send({ project });

        });





    },

    getProjects: function (req, res) {

        Project.find({}).exec((err, projects)=> {

            if (err) return res.status(500).send({ message: 'error al devolver proyectos' });
            if (!projects) return res.status(404).send({ message :' los proyectos no existen' });
            return res.status(200).send({ projects })
        });



    },

    updateProject: function (req, res) {

        var projectsId = req.params.id;
        var update = req.body;
        Project.findByIdAndUpdate(projectsId, update, { new: true }, (err, projectsUpdated) => {

            if (err) return res.status(500).send({ message: 'error al actualizar' });
            if (!projectsUpdated) res.status(404).send({ message: 'el proyecto no existe' });
            return res.status(200).send({ project: projectsUpdated });


        });


    },

    removeProjects: function (req, res) {

        var projectId = req.params.id;
        Project.findByIdAndDelete(projectId, (err, projectRemoved) => {

            if (err) return res.status(500).send({ message: 'error al borrar proyecto' });
            if (!projectId) return res.status(404).send({ message: 'elpryectono existe' });
            return res.status(200).send({

                project: projectRemoved
            })

        })


    },


    uploadImage: function (req, res) {

        var projectId = req.params.id;
        var fileName = 'no se subio la imagen';
        
        if (req.files) {

            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];
            if (fileExt == 'jpg' || fileExt == 'png' || fileExt == 'jpeg' || fileExt == 'gif') {
                ///////////////////// subida de archivos ////////////////////////////////
                Project.findByIdAndUpdate(projectId, { image: fileName }, { new: true }, (err, projectUpdated) => {

                    if (err) return res.status(500).send({ message: 'no se concreto la subida' });
                    if (!projectUpdated) return res.status(404).send({ message: 'elproyecto donde quiere guardar la imagen no existe' });

                    return res.status(200).send({
                        files: projectUpdated
                    });
                });
                /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            } else {
                /////////////// fs es una dependencia para los fallos, aca y en el if de arriba se valida si puede ser subido o no el archivo ///////
                fs.unlink(filePath, (err) => {
                    return res.status(500).send({ message: 'el archivo no contiene un formato permitido ' })

                });
            }

           

        } else {
            return res.status(200).send({ message: fileName });
        };
           
                
               

                


    }
    
        
};

module.exports = controller;