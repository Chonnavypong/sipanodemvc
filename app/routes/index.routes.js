module.exports = function(app){
    console.log('user route file : ' + typeof(app))
    var index = require('../controllers/index.controller'); // ได้ render method มาใช้
    console.log('user route index : ' + typeof(index))
    app.get('/', index.render);
}
