exports.login = function (req, res) {
    // console.log(req.body);
    // console.log('Email : ' + req.body.email);
    // console.log('Password : ' + req.body.password);

    res.render('index', {
        title: 'Logged in as ' + req.body.email,
        isLoggedIn : true
    })
}