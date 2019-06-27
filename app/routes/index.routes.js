module.exports = function(app){
    var index = require('../controllers/index.controller');
    //console.log(index.render.toString())
    app.get('/', index.render);
}