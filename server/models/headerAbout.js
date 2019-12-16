// Fichier de schema de données pour mongoose
// @export -> app.js

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Le schema de données de ma BDD
let headerAboutSchema = Schema({

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
        required: true
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
        collection: 'headerAbout'
    }
);

// Exportation du module pour qu'on puisse y accéder dans le fichier principal
const HeaderAbout = module.exports = mongoose.model('headerAbout', headerAboutSchema);

// fonction qui permet de recevoir les données dans le fichier principal
module.exports.getHeaderAbout = (callback) => {
    HeaderAbout.find(callback);
};

