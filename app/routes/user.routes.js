const { check, validationResult } = require('express-validator');

// module.exports เพื่อ export ออกไป config ใน express.js

module.exports = function(app) {
    const user = require('../controllers/user.controller');
    app.post('/login', [
        check('email').not().isEmpty(),
        check('password').not().isEmpty()
    ] ,(req, res)=>{
        try{
            console.log(`user.routes try ==> ${check('email').not().isEmpty()}`)
            req.validate();
            res.json({
                message: check('email').not().isEmpty(), 
                status: status
            });
            user.login;
        }
        catch(ex){
            res.error(ex);
        }
    });
    app.post('/logout', user.logout);
}
