const express = require('express'); //requerimos eñ framework de express para poder llevar a cabo sus funciones
const app = express(); // creamos la costante que tiene express por defecto e la documentación, la cual será igual a una funciónde express() ya definida.
const hbs = require('hbs'); //requerimos la dependencia que necesitamos
require('./hbs/healpers'); //de esta manera requerimos el archivo que posee el código de los helpers

const port = process.env.PORT || 3000; //este es el puerto que definiremos para que heroku lo pueda interpretar

app.use(express.static(__dirname + '/public'));
//EXPRESS HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'alejo quiNtero'
    })
});
app.get('/about', (req, res) => {

    res.render('about')
});

app.listen(port, () => {
    console.log(`Escuchando las peticiones por el puerto ${port}`);
});