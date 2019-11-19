// Fichier de schema de données pour mongoose
// @export -> app.js

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Le schema de données de ma BDD
let errorSchema = Schema({

    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
    {
        collection: 'erreur'
    }
);


// Exportation du module pour qu'on puisse y accéder dans le fichier principal
const Errors = module.exports = mongoose.model('erreur', errorSchema);

// fonction qui permet de recevoir les données dans le fichier principal
module.exports.getError = (callback) => {
    Errors.find(callback);
};