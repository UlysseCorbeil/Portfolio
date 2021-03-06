// Fichier de schema de données pour mongoose
// @export -> app.js

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Le schema de données de ma BDD
let headerSchema = Schema({

    id: {
        type: Number,
        required: true
    },
    lg: {
        type: String,
        required: true
    },
    title: {
        type: String,
        requirer: true
    },
    surtitle: {
        type: String,
        required: true
    },
    surtitleTwo: {
        type: String,
        required: true
    }
},
    {
        collection: 'header'
    }
);

// Exportation du module pour qu'on puisse y accéder dans le fichier principal
const Header = module.exports = mongoose.model('header', headerSchema);

// fonction qui permet de recevoir les données dans le fichier principal
module.exports.getHeader = (callback) => {
    Header.find(callback);
};
