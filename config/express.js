const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const sass = require('node-sass-middleware');
const path = require('path');


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
    // ยังไม่ได้เรียก express-validation มาให้


    app.use(require('../app/helpers/routeHelpers'));


    // set view ว่าอยู่ที่ floder ไหน และใช้ engine อะไร
    app.set('views', './app/views');
    app.set('view engine', 'ejs')

    // จัดการ route ส่ง app (app = express()) ไปเป็น parameter ของ 
    require('../app/routes/index.routes')(app); // call function ใน index.routes 
    require('../app/routes/user.routes')(app); // app argument ส่งไปให้ routes 

    app.use(sass({
        src : './sass', // source file ทีต้องการให้อ่าน
        dest : './public/css', // ปลายทางที่ต้องการให้แปลงไฟล์ไปเขียน
        outputStyle : 'compressed', // ให้เขียนแบบ compressed (มี 3 options คือ compresssed, compact, expanded)
        prefix : '/css', // ให้เอา folderตามหลัง /css (ตัด /css ออก) ไปต่อทาง urlใน link (html ที่อ้างอิง css
        debug : true //แสดง ระยะเวลาในการ complied
    })); // ต้องเอาไว้ก่อน static

    app.use(express.static('./public'));

    
    return app;
}