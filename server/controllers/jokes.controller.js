const Broma = require('../models/jokes.model');


module.exports.list = (req, resp) => {
    Broma.find()
        .then(data => resp.status(200).json(data))
        .catch(error => {
            console.log('LIST', error);
            resp.status(500).json({ok: false, message: 'Error al obtener las bromas'})
        });
}

module.exports.get = (req, resp) => {
    Broma.findById(req.params.id)
        .then(data => resp.status(200).json(data))
        .catch(error => {
            console.log('GET', error);
            resp.status(500).json({ok: false, message: 'Error al obtener la broma'})
        });
}

module.exports.getRandom = (req, resp) => {
    Broma.estimatedDocumentCount().then((count) => {
        const rand = Math.floor(Math.random() * count);
        Broma.findOne().skip(rand)
        .then(data => resp.status(200).json(data))
        .catch(error => {
            console.log('GET', error);
            resp.status(500).json({ok: false, message: 'Error al obtener la broma'})
        });
    });
}

module.exports.create = (req, resp) => {
    const broma = req.body;
    Broma.create(broma)
        .then(data => resp.status(200).json(data))
        .catch(error => {
            console.log('CREATE', error);
            if(error.name === 'ValidationError'){
                resp.status(500).json({ok: false, message: error.message, error: error})
            } else{
                resp.status(500).json({ok: false, message: 'Error al guardar la broma'})
            }
        });
}

module.exports.edit = (req, resp) => {
    const broma = req.body;
    Broma.findOneAndUpdate({_id: req.params.id }, broma)
        .then(data => resp.status(200).json(broma))
        .catch(error => {
            console.log('EDIT', error);
            if(error.name === 'ValidationError'){
                resp.status(500).json({ok: false, message: error.message, error: error})
            } else{
                resp.status(500).json({ok: false, message: 'Error al guardar la broma'})
            }
        });
}

module.exports.del = (req, resp) => {
    Broma.findByIdAndRemove(req.params.id)
        .then(data => resp.status(200).json(data))
        .catch(error => {
            console.log('DELETE', error);
            resp.status(500).json({ok: false, message: 'Error al eliminar la broma'})
        });
}