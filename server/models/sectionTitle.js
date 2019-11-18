// Fichier de schema de données pour mongoose
// @export -> app.js

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Le schema de données de ma BDD
let sectionTitleSchema = Schema({

    id: {
        type: Number,
        required: true
    },
    sectionName: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
},
    {
        collection: 'sectionTitle'
    }
);


// Exportation du module pour qu'on puisse y accéder dans le fichier principal
const sectionTitle = module.exports = mongoose.model('sectionTitle', sectionTitleSchema);

// fonction qui permet de recevoir les données dans le fichier principal
module.exports.getSectionTitle = (callback) => {
    sectionTitle.find(callback);
};