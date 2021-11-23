const mongoose = require('mongoose');

const PortofolioSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String
    }
});

module.exports = mongoose.model('Portofolio', PortofolioSchema);