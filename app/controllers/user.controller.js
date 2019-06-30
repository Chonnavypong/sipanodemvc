// exports เพื่อ export เป็นชื่อ Function ออกไปให้ routes ใช้งาน

exports.login = function (req, res) {
    // ยังไม่มี validation input

    res.render('index', {
        title: 'Logged in as ' + req.body.email,
        isLoggedIn : true
    });
}

exports.logout = function(req, res) {
    res.render('index',{
        title : 'User had logout already',
        isLoggedIn : false
    });
}