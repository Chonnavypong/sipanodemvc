exports.render = function(req, res) {
    res.render('index',{
        'title' : 'Hello Worlds!',
        'isLoggedIn' : false  
    });
};