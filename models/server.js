const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // rutas de cada bloque de mi app:
        this.usuariosPath = '/api/usuarios';

        // Middlewares: funciones que agregan funcionalidades al levantar server
        this.middlewares();

        // Rutas de mi aplicación
        // llamo desde el constructor a método routes:
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public'));
            
    }

    routes() { 
        // voy a cargar un middleware "condicionalmente", al pasar por ciertas rutas (la de /usuarios/)
        this.app.use( this.usuariosPath, require('../routes/usuarios') );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto http://localhost:${this.port}`)
        })
    }
}

module.exports = Server;
