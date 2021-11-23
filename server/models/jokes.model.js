const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, 'setup es requerido'],
        minlength: [10, 'setup debe tener al menos 10 caracteres']
    },
    punchline: {
        type: String,
        required: [true, 'punchline es requerido'],
        minlength: [3, 'punchline debe tener al menos 3 caracteres']
    }
}, { timestamps: true });

const Broma = mongoose.model("Broma", JokeSchema);

module.exports = Broma;