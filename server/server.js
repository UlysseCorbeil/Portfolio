const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

//data
const projets_data = require('./models/projet');
const header_data = require('./models/header');
const header_about = require('./models/headerAbout');
const section_title = require('./models/sectionTitle');
const works_data = require('./models/works');
const error_data = require('./models/error');

// @todo
// const url = require('url');

// var urlobj = url.parse(req.originalUrl);
// urlobj.protocol = req.protocol;
// urlobj.host = req.get('host');
// var requrl = url.format(urlobj);

// api
const API_PORT = 3001;
const app = new express();
app.use(cors());
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet.frameguard());
app.use(bodyParser.json());
app.use(logger('dev'));

// dev
const dbRoute = 'mongodb://localhost:27017/Portfolio';

// prod
//const dbRoute = 'mongodb+srv://ulysse:fShsks12321@portfolio-vklaq.azure.mongodb.net/Portfolio';

mongoose.connect(dbRoute, {
    useNewUrlParser: true
});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.get('/getProjetsData', (req, res) => {
    projets_data.find(
        async (err, data) => {
            if (err) return await res.json({ success: false, error: err });
            return await res.json({ success: true, data: data });
        }
    );
});

router.get('/getSectionTitle', (req, res) => {
    section_title.find(
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

router.get('/getHeaderAbout', (req, res) => {
    header_about.find(
        async (err, data) => {
            if (err) return await res.json({ success: false, error: err });
            return await res.json({ success: true, data: data });
        }
    );
});

router.get('/getWorksData', (req, res) => {
    works_data.find(
        async (err, data) => {
            if (err) return await res.json({ success: false, error: err });
            return await res.json({ success: true, data: data });
        }
    );
});

router.get('/getErrorData', (req, res) => {
    error_data.find(
        async (err, data) => {
            if (err) return await res.json({ success: false, error: err });
            return await res.json({ success: true, data: data });
        }
    );
});


app.use('/api', router);

app.listen(API_PORT);
