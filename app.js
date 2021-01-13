const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'cotent-Type': 'aplication/json' });

    let salida = {
        nombre: 'Alejandro',
        edad: 24,
        amor: 'Camila',
        tiempo: 3,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();

}).listen(8080);

console.log("Escuchando papi");