const { response, request } = require('express');

const usuariosGet = (req = request, res = response ) => {

    const { q, nombre = 'Sin nombre', apikey } = req.query;

    res.status(403).json({ 
        ok: true,
        msg: 'get API - desde controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPost = (req, res = response ) => {

    const { nombre, edad } = req.body;

    res.json({ 
        ok: true,
        msg: 'post API - desde controlador',
        nombre, 
        edad
    });
}

const usuariosPut = (req, res = response ) => {

    const { id } = req.params;

    res.json({ 
        ok: true,
        msg: 'put API - desde controlador',
        id
    });
}

const usuariosPatch = (req, res = response ) => {
    res.json({ 
        ok: true,
        msg: 'patch API - desde controlador'
    });
}

const usuariosDelete = (req, res = response ) => {
    res.json({ 
        ok: true,
        msg: 'delete API - desde controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}