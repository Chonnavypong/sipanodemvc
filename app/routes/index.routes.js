module.exports = function(app){
    
    var index = require('../controllers/index.controller');
    //console.log(index.render.toString())

    var index = require('../controllers/index.controller'); // ได้ render method มาใช้
    app.get('/', index.render);
}
