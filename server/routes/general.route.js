module.exports = app => {
    app.get('/api/project/getprojects', (req, res) => {
        var data = require('../json/projects.json');
        res.json(data);
    })

    app.get('/api/apartment/getapartments', (req, res) => {
        var data = require('../json/apartment.json');
        res.json(data);
    })

    app.get('/api/cargo/getcargos', (req, res) => {
        var data = require('../json/cargo.json');
        res.json(data);
    })

    app.get('/api/cliente/getclientes', (req, res) => {
        var data = require('../json/cliente.json');
        res.json(data);
    })

    app.get('/api/proyecto/getproyectos', (req, res) => {
        var data = require('../json/proyecto.json');
        res.json(data);
    })

    app.get('/api/empleado/getempleados', (req, res) => {
        var data = require('../json/empleado.json');
        res.json(data);
    })

    app.get('/api/cargo/getcargos', (req, res) => {
        var data = require('../json/cargo.json');
        res.json(data);
    })
    app.get('/api/enlaces/getenlaces',(req,res)=>{
        var data =require('../json/enlace.json');
        res.json(data);

    })
    app.get('/api/repositorio/getrepositorio',(req,res)=>{
        var data =require('../json/repositorio.json');
        res.json(data);
    })
}