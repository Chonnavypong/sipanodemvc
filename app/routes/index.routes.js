module.exports = function(app){
    var index = require('../controllers/index.controller'); // ได้ render method มาใช้
    app.get('/', index.render);
}
