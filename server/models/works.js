// Fichier de schema de données pour mongoose
// @export -> app.js

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Le schema de données de ma BDD
let workSchema = Schema({

    id: {
        type: Number,
        required: true
    },
    nomProjet: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    nameLibelle: {
        type: String,
        required: true
    },
    name: {
        type: Array,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
},
    {
        collection: 'works'
    }
);


// Exportation du module pour qu'on puisse y accéder dans le fichier principal
const Works = module.exports = mongoose.model('works', workSchema);

// fonction qui permet de recevoir les données dans le fichier principal
module.exports.getWorks = (callback) => {
    Works.find(callback);
};