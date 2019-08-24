// Fichier de schema de données pour mongoose
// @export -> app.js

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Le schema de données de ma BDD
let projetSchema = Schema({

    nomProjet: {
        type: String,
        required: true
    },
    categProjet: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    descriptionProjet: {
        type: String,
        required: true
    },
    noms: {
        type: Array,
        required: true
    },
    roles: {
        type: Array,
        required: true
    }
});

// Exportation du module pour qu'on puisse y accéder dans le fichier principal
const Projets = module.exports = mongoose.model('projets', projetSchema);

// fonction qui permet de recevoir les données dans le fichier principal
module.exports.getProjets = (callback) => {
    Projets.find(callback);
};