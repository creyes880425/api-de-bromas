const BromaController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', BromaController.list);
    app.get('/api/jokes/random', BromaController.getRandom);
    app.get('/api/jokes/:id', BromaController.get);
    app.post('/api/jokes/new', BromaController.create);
    app.put('/api/jokes/update/:id', BromaController.edit);
    app.delete('/api/jokes/delete/:id', BromaController.del);
}