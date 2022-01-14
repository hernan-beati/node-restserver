// traigo del paquete de Express la función Router y la llamo
const { Router } = require('express');

const { usuariosGet, 
    usuariosPut, 
    usuariosPost, 
    usuariosDelete, 
    usuariosPatch } = require('../controllers/usuarios');

const router = Router();


// Endpoint GET
router.get('/', usuariosGet );

// Endpoint PUT
router.put('/:id', usuariosPut );

// Endpoint POST
router.post('/', usuariosPost );

// Endpoint PATCH
router.patch('/', usuariosPatch );

// Endpoint DELETE
router.delete('/', usuariosDelete );


module.exports = router;