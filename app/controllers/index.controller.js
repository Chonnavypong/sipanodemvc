exports.render = function(req, res) {
    res.render('index',{
        'title' : 'Hello Worlds!',
        'message_1' : 'EJS is working',
        'message_2' : 'Test CSS on EJS'
    });
};