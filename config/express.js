const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const sass = require('node-sass-middleware');

module.exports = function(){
    const app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else {
        app.use(compression);
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    app.set('views', './app/views');
    app.set('view engine', 'ejs')

    require('../app/routes/index.routes')(app); // call function ใน index.routes 
    require('../app/routes/user.routes')(app);

    app.use(sass({
        src : './sass',
        dest : './public/css',
        outputStyle : 'compressed',
        prefix : '/css',
        debug : true
    })); // ต้องเอาไว้ก่อน static

    app.use(express.static('./public'));
    
    return app;
}