const {
    validationResult
} = require('express-validator');

module.exports = function (req, res, next) {
    // ตรวจสอบ Validation    
    req.validate = function () {
        console.log('req.validate is working')
        const errors = validationResult(req).array();
        if (errors.length == 0) return;
        throw new Error(`${errors[0].param} : ${errors[0].msg}`);
    };

    // แสดงค่า Error
    res.error = function (ex, status = 400) {
        res.status(status).json({
            message: ex.message,
            status: status,
            xxx: 'res.status working'
        });
    };
    next();
};



