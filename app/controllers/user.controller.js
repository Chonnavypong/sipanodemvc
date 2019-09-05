
// exports เพื่อ export เป็นชื่อ Function ออกไปให้ routes ใช้งาน

exports.login = function (req, res) {

    res.render('index', {
        title: 'Logged in as ' + req.body.email,
        isLoggedIn: true
    });
}

exports.logout = function (req, res) {
    res.render('index', {
        title: 'User had logout already',
        isLoggedIn: false
    });
}

/*
[
        check('email', 'Your email is not valid').not().isEmpty(),
        check('password', 'Your password must be at least 5 characters').not().isEmpty(),
    ], 
    function(req res){
        
    }
*/