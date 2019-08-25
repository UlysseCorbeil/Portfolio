const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const compression = require('compression');

//data
const projets_data = require('./models/projet');
const header_data = require('./models/header');

// api
const API_PORT = 3001;
const app = new express();
app.use(cors());
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(bodyParser.json());
app.use(logger('dev'));

const dbRoute = 'mongodb://localhost:27017/Portfolio';

// Crée la connection à mongoose
mongoose.connect(dbRoute, {
    useNewUrlParser: true
});

let db = mongoose.connection;

console.log(db.collections);

db.once('open', () => console.log('connected'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.get('/getProjetsData', (req, res) => {
    projets_data.find(
        async (err, data) => {
            if (err) return await res.json({ success: false, error: err });
            return await res.json({ success: true, data: data });
        }
    );
});

router.get('/getHeaderInfo', (req, res) => {
    header_data.find(
        async (err, data) => {
            if (err) return await res.json({ success: false, error: err });
            return await res.json({ success: true, data: data });
        }
    );
});


// append /api for our http requests
app.use('/api', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));