// exports เพื่อ export เป็นชื่อ Function ออกไปให้ routes ใช้งาน

exports.login = function (req, res) {

    //validator ค่าต่างๆ ที่รับเข้ามาก่อน
    email = req.body.email;
    //check(email).isEmail();
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