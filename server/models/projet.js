// Fichier de schema de données pour mongoose
// @export -> app.js

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Le schema de données de ma BDD
let projetSchema = Schema({

    id: {
        type: Number,
        require: true
    },
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
    roles: {
        type: String,
        required: true
    }
},
    {
        collection: 'projets'
    }
);


// Exportation du module pour qu'on puisse y accéder dans le fichier principal
const Projets = module.exports = mongoose.model('projets', projetSchema);

// fonction qui permet de recevoir les données dans le fichier principal
module.exports.getProjets = (callback) => {
    Projets.find(callback);
};